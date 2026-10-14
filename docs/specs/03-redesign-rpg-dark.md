# Spec: Rediseño RPG Dark 32 bits (modo oscuro fijo)

## Objetivo
Rediseñar por completo el portafolio manteniendo el mismo contenido base, archivando la versión actual en Git. La nueva experiencia debe ser **solo modo oscuro**, visualmente striking pero controlada, con enfoque en 32 bits / RPG pixel art, usando **rojo y azul como colores principales**, y destacando los **4 mejores proyectos con imagen**.

## Requisitos confirmados
- Archivo de la versión actual **solo mediante Git** (`archive/minimalist-v1`). El tag `v1.0.0` preexistente se conserva sin moverlo (ver archivado).
- Estética: **RPG pixel art oscuro**.
- Modo: **solo oscuro** (sin toggle claro/oscuro).
- Motion: **vistoso pero contenido** (respeta `prefers-reduced-motion`).
- Colores principales: **rojo + azul** (complementados por grises/negros profundos).
- Destacados en portada: **exactamente 4**:
  1. Cuponcitos - SASS
  2. Canchitas - App
  3. KontrolFit Desktop
  4. App Liga de fútbol

## Alcance
- Reescribir layout global, estilos y tokens visuales.
- Reescribir secciones: Hero, About, Experience, Education, Skills, Projects.
- Rediseñar `/proyectos` y `ProjectLayout` (detalles).
- Añadir portada (`image`) a proyectos en `cv.json`.
- Crear componentes retro reutilizables (panel, botón, badge, portada, chip).
- Añadir movimiento sutil y accesible.
- Mantener impresión en claro.
- Añadir/limpiar metadatos SEO básicos.

## No alcance
- No crear nueva información inventada; mantener la info actual.
- No agregar frameworks UI ni Tailwind nuevo (se mantiene Astro + CSS puro).
- No cambiar rutas existentes ni URLs de proyectos.
- No añadir paginación/búsqueda nueva en `/proyectos`.
- No modificar lógica de datos más allá de `image` y `isFeatured`.

## Paleta principal
- Fondo principal: `#050816`
- Fondo secundario: `#0a1024`
- Panel: `#0d1630`
- Borde: `#1f2f5c`
- Texto base: `#dbe4ff`
- Texto muted: `#8ea0d8`
- Rojo principal: `#ff3c3c`
- Rojo claro/hover: `#ff6b6b`
- Azul principal: `#3366ff`
- Azul claro/hover: `#5f8cff`
- Acento XP/dorado: `#f7c948`
- Verde HUD/éxito: `#3cff8b`
- Magenta: `#ff5fd7`

## Tipografía
- Títulos: `Press Start 2P` (pixel).
- Cuerpo/labels: `VT323` (monoespaciada retro).
- Fallbacks: `Menlo, Monaco, Consolas, monospace`.

## Fuentes
- Primera entrega: fuentes autoalojadas en `public/fonts/`, declaradas con `@font-face` en `src/layouts/Layout.astro`, `font-display: swap` y preload.
- Se incluyen Press Start 2P y VT323 originales de `google/fonts` con sus respectivas licencias SIL OFL. No hay peticiones externas de fuentes en runtime.
- Se sustituye la instalación inicialmente propuesta de Fontsource para respetar el flujo SSD sin instalar dependencias ni modificar el entorno.

## Archivado previo (Git)
- Árbol de trabajo limpio al comenzar: no fue necesario crear un commit de congelado.
- Se creó `archive/minimalist-v1` en `5ae13fb`, el HEAD anterior al rediseño.
- `v1.0.0` ya existía en `5a928c2`; se conserva sin sobrescribirlo y no representa el snapshot más reciente.
- No se hicieron commits del rediseño ni push. Push de la rama de archivo pendiente si se desea respaldo remoto.

## Estructura de cambios

### 1. Layout global (`src/layouts/Layout.astro`)
- Modo oscuro fijo: agregar clase `dark` por defecto sin script de toggle.
- Eliminar toggle claro/oscuro y persistencia en `localStorage`.
- Definir tokens CSS centralizados.
- Fondo RPG:
  - rejilla pixelada sutil,
  - capas de estrellas/paralaje suave,
  - scanlines muy leves.
- Tipografía global con variables `--font-display` y `--font-body`.
- `@media print` fuerza claro.
- Meta/OG básicos.

