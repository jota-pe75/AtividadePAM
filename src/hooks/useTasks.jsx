// src/hooks/useTasks.js

import { useState } from 'react';
import { Alert } from 'react-native';
import { TEXTS } from '../utils/constants';

export const useTasks = (animacoes) => {
  const [tarefas, setTarefas] = useState([]);
  const [textoTarefa, setTextoTarefa] = useState('');
  const [editandoId, setEditandoId] = useState(null);
  
  const { animarEntrada, animarSaida } = animacoes;

  // Lógica para adicionar ou atualizar uma tarefa
  const adicionarTarefa = () => {
    if (textoTarefa.trim() === '') {
      Alert.alert(TEXTS.alertTitle, TEXTS.alertMessage);
      return;
    }

    if (editandoId) {
      // Atualiza a tarefa existente
      setTarefas(prev => 
        prev.map(tarefa => 
          tarefa.id === editandoId 
            ? { ...tarefa, texto: textoTarefa }
            : tarefa
        )
      );
      setEditandoId(null);
    } else {
      // Adiciona uma nova tarefa
      const novaTarefa = {
        id: Date.now().toString(),
        texto: textoTarefa,
        concluida: false,
        data: new Date().toLocaleTimeString()
      };
      setTarefas(prev => [novaTarefa, ...prev]);
      // Anima a entrada da nova tarefa
      setTimeout(() => animarEntrada(novaTarefa.id), 100); 
    }
    
    setTextoTarefa('');
  };

  const concluirTarefa = (id) => {
    setTarefas(prev => 
      prev.map(tarefa => 
        tarefa.id === id 
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    );
  };

  const iniciarEdicao = (id, texto) => {
    setEditandoId(id);
    setTextoTarefa(texto);
  };

  const excluirTarefa = (id) => {
    // Inicia a animação de saída antes de remover do estado
    animarSaida(id, () => {
      setTarefas(prev => prev.filter(tarefa => tarefa.id !== id));
    });
  };

  const limparConcluidas = () => {
    const concluidas = tarefas.filter(t => t.concluida);
    
    // Anima a saída de cada tarefa concluída
    concluidas.forEach(tarefa => {
      animarSaida(tarefa.id, () => {
        // Garante que a tarefa é removida do estado após a animação
        setTarefas(prev => prev.filter(t => t.id !== tarefa.id));
      });
    });
  };
  
  const pendentesCount = tarefas.filter(t => !t.concluida).length;
  const temConcluidas = tarefas.some(t => t.concluida);

  return {
    tarefas,
    textoTarefa,
    editandoId,
    setTextoTarefa,
    adicionarTarefa,
    concluirTarefa,
    iniciarEdicao,
    excluirTarefa,
    limparConcluidas,
    pendentesCount,
    temConcluidas,
  };
};