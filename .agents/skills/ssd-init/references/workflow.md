# Workflow

## Objetivo

Convertir una idea de funcionalidad en una implementacion revisable usando un flujo de 5 fases y un solo agente.

## Fases

1. Idea del usuario
2. Propuesta del agente
3. Revision del usuario
4. Refinamiento del agente
5. Implementacion

## Plantilla sugerida para un cambio

```md
## Metadata
- ID:
- Titulo:
- Estado: Idea
- Responsable:
- Fecha:

## Fase 1. Idea del usuario

## Fase 2. Propuesta del agente
### Contexto
### Problema
### Objetivo
### Alcance
### Criterios de aceptacion
### Impacto esperado
### Supuestos importantes
### Plan de implementacion
### Verificacion

## Fase 3. Revision del usuario

## Fase 4. Refinamiento del agente

## Fase 5. Implementacion
### Tareas
### Cambios realizados

## Verificacion manual pendiente
### Sugerencias para revisar manualmente
### Dependencias o comandos sugeridos al usuario
### Riesgos o pendientes
```

## Restricciones fijas

- No ejecutar scripts del proyecto.
- No arrancar servidores o watchers.
- No instalar dependencias.
- No correr comandos de entorno que el usuario deba validar manualmente.

## Heuristicas utiles

- Si la idea todavia es vaga, invertir mas esfuerzo en propuesta y menos en implementacion.
- Si el usuario ya definio bien la funcionalidad, ir mas rapido a tareas concretas.
- Si el proyecto no tiene documentacion SSD, resumir el contexto encontrado antes de proponer cambios.
- Si una decision es incierta, dejarla visible como riesgo o duda abierta.
- Si hay dos soluciones viables, preferir la mas simple salvo que el contexto del proyecto indique otra cosa.
- Antes de implementar, dejar claro como se va a verificar el resultado.
