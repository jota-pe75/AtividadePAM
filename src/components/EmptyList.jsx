// src/components/EmptyList.jsx

import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';
import { TEXTS } from '../utils/constants';

export const EmptyList = () => (
  <View style={styles.listaVazia}>
    <Text style={styles.textoListaVazia}>
      {TEXTS.emptyListMessage}
    </Text>
  </View>
);