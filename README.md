# AtividadePAM

A refatoração do código original seguiu os seguintes princípios:

### 1. Separação de Responsabilidades (Componentes)

A interface do usuário foi dividida em componentes pequenos e independentes, tornando cada parte mais fácil de entender e testar.
* **Componentes de Apresentação (`Header`, `TaskItem`, `EmptyList`):** Focam apenas em como os dados são exibidos, recebendo dados e funções de callback via `props`.
* **Componentes Contêiner/Compostos (`TaskList`, `TaskForm`):** Gerenciam a orquestração de componentes de apresentação e chamam a lógica (vindo dos Hooks).
* **Componente Raiz (`App.jsx`):** O único ponto onde o estado e a lógica dos Hooks são consumidos e passados como `props` para os componentes filhos.

### 2. Extração de Lógica com Custom Hooks

Toda a lógica não relacionada à renderização da interface foi extraída para Hooks personalizados, promovendo a reusabilidade e a separação clara de preocupações.
* **`useTasks.js`:** Gerencia o estado (`tarefas`, `textoTarefa`, `editandoId`) e as funções de manipulação de tarefas (`adicionarTarefa`, `concluirTarefa`, `excluirTarefa`, `limparConcluidas`).
* **`useAnimations.js`:** Encapsula a lógica de `Animated.Value` e as funções de animação (`animarEntrada`, `animarSaida`, `animarEstilos`), isolando a complexidade da API de animações.

### 3. Organização de Arquivos

* **`styles/styles.js`:** Todos os estilos foram centralizados em um único arquivo, utilizando `StyleSheet.create` para melhor performance e coesão.
* **`utils/constants.js`:** Cores, textos estáticos e configurações de animação foram movidos para constantes, o que facilita futuras alterações e internacionalização (`i18n`).
