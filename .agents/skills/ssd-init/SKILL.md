---
name: ssd-init
description: Flujo ligero de spec-driven development para convertir ideas de funcionalidades en especificaciones claras, revisables e implementables. Usar cuando haya que analizar una solicitud, escribir o refinar una spec en docs/spec, acordar alcance, criterios de aceptacion, plan tecnico y verificacion, y luego implementar cambios quirurgicos con un solo agente, sin instalar dependencias ni ejecutar scripts del proyecto.
---

# SSD Init

Usar esta skill para pasar de una idea ambigua a una especificacion breve, aprobada y verificable antes de tocar codigo.

## Reglas base

- Leer primero el contexto del proyecto y los archivos afectados.
- No implementar si el alcance, los criterios de aceptacion o la verificacion siguen ambiguos.
- Antes de preguntar al usuario, resolver con el codigo cualquier duda que pueda contestarse leyendo `README.md`, `docs/`, specs existentes, schemas, rutas, tests o convenciones locales.
- Cuando haga falta preguntar para cerrar una spec, hacer una sola pregunta concreta por turno e incluir la respuesta recomendada.
- Proponer la solucion mas simple que cumpla el objetivo.
- Tocar solo los archivos necesarios y evitar refactors no solicitados.
- No ejecutar scripts del proyecto, levantar servidores, watchers, instalar dependencias ni modificar el entorno.
- Si una validacion requiere comandos, dependencias o acciones manuales, dejarlas como instrucciones para el usuario.

## Flujo

1. **Contexto:** revisar `README.md`, `docs/`, `docs/description.md`, `docs/specs` o los archivos relevantes que existan.
2. **Entrevista:** cerrar ramas de decision que afecten la implementacion; investigar primero en codigo y preguntar de a una cuando no haya evidencia suficiente.
3. **Spec:** crear o actualizar una spec compacta en `docs/specs` con numero de cambio cuando aplique.
4. **Revision:** pedir confirmacion si hay decisiones funcionales abiertas o impacto relevante.
5. **Refinamiento:** incorporar feedback y dejar trazabilidad de lo acordado.
6. **Implementacion:** aplicar solo lo aprobado y reportar cambios, riesgos y verificacion pendiente.

## Spec minima

Cada spec debe dejar claro:

- **Objetivo y alcance:** que se quiere lograr, que entra y que queda fuera.
- **Comportamiento esperado:** criterios verificables, casos principales y errores esperados.
- **Implementacion:** archivos o modulos afectados y pasos tecnicos necesarios.
- **Supuestos y verificacion:** decisiones tomadas, dudas abiertas y como comprobar el resultado.

## Calidad de la spec

- Escribir en terminos del dominio del proyecto, no en generalidades.
- Cambiar frases vagas como "mejorar validacion" por entradas, salidas y errores esperados.
- Separar comportamiento funcional de detalles tecnicos.
- Mantener el no-alcance explicito para evitar features accidentales.
- No crear secciones separadas si repiten la misma informacion; combinar problema con objetivo, plan con impacto tecnico y criterios con verificacion cuando sea suficiente.

## Entrevista para cerrar decisiones

Usar un estilo tipo `grill-me` cuando la idea inicial todavia no alcanza para escribir una spec implementable:

- Resolver primero las decisiones bloqueantes: objetivo, alcance, usuarios, comportamiento, datos, errores, integraciones y verificacion.
- Hacer una pregunta por turno, no una lista larga.
- Acompanar cada pregunta con una respuesta recomendada y una razon breve.
- Convertir cada respuesta en una decision registrada en la spec.
- Si la siguiente pregunta depende de una respuesta anterior, esperar esa respuesta antes de avanzar.

## Referencias

- Para la plantilla completa de spec y fases, usar `references/workflow.md`.
- Para una revision rapida antes de programar o terminar, usar `references/checklist.md`.
