# Ejercicio 01: Task Board Basico

## Objetivo

Construir una app chica para practicar fundamentos de React sin sobrearquitectura.

## Que estamos practicando

- modelado de estado minimo
- `useState`
- controlled inputs
- listas y `key`
- estado derivado vs estado duplicado
- primeras decisiones de component design

## Consigna

Implementar una app que permita:

1. Mostrar una lista inicial de 4 tareas.
2. Modelar cada tarea con al menos `id`, `title` y `done`.
3. Agregar una tarea nueva con un input y un boton.
4. Marcar una tarea como completada o incompleta.
5. Filtrar por `all`, `active` y `done`.
6. Mostrar un resumen con cantidad de tareas activas y completadas.

## Restricciones

- No usar `Context`.
- No usar `useReducer`.
- No usar librerias de estado.
- No guardar en state valores derivables como `filteredTasks`, `activeCount` o `completedCount`.
- Mantener la solucion simple.

## Decisiones que deberia tomar el usuario

- Como generar `id`.
- Si empezar con todo en `App.tsx` o dividir componentes.
- Si usar checkbox o boton para toggle de completado.
- Como modelar el tipo `Filter`.

## Checklist de auto revision

- El input es controlado.
- Las `key` son estables.
- El filtro se deriva del estado actual.
- No hay estado duplicado.
- El alta de tarea contempla titulo vacio o con espacios.

## Entregable esperado

- Codigo de `App.tsx` y de cualquier componente creado.
- Breve explicacion de decisiones tomadas.
- Dudas o tradeoffs encontrados durante la implementacion.
- Una seccion `Como lo explicaria en entrevista` siguiendo `docs/interview-mode.md`.

## Review esperado del assistant

- Conceptos bien aplicados o flojos.
- Errores y riesgos.
- Tradeoffs.
- Mejoras posibles.
- Preguntas de entrevista asociadas a la solucion.
