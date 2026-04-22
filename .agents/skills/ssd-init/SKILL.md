---
name: ssd-init
description: Flujo inicial y minimalista de spec-driven development para proyectos de programacion. Usar cuando se deba convertir una idea de funcionalidad en una propuesta clara, refinarla con feedback del usuario e implementar los cambios con un solo agente, evitando sobrecomplicacion, haciendo cambios quirurgicos, explicitando supuestos y definiendo criterios verificables, sin ejecutar scripts del proyecto ni instalar dependencias.
---

# SSD Minimalista

Sigue este flujo cuando el usuario quiera agregar o cambiar una funcionalidad en un proyecto de software y necesite un proceso ligero de analisis, definicion e implementacion.

## Flujo de trabajo

1. Leer el contexto del proyecto antes de proponer cambios.
2. Convertir la idea del usuario en una propuesta concreta.
3. Esperar revision del usuario y detectar ajustes.
4. Refinar la propuesta hasta que quede clara.
5. Implementar solo cuando la propuesta este aprobada.

## Regla principal

No improvisar implementacion sobre una idea ambigua.

Primero aclarar alcance, criterios de aceptacion e impacto tecnico. Despues implementar.

## Restricciones operativas

- No ejecutar scripts del proyecto.
- No arrancar servidores, watchers o comandos de desarrollo.
- No instalar dependencias.
- No modificar el entorno del usuario.
- Si hacen falta dependencias o comandos manuales, sugerirlos al usuario sin ejecutarlos.
- Enfocarse en analisis, propuesta, documentacion e implementacion de codigo.

## Postura de ejecucion

Ademas del flujo SSD, trabajar con estas pautas de comportamiento para reducir errores tipicos al programar con LLM.

### 1. Pensar antes de programar

Antes de implementar:

- Explicitar supuestos importantes.
- Si hay incertidumbre material, decirlo con claridad.
- Si existen varias interpretaciones razonables, mostrarlas en vez de elegir en silencio.
- Si hay un camino mas simple, mencionarlo.
- Si algo es confuso, nombrarlo antes de avanzar.

Regla: no esconder confusion detras de una implementacion segura en apariencia.

### 2. Simplicidad primero

Escribir el minimo codigo que resuelva el problema pedido.

- No agregar features no solicitadas.
- No introducir abstracciones para codigo de un solo uso.
- No agregar configurabilidad especulativa.
- No sumar manejo defensivo para escenarios imposibles salvo que el proyecto ya lo espere.
- Si la solucion crecio mas de lo necesario, simplificarla.

Heuristica: si un senior fuerte diria que esta sobrecomplicado, reducirlo.

### 3. Cambios quirurgicos

Cuando se edita codigo existente:

- Tocar solo lo necesario.
- No refactorizar codigo no relacionado.
- Respetar el estilo local salvo que el usuario pida limpieza amplia.
- Si aparecen problemas no relacionados, mencionarlos sin meterlos en el cambio.

Si el cambio deja imports, variables, funciones o comentarios sin uso, limpiar solo lo que el propio cambio haya dejado huerfano.

Regla: cada linea cambiada debe mapear claramente al pedido del usuario.

### 4. Ejecucion guiada por metas

Convertir pedidos en objetivos verificables.

Ejemplos:

- "Agregar validacion" implica definir entradas invalidas y verificar el comportamiento esperado.
- "Arreglar el bug" implica identificar una reproduccion o condicion verificable y luego corregirla.
- "Refactorizar X" implica preservar comportamiento y dejar claro como se valida.

Para tareas de varios pasos, usar un plan breve con checks concretos.

Ejemplo:

```text
1. Ajustar parsing -> verificar: el caso problematico queda cubierto
2. Actualizar call sites -> verificar: tipos e imports siguen consistentes
3. Ajustar tests o validacion manual -> verificar: el escenario objetivo queda cubierto
```

## Archivos esperados

Si el proyecto ya tiene estructura SSD, usarla.

Priorizar estos archivos cuando existan:

- `README.md`
- `docs/`
- `docs/description.md`
- `docs/specs`

Si no existe una estructura SSD, trabajar con la informacion del proyecto disponible sin forzar una reestructuracion completa.

## Resultado esperado por fase

### Fase 1. Idea

Tomar la idea cruda del usuario y detectar:

- problema
- objetivo
- area afectada
- dudas obvias

### Fase 2. Propuesta

Redactar una propuesta que incluya como minimo:

- contexto
- problema
- objetivo
- alcance
- no alcance
- criterios de aceptacion
- impacto tecnico
- plan de implementacion
- supuestos importantes
- forma de verificacion

### Fase 3. Revision

Registrar o resumir el feedback del usuario con foco en:

- cambios funcionales
- restricciones del proyecto
- simplificaciones deseadas
- omisiones importantes

### Fase 4. Refinamiento

Actualizar la propuesta sin perder trazabilidad de lo acordado.

Si hay ambiguedad, reducirla antes de implementar.

### Fase 5. Implementacion

Implementar lo aprobado y dejar claro:

- que archivos se tocaron
- que se cambio
- que revisar manualmente
- riesgos o pendientes
- que evidencia apoya que el cambio cumple su objetivo

## Estilo de trabajo

- Mantener el proceso simple y trazable.
- Evitar sobre-ingenieria.
- Preferir una propuesta pequena pero clara.
- Crear la spec en `docs/spec` con el numero del cambio.

## Referencias

Para la plantilla sugerida del flujo y la estructura del cambio, revisar [references/workflow.md](references/workflow.md).

Para una checklist compacta de comportamiento y revision, revisar [references/checklist.md](references/checklist.md).
