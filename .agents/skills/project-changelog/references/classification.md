# Clasificacion de cambios

## Tipos

- `feat`: funcionalidad nueva o ampliacion visible
- `fix`: correccion de bug o comportamiento incorrecto
- `refactor`: mejora interna sin cambio funcional principal
- `ui`: cambio visual o de experiencia
- `perf`: mejora de rendimiento
- `docs`: documentacion o guias internas
- `infra`: configuracion, despliegue, tooling o entorno
- `security`: mejora o correccion de seguridad
- `breaking`: cambio incompatible o que exige adaptacion

## Niveles

- `micro`: ajuste pequeno y acotado
- `medium`: cambio puntual con impacto claro
- `major`: cambio amplio, feature grande o reestructuracion relevante

## Heuristicas utiles

- Si el usuario nota el cambio al usar la app, probablemente es `feat`, `fix` o `ui`.
- Si cambia estructura, mantenibilidad o organizacion interna, probablemente es `refactor` o `infra`.
- Si cambia contratos, flujos o compatibilidad, considerar `breaking`.
- Si no estas seguro, priorizar la categoria que mejor explique el efecto real del cambio.

## Regla de honestidad

No subir artificialmente un cambio de `micro` a `major`.

El changelog sirve mas cuando refleja el peso real del trabajo.
