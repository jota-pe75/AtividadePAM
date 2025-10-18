// src/components/TaskItem.jsx

import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { styles } from '../styles/styles';

export const TaskItem = React.memo(({ item, concluirTarefa, iniciarEdicao, excluirTarefa, animarEstilos }) => {
  
  const handleEdit = () => iniciarEdicao(item.id, item.texto);
  const handleDelete = () => excluirTarefa(item.id);
  const handleToggle = () => concluirTarefa(item.id);

  return (
    <Animated.View 
      style={[
        styles.itemTarefa,
        animarEstilos(item.id),
      ]}
    >
      <TouchableOpacity 
        style={styles.conteudoTarefa}
        onPress={handleToggle}
      >
        <View style={[
          styles.checkbox,
          item.concluida && styles.checkboxConcluida
        ]}>
          {item.concluida && <Text style={styles.checkmark}>✓</Text>}
        </View>
        
        <View style={styles.textoContainer}>
          <Text style={[
            styles.textoTarefa,
            item.concluida && styles.textoConcluido
          ]}>
            {item.texto}
          </Text>
          <Text style={styles.dataTarefa}>
            {item.data}
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.botoesAcao}>
        <TouchableOpacity 
          style={[styles.botaoAcao, styles.botaoEditar]}
          onPress={handleEdit}
        >
          <Text style={styles.textoBotaoAcao}>✏️</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.botaoAcao, styles.botaoExcluir]}
          onPress={handleDelete}
        >
          <Text style={styles.textoBotaoAcao}>🗑️</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
});