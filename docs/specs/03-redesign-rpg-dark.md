# Spec: Rediseño RPG Dark 32 bits (modo oscuro fijo)

## Objetivo
Rediseñar por completo el portafolio manteniendo el mismo contenido base, archivando la versión actual en Git. La nueva experiencia debe ser **solo modo oscuro**, visualmente striking pero controlada, con enfoque en 32 bits / RPG pixel art, usando **rojo y azul como colores principales**, y destacando los **4 mejores proyectos con imagen**.

## Requisitos confirmados
- Archivo de la versión actual **solo mediante Git** (`archive/minimalist-v1` + tag `v1.0.0`).
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
- Instalar `@fontsource/press-start-2p` y `@fontsource/vt323`.
- Importar en `src/layouts/Layout.astro`.

## Archivado previo (Git)
Ejecutar antes del rediseño:
1. `git add -A`
2. `git commit -m "chore: freeze v1 before redesign"`
3. `git branch archive/minimalist-v1`
4. `git tag v1.0.0`
5. Push opcional de rama/tag.

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
- HUD retro: nombre en pixel font, label, avatar con marco pixelado, ubicación, iconos sociales, CTA a proyectos.

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

## Decisión pendiente menor
- Crear capturas reales para “Cafeteria Astro” y “Tema WordPress”, o dejar fallback inicial.
- Confirmar si KontrolFit Desktop tendrá carpeta propia o fallback inicial.