### 2. Componentes retro (nuevos)
Ubicación: `src/components/retro/`
- `RetroPanel.astro`: contenedor con borde pixelado, sombra dura y título.
- `PixelButton.astro`: botón retro con estados hover/active.
- `StatusBadge.astro`: badge pixelado para Activo/Archivado/Destacado.
- `CoverMedia.astro`: portada de proyecto con fallback si no hay imagen.
- `SkillChip.astro`: chip de stack/tecnología.

### 3. Secciones home
#### `Hero.astro`
- HUD retro: nombre en pixel font, label, escena pixel art interactiva programando (sustituye al retrato), ubicación, iconos sociales, CTA a proyectos.

#### `About.astro`
- Panel “Perfil”; mantener `summary`; mejorar interlineado.

#### `Experience.astro`
- “Bitácora de misiones”: timeline con tarjetas, fechas, resumen y highlights en lista real.

#### `Education.astro`
- Panel “Academy”: institución, carrera, fechas.

#### `Skills.astro`
- Inventario grid de chips.

#### `Projects.astro`
- Solo 4 destacados (`isFeatured=true`, máximo 4), con portada.
- Cada tarjeta: imagen, estado, stack, enlace detalle y sitio externo.
- Enlace “Ver todos los proyectos”.

### 4. `/proyectos` (`src/pages/proyectos/index.astro`)
- Rediseñar grid de todos los proyectos.
- Mantener filtros/orden actuales y badges de estado.
- Usar `CoverMedia` cuando exista portada.
- Incluir fallback para proyectos sin imagen (Cafeteria, Tema WP).

### 5. Detalle de proyecto (`src/layouts/ProjectLayout.astro` + páginas)
- Encabezado con portada grande, título, stack y enlaces.
- Galería en grid con lazy loading.
- Contenido textual actual sin cambios.
- Lightbox simple (sin librería) opcional.

### 6. `KeyboardManager.astro`
- Eliminar comando “Cambiar tema” (ya no hay toggle).
- Conservar paleta y comando imprimir (opcional).
- Accesos básicos de navegación.

### 7. Datos (`cv.json`)
Añadir campo `image` por proyecto:
```json
"image": "/images/..."
```

Mapeo de portada sugerido:
- Cuponcitos → `/images/cuponcitos/cuponcitos-1.jpg`
- Canchitas → `/images/canchitas-app/1.jpg`
- RandomTeams → `/images/randomteams/1.png`
- DotLog → `/images/dotlog/1.jpg`
- Eventos App → `/images/eventos-app/eventos-app-1.jpg`
- KontrolFit Web → `/images/kontrolfit/0.png`
- KontrolFit Desktop → crear `/public/images/kontrolfit-desktop/` o usar `/images/kontrolfit/0.png` como fallback inicial
- App Liga → `/images/app-liga/1.jpg`
- App Tortilleria → `/images/app-tortilleria/1.jpg`
- Tema WordPress → crear capturas o usar fallback
- Quiosco → `/images/react-quiosco/01.png`
- AppSalon → `/images/app-salon/1-registro.jpg`
- Cafeteria Astro → crear capturas o usar fallback

Los proyectos sin imagen usan `CoverFallback`.

Los destacados deben ser exactamente:
- Cuponcitos (`isFeatured: true`)
- Canchitas (`isFeatured: true`)
- KontrolFit Desktop (`isFeatured: true`)
- App Liga (`isFeatured: true`)
Los demás deben quedar `isFeatured: false` para no exceder 4.

## Motion (vistoso pero contenido)
- Estrellas/paralaje lento en fondo.
- Hover: elevación 2px, glow rojo/azul controlado.
- Pulso sutil en estado “Activo”.
- Animación de aparición al scroll (opacity + translate corto).
- `prefers-reduced-motion`: desactivar animaciones continuas y transiciones decorativas.

## Accesibilidad
- Focus visible con contraste alto.
- Texto alternativo en portadas.
- Navegación por teclado funcional.
- Animaciones opcionales por preferencia del usuario.

## Impresión
- `@media print` fuerza fondo claro y texto oscuro.
- Ocultar effects, nav auxiliar y command palette.
- Portadas legibles/no obligatorias.

