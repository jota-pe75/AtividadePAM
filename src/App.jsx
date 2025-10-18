// App.jsx (Antigo GerenciadorTarefas)

import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Header } from './src/components/Header';
import { TaskForm } from './src/components/TaskForm';
import { TaskList } from './src/components/TaskList';
import { useAnimations } from './src/hooks/useAnimations';
import { useTasks } from './src/hooks/useTasks';
import { styles } from './src/styles/styles';

export default function App() {
  // 1. Lógica de Animações
  const { animarEstilos, animarEntrada, animarSaida } = useAnimations();

  // 2. Lógica de Estado e CRUD de Tarefas
  const {
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
  } = useTasks({ animarEntrada, animarSaida }); // Passa as funções de animação

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Header pendentesCount={pendentesCount} />

      <TaskForm 
        textoTarefa={textoTarefa}
        setTextoTarefa={setTextoTarefa}
        adicionarTarefa={adicionarTarefa}
        editandoId={editandoId}
        limparConcluidas={limparConcluidas}
        temConcluidas={temConcluidas}
      />

      <TaskList
        tarefas={tarefas}
        concluirTarefa={concluirTarefa}
        iniciarEdicao={iniciarEdicao}
        excluirTarefa={excluirTarefa}
        animarEstilos={animarEstilos}
      />
    </KeyboardAvoidingView>
  );
}