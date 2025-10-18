// src/components/TaskList.jsx

import React from 'react';
import { FlatList } from 'react-native';
import { TaskItem } from './TaskItem';
import { EmptyList } from './EmptyList';
import { styles } from '../styles/styles';

export const TaskList = ({ tarefas, concluirTarefa, iniciarEdicao, excluirTarefa, animarEstilos }) => {

  const renderizarTarefa = ({ item }) => (
    <TaskItem 
      item={item}
      concluirTarefa={concluirTarefa}
      iniciarEdicao={iniciarEdicao}
      excluirTarefa={excluirTarefa}
      animarEstilos={animarEstilos}
    />
  );
  
  return (
    <FlatList
      data={tarefas}
      keyExtractor={(item) => item.id}
      renderItem={renderizarTarefa}
      style={{ flex: 1 }}
      contentContainerStyle={styles.conteudoLista}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={<EmptyList />}
    />
  );
};