## Verificación
- Build con `astro build`.
- Revisión responsive (320px–1440px).
- Verificar todas las rutas de detalle.
- Confirmar no hay toggle de tema.
- Confirmar dark fijo sin flash blanco.
- Revisar `prefers-reduced-motion`.

## Plan de implementación por fases
1. Commit + branch/tag del v1.
2. Tokens + fuentes + layout dark RPG.
3. Componentes retro.
4. Secciones home (incluye 4 destacados).
5. `/proyectos` + detalle.
6. Data `image` + fallback.
7. Motion, accesibilidad, impresión, SEO.
8. Build y QA.

## Primera entrega: landing (2026-10-14)

### Alcance implementado
- Landing `/`: navegación, HUD con avatar y paisaje pixel art original, Perfil, cuatro Misiones destacadas, Bitácora, Inventario, Academy y contacto.
- Cinco componentes en `src/components/retro/`, tokens compartidos, dark fijo, fuentes locales y metadatos SEO/OG.
- Paleta de comandos oscura con navegación, redes e impresión, sin comando de tema; botón accesible además de Ctrl/⌘+K.
- `image` en todos los proyectos y exactamente cuatro `isFeatured: true`. Se mantienen contenido, rutas y URLs.
- CSS responsive, foco visible, salto al contenido, motion progresivo con `prefers-reduced-motion` e impresión en claro.
- Se priorizan los destacados después del Perfil; experiencia, habilidades y educación siguen a los proyectos.

### Ampliación: escritorio pixel art interactivo (2026-10-14)
- A petición del usuario, sustituir el retrato visible del Hero por `PixelDesk.astro`: ilustración SVG original de Franco con cabello oscuro y camiseta clara, sentado ante un escritorio con computadora. Conservar HUD, nombre, métricas y enlaces.
- Animación CSS con pasos discretos: manos que alternan al teclear, líneas de código y cursor del monitor, respiración sutil y vapor de café. Sin librerías, audio ni datos personales nuevos.
- Clic/toque en la escena, o Enter/Espacio con su botón enfocado, ejecuta una demo visual: estado de compilación breve y confirmación en el monitor; no ejecuta código real ni realiza peticiones de red.
- Controles nativos para pausar/reanudar la escena y encender/apagar la lámpara; estado accesible y mensajes `aria-live` únicamente para la interacción del visitante.
- `prefers-reduced-motion` mantiene la ilustración estática incluso durante la demo; los controles siguen funcionando y el de animación indica que el movimiento está desactivado. Sin JS, escena estática, botón de demo deshabilitado y controles ocultos; las animaciones solo arrancan tras habilitar las interacciones.
- Implementación acotada al nuevo componente y su integración en Hero; no modificar datos, foto original ni metadatos sociales. No ampliar el rediseño a otras rutas.
- Verificar manualmente 320–1440 px, foco/Enter/Espacio, toques repetidos, pausa durante una demo, lámpara, cambio de movimiento reducido en vivo y fallback sin JavaScript. Build/servidor siguen pendientes de ejecución por el usuario.

### Límites y siguientes fases
- `/proyectos` y los detalles heredan el tema global, pero **no se ha rediseñado su estructura**. Continúan pendientes las fases 5 y la QA integral de la spec.
- KontrolFit Desktop utiliza temporalmente `/images/kontrolfit/0.png` (captura de la versión web); reemplazar al disponer de capturas propias.
- Cafetería y Tema WordPress quedan inicialmente con `image: ""`; `CoverMedia` ya ofrece fallback para cuando se migre el listado.

### Verificación de esta entrega
- Realizada: `git diff --check`; comprobación estática de los cuatro destacados exactos, existencia de portadas, rutas de detalle, imports locales y fuentes/licencias; ausencia de toggle y `localStorage` en `src/`.
- No se ejecutaron scripts del proyecto, build, servidor ni instalaciones (restricción del flujo SSD).
- Pendiente para el usuario: `pnpm build` y revisión visual con `pnpm dev` en 320, 375, 768, 1024 y 1440 px; comprobar que no haya overflow horizontal.
- Revisar teclado (Tab, enlaces, Ctrl/⌘+K, Escape), modo de movimiento reducido, carga inicial oscura e impresión/PDF en claro sin efectos ni navegación auxiliar.
- Visitar `/proyectos` y cada detalle para detectar regresiones de los estilos compartidos antes de avanzar a la siguiente fase.