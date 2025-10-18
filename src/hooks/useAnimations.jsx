// src/hooks/useAnimations.js

import React, { useRef } from 'react';
import { Animated } from 'react-native';
import { ANIMATION_CONFIG } from '../utils/constants';

export const useAnimations = () => {
  const animacoes = useRef(new Map()).current;

  // Função para obter ou criar um Animated.Value para uma tarefa
  const obterAnimacao = (id) => {
    if (!animacoes.has(id)) {
      animacoes.set(id, new Animated.Value(0));
    }
    return animacoes.get(id);
  };

  // Animação para a entrada (aparecer) de um item na lista
  const animarEntrada = (id) => {
    const animacao = obterAnimacao(id);
    Animated.timing(animacao, {
      toValue: 1,
      duration: ANIMATION_CONFIG.enterDuration,
      useNativeDriver: true,
    }).start();
  };

  // Animação para a saída (desaparecer) de um item da lista
  const animarSaida = (id, callback) => {
    const animacao = obterAnimacao(id);
    Animated.timing(animacao, {
      toValue: 0,
      duration: ANIMATION_CONFIG.exitDuration,
      useNativeDriver: true,
    }).start(() => {
      callback();
      // Remove a animação do mapa após a conclusão para liberar memória
      animacoes.delete(id); 
    });
  };

  // Estilos de animação para serem aplicados no Animated.View
  const animarEstilos = (id) => {
    const animacao = obterAnimacao(id);
    return {
      opacity: animacao,
      transform: [{
        translateY: animacao.interpolate({
          inputRange: [0, 1],
          outputRange: [50, 0] // Desliza de baixo para cima
        })
      }]
    };
  };

  return { animarEstilos, animarEntrada, animarSaida };
};