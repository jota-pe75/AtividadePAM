// src/components/Header.jsx

import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';
import { TEXTS } from '../utils/constants';

export const Header = ({ pendentesCount }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.titulo}>{TEXTS.appTitle}</Text>
      <Text style={styles.subtitulo}>
        {pendentesCount} {TEXTS.pendingText}
      </Text>
    </View>
  );
};