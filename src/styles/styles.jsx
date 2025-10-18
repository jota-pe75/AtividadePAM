// src/styles/styles.js

import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../utils/constants';

export const styles = StyleSheet.create({
  // App.jsx (Container Principal)
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: Platform.OS === 'android' ? 30 : 60, // Ajuste para Android/iOS
  },

  // Header.jsx
  header: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: 5,
  },

  // TaskForm.jsx
  formulario: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    backgroundColor: COLORS.textLight,
    padding: 15,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 10,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  botaoAdicionar: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  textoBotaoAdicionar: {
    color: COLORS.textLight,
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoLimpar: {
    backgroundColor: COLORS.secondary,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotaoLimpar: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },

  // TaskList.jsx
  conteudoLista: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  // TaskItem.jsx
  itemTarefa: {
    backgroundColor: COLORS.textLight,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  conteudoTarefa: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.border,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxConcluida: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  checkmark: {
    color: COLORS.textLight,
    fontSize: 14,
    fontWeight: 'bold',
  },
  textoContainer: {
    flex: 1,
  },
  textoTarefa: {
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  textoConcluido: {
    textDecorationLine: 'line-through',
    color: COLORS.textSecondary,
  },
  dataTarefa: {
    fontSize: 12,
    color: COLORS.dataText,
    marginTop: 2,
  },
  botoesAcao: {
    flexDirection: 'row',
  },
  botaoAcao: {
    padding: 8,
    borderRadius: 6,
    marginLeft: 8,
  },
  botaoEditar: {
    backgroundColor: COLORS.editButton,
  },
  botaoExcluir: {
    backgroundColor: COLORS.deleteButton,
  },
  textoBotaoAcao: {
    fontSize: 16,
  },

  // EmptyList.jsx
  listaVazia: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  textoListaVazia: {
    textAlign: 'center',
    color: COLORS.textSecondary,
    fontSize: 16,
    lineHeight: 24,
  },
});