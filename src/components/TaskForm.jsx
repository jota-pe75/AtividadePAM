// src/components/TaskForm.jsx

import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles/styles';
import { TEXTS } from '../utils/constants';

export const TaskForm = ({ textoTarefa, setTextoTarefa, adicionarTarefa, editandoId, limparConcluidas, temConcluidas }) => {
  return (
    <View style={styles.formulario}>
      <TextInput
        style={styles.input}
        placeholder={TEXTS.inputPlaceholder}
        value={textoTarefa}
        onChangeText={setTextoTarefa}
        onSubmitEditing={adicionarTarefa}
      />
      
      <TouchableOpacity 
        style={styles.botaoAdicionar}
        onPress={adicionarTarefa}
      >
        <Text style={styles.textoBotaoAdicionar}>
          {editandoId ? TEXTS.updateButton : TEXTS.addButton}
        </Text>
      </TouchableOpacity>

      {temConcluidas && (
        <TouchableOpacity 
          style={styles.botaoLimpar}
          onPress={limparConcluidas}
        >
          <Text style={styles.textoBotaoLimpar}>{TEXTS.clearCompletedButton}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};