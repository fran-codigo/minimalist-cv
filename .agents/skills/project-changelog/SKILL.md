---
name: project-changelog
description: Registra cambios funcionales y tecnicos de un proyecto en un changelog consistente. Usa esta skill cuando haya que documentar features grandes o pequenas, fixes, refactors, mejoras visuales, cambios internos, decisiones relevantes o el resumen de una sesion de trabajo para mantener trazabilidad de la aplicacion.
---

# Project Changelog

Usa esta skill para registrar cambios del proyecto de forma clara, acumulable y util para seguimiento real.

El objetivo no es escribir release notes bonitas, sino dejar historial operativo que permita entender que cambio, por que importa y que quedo pendiente.

## Flujo base

1. Leer el contexto del cambio actual.
2. Detectar si el cambio fue funcional, tecnico o mixto.
3. Clasificar impacto y tamano.
4. Resumir el cambio con lenguaje claro y sin inflarlo.
5. Registrar o actualizar el changelog del proyecto.

## Ubicacion por defecto

Si el proyecto ya tiene un archivo o carpeta de historial, reutilizarlo.

Si no existe convencion previa, usar solo:

- `docs/changes/YYYY-MM-DD-01.md`

Reglas:

- Usar fecha completa en el nombre del archivo.
- Si el mismo dia se registra una nueva funcionalidad o una entrada separada, crear el siguiente correlativo con dos digitos: `01`, `02`, `03`.
- Antes de crear un archivo nuevo para ese dia, revisar si ya existen archivos `docs/changes/YYYY-MM-DD-XX.md` y usar el siguiente numero disponible.
- No crear `docs/changelog.md` ni `CHANGELOG.md` salvo que el proyecto ya los use como convencion previa.

## Modos de registro

### Quick log

Usarlo para:

- correcciones pequenas
- ajustes visuales
- validaciones menores
- cambios internos acotados
- tareas de mantenimiento

En este modo, registrar:

- fecha
- tipo
- resumen breve
- archivos tocados si aportan contexto
- pendiente solo si existe

### Full log

Usarlo para:

- features nuevas
- cambios de flujo
- endpoints nuevos o cambios de comportamiento
- refactors relevantes
- migraciones
- cambios con impacto visible para usuario o equipo

En este modo, registrar:

- fecha
- tipo
- titulo corto
- contexto
- cambio realizado
- impacto funcional
- impacto tecnico
- archivos o modulos afectados
- riesgos o pendientes

## Reglas de escritura

- Escribir lo que realmente cambio, no lo que "suena bien".
- No exagerar cambios pequenos.
- No ocultar breaking changes o riesgos.
- Preferir lenguaje claro y concreto.
- Si hubo varios cambios distintos, separarlos en entradas diferentes o en items claros.
- Si el cambio no es visible para usuario final, marcar su impacto como tecnico.
- Si el cambio corrige comportamiento, dejar visible que problema se resolvio.

## Clasificacion

Usar estas categorias cuando apliquen:

- `feat`
- `fix`
- `refactor`
- `ui`
- `perf`
- `docs`
- `infra`
- `security`
- `breaking`

Usar estos niveles de tamano cuando ayuden:

- `micro`
- `medium`
- `major`

## Que registrar

Registrar tanto:

- funcionalidades nuevas
- mejoras pequenas
- correcciones menores
- cambios internos
- decisiones tecnicas
- tareas de mantenimiento

No dejar fuera un cambio solo por ser pequeno si ayuda a reconstruir la historia del proyecto.

## Que leer segun necesidad

- Para formato de salida: `references/formats.md`
- Para clasificacion y criterios: `references/classification.md`
- Para flujo de actualizacion: `references/workflow.md`

## Resultado esperado

Al terminar, el proyecto debe quedar con una entrada nueva o una actualizacion concreta en su changelog, lista para que otra persona entienda:

- que se hizo
- donde impacto
- si fue algo pequeno o importante
- que pendientes quedaron
