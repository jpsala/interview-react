# Interview Mode

## Objetivo

Practicar no solo como escribir React, sino como explicar decisiones tecnicas con claridad bajo presion.

## Problema a entrenar

En entrevistas muchas veces el bloqueo no es solo tecnico. Tambien cuesta:

- pensar y hablar al mismo tiempo
- justificar decisiones sin irse por las ramas
- explicar tradeoffs con claridad
- narrar debugging sin sonar desordenado

## Regla de trabajo

Despues de cada ejercicio, el usuario agrega una explicacion corta de su solucion.

## Prefijo `TIP`

Cuando el usuario escriba `TIP`, el assistant responde con una guia muy minima.

Reglas de esa respuesta:

- priorizar enfoque conceptual
- no resolver el ejercicio
- no bajar a codigo
- no dar implementacion completa
- no agregar detalle innecesario
- solo incluir codigo si el usuario lo pide explicitamente

Formato ideal:

1. una idea central
2. una o dos preguntas que el usuario deberia hacerse
3. si hace falta, una advertencia corta sobre un error comun

## Plantilla base

```md
## Como lo explicaria en entrevista

Problema:
...

Enfoque:
...

Por que use este estado:
...

Que alternativa descarte:
...
```

## Respuesta corta recomendada

Cuando una respuesta se pone larga, volver a esta estructura:

1. objetivo
2. decision
3. tradeoff
4. siguiente paso

Ejemplo:

"Arranque con `useState` local porque el estado todavia vive en una sola pantalla. Evite `Context` para no agregar complejidad antes de necesitar compartirlo. Si apareciera prop drilling real o multiples consumidores, reevaluaria esa decision."

## Que revisa el assistant

Ademas del codigo, el assistant revisa:

- claridad de explicacion
- justificacion tecnica
- tradeoffs mencionados o faltantes
- exceso de detalle o falta de foco
- como responderia mejor en una entrevista real

## Modos de practica

### 1. Explicacion post ejercicio

El usuario implementa y luego explica su solucion en pocas lineas.

### 2. Mock interview

El assistant hace preguntas como interviewer y el usuario responde en vivo.

### 3. Debugging verbalizado

El usuario practica explicar:

- sintoma
- hipotesis
- validacion
- conclusion

## Meta

Construir una narrativa tecnica corta, clara y senior.
