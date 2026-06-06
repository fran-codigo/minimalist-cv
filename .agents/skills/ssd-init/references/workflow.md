# Workflow SSD

## Objetivo

Convertir una idea de funcionalidad en una spec breve, aprobada e implementable con un solo agente.

## Fases compactas

1. **Idea:** capturar problema, objetivo y dudas.
2. **Entrevista:** investigar el repo para contestar dudas tecnicas y preguntar de a una las decisiones que sigan abiertas.
3. **Spec:** proponer alcance, criterios, impacto, plan y verificacion.
4. **Revision:** incorporar feedback del usuario.
5. **Refinamiento:** cerrar ambiguedades y actualizar la spec.
6. **Implementacion:** aplicar solo lo aprobado y reportar evidencia.

## Plantilla sugerida

```md
## Metadata
- ID:
- Titulo:
- Estado: Idea
- Fecha:

## Fase 1. Idea del usuario
- Solicitud original:
- Lectura inicial:
- Dudas:

## Fase 2. Entrevista y decisiones
- Contexto revisado:
- Preguntas hechas:
- Respuestas y decisiones:
- Supuestos:

## Fase 3. Propuesta del agente
### Objetivo y alcance
- Objetivo:
- Incluye:
- No incluye:

### Comportamiento esperado
- Caso principal:
- Casos limite o errores:
- Criterios de aceptacion:

### Implementacion
- Archivos o modulos:
- Pasos:
- Riesgos:

### Supuestos y verificacion
- Supuestos:
- Dudas abiertas:
- Como verificar:

## Fase 4. Revision del usuario
- Feedback:
- Cambios acordados:

## Fase 5. Refinamiento del agente
- Spec ajustada:
- Decisiones cerradas:

## Fase 6. Implementacion
- Archivos tocados:
- Cambios realizados:
- Evidencia o verificacion posible:
- Pendientes o riesgos:
```

## Criterios para una buena spec

- Debe poder revisarse sin leer todo el codigo.
- Debe decir que queda fuera del cambio.
- Debe convertir pedidos vagos en comportamientos observables.
- Debe distinguir decisiones confirmadas, supuestos y dudas abiertas.
- Debe evitar secciones redundantes: si dos apartados dicen lo mismo, fusionarlos.
- Debe evitar tareas genericas como "actualizar logica"; cada paso debe indicar donde y para que.

## Restricciones

- No ejecutar scripts del proyecto.
- No arrancar servidores o watchers.
- No instalar dependencias.
- No correr comandos de entorno que el usuario deba validar manualmente.

## Heuristicas

- Si la idea todavia es vaga, invertir mas esfuerzo en propuesta y menos en implementacion.
- Si el usuario ya definio bien la funcionalidad, ir mas rapido a tareas concretas.
- Si el proyecto no tiene documentacion SSD, resumir el contexto encontrado antes de proponer cambios.
- Si una decision es incierta, dejarla visible como riesgo o duda abierta.
- Si una decision puede cambiar el diseno, preguntar una sola cosa y dar una recomendacion concreta antes de escribir la spec final.
- Si hay dos soluciones viables, preferir la mas simple salvo que el contexto del proyecto indique otra cosa.
- Antes de implementar, dejar claro como se va a verificar el resultado.
