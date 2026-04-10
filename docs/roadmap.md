# React Interview Prep Roadmap

## Objetivo

Usar este repo para practicar React con foco de entrevista tecnica, priorizando aprendizaje real, implementaciones chicas y decisiones justificadas.

## Forma de trabajo

- Cada etapa deja algo funcionando.
- La implementacion la hace principalmente el usuario.
- El assistant propone consignas, revisa codigo y marca tradeoffs.
- Evitamos sobrearquitectura.
- Sumamos conceptos nuevos cuando el problema los justifique.
- Cada ejercicio tambien practica comunicacion de entrevista.
- El prefijo `TIP` pide una respuesta minima, conceptual y sin codigo salvo pedido explicito.

## Stack base

- Vite
- React
- TypeScript
- Vitest
- Testing Library

## Etapas

### 1. Fundamentos

Practicas principales:

- `useState`
- controlled inputs
- render de listas
- `key`
- estado derivado
- lifting state up

Entregable sugerido:

- task board basico

### 2. Diseno de componentes

Practicas principales:

- composicion
- props claras
- responsabilidades por componente
- colocation de estado

Entregable sugerido:

- refactor del task board en componentes chicos

### 3. Context

Practicas principales:

- cuando usar y cuando no usar `Context`
- separar estado global de estado local
- providers pequenos
- costos de rerender

Entregable sugerido:

- `ThemeContext` o `UIPreferencesContext`

### 4. Reducer y estado compartido

Practicas principales:

- `useReducer`
- eventos y transiciones de estado
- combinar `reducer` con `Context` cuando tenga sentido

Entregable sugerido:

- task board con acciones mas claras y estado centralizado

### 5. Effects y async

Practicas principales:

- `useEffect`
- loading y error
- cleanup
- race conditions
- persistencia local o fetch mockeado

Entregable sugerido:

- carga inicial de tareas y guardado local

### 6. Debugging

Practicas principales:

- stale closures
- dependencias incorrectas
- keys inestables
- estado duplicado
- bugs de sincronizacion

Entregable sugerido:

- resolver bugs intencionales sobre la app

### 7. Performance

Practicas principales:

- medir antes de optimizar
- rerenders evitables
- memoizacion con criterio
- particion de estado

Entregable sugerido:

- mejorar un caso concreto de rendering innecesario

### 8. Interview mode

Practicas principales:

- preguntas conceptuales
- code review
- refactor guiado
- argumentar tradeoffs

Entregable sugerido:

- simulacion de entrevista tecnica

## Convenciones de docs

- `docs/exercises/`: consignas activas o historicas
- `docs/interview-mode.md`: guia para explicar decisiones con claridad en entrevista
- `docs/reviews/`: devoluciones sobre implementaciones
- `docs/sessions/`: continuidad compactada para retomar facil

## Estado actual

- Etapa activa: `1. Fundamentos`
- Ejercicio activo: `docs/exercises/01-task-board-basico.md`
