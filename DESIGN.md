# Sistema de diseño · Portafolio de Franco Silva

> **Referencia para conservar y extender el diseño actual.** La identidad visual está aprobada: los cambios futuros deben desarrollarla, no sustituirla por otra estética.
>
> Base documentada: 2026-10-14. Este archivo describe la implementación existente; no introduce un rediseño ni un nuevo framework.

## Índice

1. [Identidad y principios](#1-identidad-y-principios)
2. [Colores y superficies](#2-colores-y-superficies)
3. [Tipografía](#3-tipografía)
4. [Composición y espaciado](#4-composición-y-espaciado)
5. [Componentes reutilizables](#5-componentes-reutilizables)
6. [Plantillas de página](#6-plantillas-de-página)
7. [Imágenes y contenido](#7-imágenes-y-contenido)
8. [Interacción y movimiento](#8-interacción-y-movimiento)
9. [Responsive](#9-responsive)
10. [Accesibilidad e impresión](#10-accesibilidad-e-impresión)
11. [Cómo desarrollar sin perder coherencia](#11-cómo-desarrollar-sin-perder-coherencia)
12. [Checklist de revisión](#12-checklist-de-revisión)

## 1. Identidad y principios

**RPG pixel art oscuro con base azul nocturna, acentos rojos y lectura clara.** La experiencia presenta el trabajo de un desarrollador como un recorrido por misiones, inventario y bitácora, sin convertirse en un juego que dificulte acceder a la información.

- **Personal, no genérico:** escritorio pixel art propio, ficha `PLAYER_01`, numeración de secciones y pequeños detalles de terminal.
- **Contenido primero:** proyectos y enlaces reales, descripciones comprensibles y jerarquía clara antes que efectos.
- **Retro en el marco, legible en el contenido:** tipografía pixel para identidad y encabezados breves; fuente de lectura para los casos de estudio.
- **Oscuro fijo en pantalla:** no hay selector de tema, persistencia de tema ni variante clara de navegación. La impresión es la excepción.
- **Geometría nítida:** paneles rectangulares, bordes finos, esquinas cuadradas y sombras duras desplazadas.
- **Movimiento vistoso pero contenido:** respuesta breve al interactuar y ambientación discreta, siempre prescindible.
- **Datos honestos:** no inventar métricas, experiencia, tecnologías, resultados ni capturas para completar una composición.

### Lo que identifica este diseño

Conservar la combinación de fondo nocturno con rejilla, estrellas y scanlines suaves; rojo para llamadas principales; azul para navegación y detalles; tipografías retro; paneles con sombra pixelada; y el escritorio interactivo del Hero.

No reemplazar esta base por tarjetas blancas, glassmorphism, degradados morados protagonistas, botones tipo píldora, sombras difusas dominantes o un dashboard genérico. Un pequeño glow o degradado ambiental ya existente no convierte esos efectos en el lenguaje principal.

## 2. Colores y superficies

La fuente de verdad de los tokens globales es [`src/layouts/Layout.astro`](src/layouts/Layout.astro). Reutilizar variables antes de introducir nuevos valores hexadecimales.

### Paleta principal

| Token CSS | Valor | Función |
| --- | --- | --- |
| `--color-bg` | `#050816` | Fondo general azul casi negro |
| `--color-bg-secondary` | `#0a1024` | Paneles y superficies secundarias |
| `--color-panel` | `#0d1630` | Subsuperficies, controles e inventario |
| `--color-text-heading` | `#edf2ff` | Encabezados y máxima jerarquía |
| `--color-text-base` | `#dbe4ff` | Texto principal |
| `--color-text-muted` | `#8ea0d8` | Texto auxiliar y metadatos |
| `--color-border` | `#1f2f5c` | Separadores y bordes normales |
| `--color-border-hover` | `#5f8cff` | Borde destacado al interactuar |
| `--color-red` | `#ff3c3c` | CTA principal, marca y acentos puntuales |
| `--color-red-light` | `#ff6b6b` | Hover del CTA y acentos rojos de texto |
| `--color-blue` | `#3366ff` | Acento azul intenso y selección de texto |
| `--color-blue-light` | `#5f8cff` | Enlaces, índices y detalles interactivos |
| `--color-gold` | `#f7c948` | Destacados, métricas y foco visible |
| `--color-green` | `#3cff8b` | Estado activo y confirmación de éxito |
| `--color-magenta` | `#ff5fd7` | Detalle secundario en la ilustración/código |

### Tokens complementarios existentes

| Token CSS | Valor | Uso |
| --- | --- | --- |
| `--color-text-subheading` | `#dbe4ff` | Texto secundario compatible con estilos anteriores |
| `--color-text-light` | `#8ea0d8` | Alias auxiliar de texto atenuado |
| `--color-badge-bg` | `#111e3d` | Fondo de chips de tecnologías |
| `--color-badge-text` | `#dbe4ff` | Texto de chips |
| `--color-footer-bg` | `#0a1024` | Superficie de footer disponible |
| `--shadow-pixel` | `5px 5px 0 #02040d` | Sombra dura compartida |

### Reglas de aplicación

- La mayor superficie debe seguir siendo azul oscura; los acentos no compiten por cubrir toda la pantalla.
- Usar rojo como llamada principal y azul como orientación. Dorado, verde y magenta tienen funciones puntuales, no crean temas alternativos.
- Los estados se comunican también con texto: `Activo`, `Archivado`, `Destacado`. No depender solo del color.
- Borde habitual: `1px solid var(--color-border)`. La ficha del Hero utiliza `2px` como énfasis deliberado.
- Sombra base sin blur. Botones: desplazamiento de `3px`; ficha del Hero: `7px`; visor de capturas: `8px`.
- Los fondos de imágenes pueden usar el azul de apoyo `#080e20`; no añadir colores arbitrarios por sección.

### Ambientación global

`Layout.astro` compone un fondo fijo, no interactivo y decorativo: iluminación radial azul tenue, rejilla de `40 × 40px`, estrellas y scanlines muy sutiles. No debe tapar texto ni captar eventos del puntero. Evitar duplicar estas capas dentro de cada sección.

## 3. Tipografía

Las tres fuentes están autoalojadas en [`public/fonts/`](public/fonts/) con sus licencias SIL OFL y `font-display: swap`. No se necesitan peticiones externas de fuentes.

| Rol | Fuente / variable | Aplicación |
| --- | --- | --- |
| Identidad y display | Press Start 2P / `--font-display` | Nombre del Hero, `h1`/`h2` breves y pequeños rótulos |
| Interfaz retro | VT323 / `--font-body` | Cuerpo de landing, navegación, botones, estados, chips y metadatos |
| Lectura editorial | Source Sans 3 / `--font-reading` | Cuerpo, subtítulos, documentación y pies de captura de los casos de estudio |

Press Start 2P y VT323 se declaran y precargan en el layout global. Source Sans 3, variable de peso `200–900`, se declara en `ProjectLayout.astro`; `--font-reading` se define dentro de `.project-page`. Al reutilizar una galería fuera de ese layout, proporcionar también su contexto de lectura.

### Tamaños de referencia implementados

Valores en `rem`; las equivalencias en píxeles presuponen una raíz de `16px`.

| Elemento | Referencia |
| --- | --- |
| Cuerpo global VT323 | `1.4rem`, interlineado `1.5` |
| Párrafo global | `1.35rem`, interlineado `1.55` |
| Nombre del Hero | `clamp(2rem, 4.6vw, 3.4rem)`, interlineado `1.5` |
| Eyebrow global | `0.55rem`, interlineado `2`, mayúsculas, tracking `0.08em` |
| Título de `RetroPanel` | `0.7rem` en Press Start 2P; `0.6rem` en móvil pequeño |
| Título de proyecto destacado | `1.7rem` en VT323 |
| Botón principal/secundario | `1.2rem` |
| Cuerpo del caso de estudio | `1.125rem` (18px), interlineado `1.7–1.75` |
| Resumen del caso de estudio | `1.25rem` (20px); `1.125rem` en móvil |
| Título del caso de estudio | `clamp(1.05rem, 2.8vw, 1.9rem)` en Press Start 2P |
| Subtítulos editoriales | `1.25rem`, peso `600`, en Source Sans 3 |
| Subtítulos de documentación | `1.35rem`, peso `600`, en Source Sans 3 |

**No igualar tamaños entre fuentes:** Press Start 2P tiene mucha presencia incluso a tamaños pequeños y no sirve para párrafos largos. Los textos retro de la landing son deliberadamente grandes. Para lectura prolongada, seguir el patrón editorial de los detalles en lugar de reducir VT323 hasta hacerla difícil de leer.

Fallbacks retro: `Menlo, Monaco, Consolas, monospace`; lectura: `sans-serif`.

## 4. Composición y espaciado

### Contenedores

- **Landing:** `width: min(1120px, calc(100% - 4rem))`, centrada.
- **Casos de estudio:** `width: min(1160px, calc(100% - 4rem))`, centrados.
- **Móvil, hasta 680px:** ambos pasan a `calc(100% - 2rem)`, dejando `1rem` a cada lado.
- **Lectura:** párrafos de casos hasta `72ch`, resumen hasta `55ch`; no extender texto a todo el ancho solo porque haya espacio.
- En grids, preferir `minmax(0, 1fr)` y `min-width: 0` para que nombres y capturas no provoquen overflow.

### Ritmo existente

No hay tokens globales de espaciado. Esta es una guía de los valores usados, no variables que ya existan:

| Escala habitual | Uso |
| --- | --- |
| `0.35–0.5rem` | Separación entre chips, iconos y detalles compactos |
| `0.75–1rem` | Separación de controles, metadatos y contenido interno breve |
| `1.1–1.5rem` | Padding de paneles/tarjetas y gap de grids |
| `1.75–2rem` | Bloques internos, listas editoriales y acciones |
| `2.5–3.5rem` | Separación entre secciones; se reduce en móvil |
| `4–4.5rem` | Aire vertical del Hero en escritorio |

Conservar aire entre bloques y densidad moderada dentro de los paneles. No encerrar todos los párrafos en tarjetas ni añadir contenedores decorativos sin función.

### Gramática visual

- Cabeceras separadas por bordes finos, números de dos dígitos y pequeños marcadores cuadrados.
- Detalles como `_`, `↗`, `→`, `＋`, `◆` y esquinas pixeladas refuerzan la identidad sin sustituir etiquetas.
- Estados, tecnologías y acciones se agrupan con `flex-wrap`; no forzar una sola línea en móvil.
- La asimetría se reserva al Hero, ficha lateral y composición de experiencia/inventario. Los proyectos mantienen una rejilla ordenada.

## 5. Componentes reutilizables

| Componente | Contrato actual | Cuándo usarlo |
| --- | --- | --- |
| [`RetroPanel`](src/components/retro/RetroPanel.astro) | `title`, `id`; opcionales `index`, `label`; slot | Secciones de landing: borde, sombra, cabecera, esquina pixelada y `.reveal` |
| [`PixelButton`](src/components/retro/PixelButton.astro) | `href`; `variant="primary" \| "secondary"`; `external` | Enlaces CTA. Es un `<a>`, no un botón para acciones locales |
| [`StatusBadge`](src/components/retro/StatusBadge.astro) | `status="active" \| "archived" \| "featured"` | Estados con texto y marcador cuadrado; activo verde, destacado dorado, archivado atenuado |
| [`SkillChip`](src/components/retro/SkillChip.astro) | `name` | Tecnologías con borde fino, fondo oscuro y tipografía VT323 |
| [`CoverMedia`](src/components/retro/CoverMedia.astro) | `name`, `image` opcional | Portada de tarjeta con relación `16 / 10`; recorte superior con `object-fit: cover` |
| [`PixelDesk`](src/components/retro/PixelDesk.astro) | `name` | Escena personal del Hero; no usar como decoración repetida en otras secciones |
| [`ProjectGallery`](src/components/projects/ProjectGallery.astro) | `images: { src, caption }[]`, `name`; `variant="cover" \| "grid"` | Capturas de casos de estudio con ampliación progresiva |

### Estados y proporciones

- `PixelButton`: altura mínima `46px`, borde fino, sombra dura. Principal rojo; secundario azul oscuro con borde azul. Hover eleva `2px`; active desplaza `2px` y elimina la sombra.
- `RetroPanel`: padding normal `1.5rem`, cabecera diferenciada y etiqueta técnica opcional, como `ABOUT_ME.txt` o `EXPERIENCE.log`.
- Las tarjetas destacadas incluyen cabecera `PROJECT_XX`, estado, portada, título, resumen, stack y enlaces. Las acciones se alinean al fondo aunque varíe la longitud del texto.
- La galería usa dos columnas, marcos de ventana, índices y pies descriptivos. Capturas en `16 / 10` con `object-fit: contain`; portada del caso en `16 / 9`, hasta `560px` de alto.
- No crear variantes locales casi idénticas de estos componentes. Extender su contrato solo si la nueva necesidad tiene sentido en el sistema.

## 6. Plantillas de página

### Landing `/`

Referencia: [`src/pages/index.astro`](src/pages/index.astro) y [`src/components/sections/`](src/components/sections/).

Orden actual que debe preservarse salvo un cambio de contenido acordado:

1. Cabecera con marca `FS`, navegación y contacto.
2. Hero asimétrico: presentación y CTA a la izquierda; ficha `PLAYER_01` con escritorio a la derecha.
3. Perfil, dentro de `RetroPanel`.
4. Cuatro misiones destacadas con imágenes, en dos columnas en escritorio.
5. Bitácora de experiencia junto a Inventario y Academy.
6. Llamada de contacto con acento rojo.
7. Footer y acceso a la paleta de comandos.

Hero: columnas `1.2fr / 0.85fr`, gap `4rem`. Experiencia y sidebar: `1.65fr / 1fr`, gap `1.5rem`.

Los destacados son Cuponcitos, Canchitas, KontrolFit Desktop y App Liga de fútbol. La selección sale de `cv.json`, filtra `isFeatured` y se limita a cuatro; mantener los flags coherentes, no una segunda lista fija en el componente. Las métricas del Hero salen de los datos reales.

El escritorio es SVG inline con píxeles nítidos (`shape-rendering="crispEdges"`), tecleo animado por pasos y una demo visual al pulsarlo. El personaje lleva gafas redondas de montura oscura con un reflejo azul discreto; se mueven con la cabeza sin parpadear junto al ojo. Mantener controles de pausa y luz, alternativa estática y mensajes accesibles. La luz cambia la ilustración, no el tema del sitio.

### Detalle `/proyectos/*`

Referencia: [`src/layouts/ProjectLayout.astro`](src/layouts/ProjectLayout.astro).

Estructura común:

1. Regreso al listado y marca de portafolio.
2. Nombre, resumen, acciones y ficha de misión: categoría, estado, año y stack documentados.
3. Portada grande, tomada de la primera captura de la galería.
4. Contexto: problema y propuesta.
5. Funciones principales, actualmente cuatro por caso.
6. Decisiones técnicas, actualmente tres por caso.
7. Galería curada, solo si hay capturas.
8. Documentación completa dentro de `<details>`.
9. Navegación anterior/siguiente y footer.

En escritorio, índice sticky de `210px` junto al contenido, con gap `3rem`. Hasta `950px`, se sustituye por índice desplegable. Mantener anclas, jerarquía y navegación sin bucle en los extremos.

El contenido original de cada página Astro llega al `<slot />` dentro de la documentación plegada: **no es la fuente de la portada ni de la galería principal**.

### Listado `/proyectos`: excepción actual

[`src/pages/proyectos/index.astro`](src/pages/proyectos/index.astro) todavía conserva un diseño anterior, aunque hereda colores y tipografías globales: contenedor de `700px` mediante `Section.astro`, filas con esquinas redondeadas, badges tipo píldora, mezclas índigo/teal y textos más pequeños.

**Es una diferencia existente, no un patrón a copiar en componentes nuevos.** Para ampliar el sistema, tomar la landing y los casos de estudio como referencia. Su futura unificación sería una tarea explícita, no parte de mantener esta documentación.

Conservar mientras tanto su comportamiento: activos no destacados primero, activos destacados después, archivados al final; dentro de cada grupo, fecha de inicio descendente.

### Página 404 `/404`

Referencia: [`src/pages/404.astro`](src/pages/404.astro). Astro genera `dist/404.html`, que el hosting sirve ante cualquier ruta inexistente.

1. Barra superior con regreso al inicio y marca de portafolio.
2. Composición asimétrica: a la izquierda el estado `SISTEMA / ERROR 404`, el código `404` en Press Start 2P, el título «Misión no encontrada» y las acciones de regreso; a la derecha un `RetroPanel` con zonas conocidas y sus enlaces (inicio, proyectos, experiencia y contacto).
3. Footer y acceso a la paleta de comandos.

Reutiliza fuentes, tokens y componentes de la landing; no añade estilos globales ni una estética distinta.

## 7. Imágenes y contenido

### Tres puntos de integración distintos

| Lugar | Fuente de datos | Qué controla |
| --- | --- | --- |
| Tarjetas destacadas de landing | `projects[].image` en [`cv.json`](cv.json) | Portada de `CoverMedia` |
| Portada y galería del caso | `gallery` en [`src/data/projectDetails.ts`](src/data/projectDetails.ts) | La primera captura es portada; el conjunto alimenta `ProjectGallery` |
| Documentación desplegable | `<img>` de `src/pages/proyectos/*.astro` | Capturas del recorrido completo, dentro del slot |

**Cambiar una imagen en la página Astro no actualiza automáticamente la galería ni la landing.** Al sustituir assets, revisar los tres lugares y comprobar las rutas que correspondan.

- Los archivos de `public/images/` se referencian como `/images/...`, nunca como `/public/images/...`.
- Usar capturas reales, `alt`/pies descriptivos y nombres que permitan distinguir vistas.
- `CoverMedia` admite recorte para resumir una portada; en casos de estudio, conservar la interfaz completa con `contain`. No aplicar pixelación a capturas de aplicaciones.
- Portada del caso: carga `eager` y prioridad alta. Galería y portadas de tarjetas: carga `lazy`, con decodificación asíncrona.
- El fallback de `CoverMedia` funciona cuando no se proporciona imagen; **no recupera por sí solo una URL rota**. Comprobar existencia de los archivos.
- Una galería vacía no debe renderizar una sección sin contenido. No inventar capturas para cubrirla.
- Señalar imágenes provisionales mediante `mediaNote`; no presentar capturas de otro producto como propias definitivas.

### Fuentes de contenido

- `cv.json`: perfil, experiencia, formación, habilidades, metadatos de proyectos, estados, destacados y enlaces.
- `projectDetails.ts`: síntesis editorial por ruta, contexto, funciones, decisiones, selección de capturas y orden anterior/siguiente. `stack`, `url` y `mediaNote` son opcionales.
- Páginas Astro individuales: documentación detallada.

Vincular proyectos por su ruta `description_url`/`path`, no por coincidencias frágiles de nombre. Si no hay estado o año conocido, omitirlo. Mantener el stack coherente en todas sus representaciones.

### Voz y tono

Contenido en español, directo y profesional. La metáfora RPG aparece en títulos cortos —«Misiones destacadas», «Bitácora de misiones», «Inventario», «Ficha de misión»—, no en instrucciones crípticas. Usar acciones claras: «Ver detalle», «Visitar sitio», «Hablemos por correo». El decorado puede decir `CAPTURA_01`; la descripción debe explicar qué se ve.

## 8. Interacción y movimiento

### Respuestas visuales

- Hover de tarjetas y capturas: elevación de `2px`, borde azul o acento rojo controlado.
- Transiciones habituales: `150–180ms`; zoom muy leve de portadas: `300ms`, hasta `scale(1.025)`.
- Entrada `.reveal`: desplazamiento de `16px` y opacidad inicial `0.5`, solo donde se soporta `animation-timeline: view()` y no se pide movimiento reducido. Sin soporte, el contenido sigue visible.
- Estrellas: desplazamiento ambiental lento de `90s`. Estado activo: pulso suave de `3s`.
- Pixel art: animaciones por `steps()`, no interpolación que desdibuje el gesto pixelado.

No añadir carruseles automáticos, parallax agresivo, audio, animaciones que bloqueen la lectura o dependencias para efectos que el CSS actual resuelve.

### Comportamiento progresivo

- Enlaces para navegación; `<button>` para acciones. No hacer clicables contenedores genéricos sin semántica.
- Galería: enlaces a originales sin JS; con JS, `<dialog>` nativo con anterior/siguiente, Escape, flechas, cierre exterior y retorno de foco. Sin navegación circular ni avance automático.
- Documentación e índice móvil: `<details>/<summary>`, utilizables sin JS.
- Escritorio: sin JS queda estático; con JS se habilitan demo y controles. La demo es una simulación local, no una compilación real.
- Paleta existente de `ninja-keys`: Ctrl/⌘+K y botón visible, con navegación, redes e impresión. No reintroducir un comando de cambio de tema.

## 9. Responsive

Los puntos de corte pertenecen a cada componente; no hay un único breakpoint universal.

| Ancho máximo | Adaptación existente |
| --- | --- |
| `950px` | En casos de estudio, desaparece índice lateral y aparece índice móvil desplegable |
| `850px` | Menor gap del Hero; experiencia/sidebar se apilan y la sidebar pasa a dos columnas |
| `700px` | El listado anterior de proyectos pasa sus filas a una columna |
| `680px` | Hero, proyectos destacados y sidebar a una columna; márgenes laterales de `1rem`; contacto apilado; ficha del caso y funciones a una columna |
| `620px` | Galería de capturas a una columna |
| `560px` | `RetroPanel` reduce padding y oculta su etiqueta decorativa; timeline más compacto |
| `360px` | Se simplifican algunos rótulos decorativos y números del inventario |

Mantener contenido y acciones importantes visibles. Ocultar primero texto ornamental, no información esencial. No resolver desbordes con un `overflow-x: hidden` global que esconda el problema. Revisar al menos `320`, `375`, `768`, `1024` y `1440px`.

## 10. Accesibilidad e impresión

### Accesibilidad

- Idioma `es`, landmarks, títulos jerárquicos y etiquetas de navegación descriptivas.
- Enlace «Saltar al contenido» y destino enfocable `#contenido`.
- Foco global: contorno dorado de `3px` con offset de `5px`; no eliminarlo. Algunos controles internos ajustan el offset para evitar recorte.
- Marcadores decorativos con `aria-hidden="true"`; imágenes informativas con texto alternativo útil.
- Los nuevos controles deben aspirar a un área de interacción de al menos `44 × 44px`; el CTA ya ofrece `46px` de altura y el visor usa botones de `44px`. Algunos controles compactos existentes son menores: no asumir que todo el sitio ya cumple esa medida.
- Respetar `prefers-reduced-motion`: desactivar animaciones y transiciones decorativas, además del scroll suave. `PixelDesk` también escucha cambios de esa preferencia en vivo.
- Mantener texto legible en todos los estados y revisar contraste al crear nuevas combinaciones de tokens; una paleta coherente no garantiza por sí sola accesibilidad.
- No hacer de hover, color o animación la única forma de descubrir o entender una acción.

### Impresión / PDF

El modo claro existe **solo para imprimir**: fondo blanco, texto oscuro, sin sombras, fondos decorativos ni animaciones.

- `.no-print` oculta navegación auxiliar, efectos, controles y diálogos.
- `.print` muestra información alternativa útil, como datos de contacto.
- La documentación de los casos se abre al imprimir y se restaura después.
- Evitar cortes dentro de tarjetas, experiencia y capturas cuando sea posible.
- Mantener legible el documento aunque el visor estuviera abierto antes de imprimir.

## 11. Cómo desarrollar sin perder coherencia

### Antes de añadir una sección o página

1. Elegir la referencia correcta: panel de landing o lectura editorial de caso de estudio.
2. Revisar los componentes existentes antes de crear otro.
3. Reutilizar tokens globales; mantener CSS específico dentro del componente o layout correspondiente.
4. Usar datos reales y elegir correctamente su fuente. No duplicar datos editables dentro del markup.
5. Resolver primero móvil, teclado y fallback; después añadir el detalle visual.
6. Comprobar movimiento reducido e impresión si el elemento aparece en esos contextos.

Ejemplo de composición compatible con la landing, sin nuevos estilos globales:

```astro
---
import RetroPanel from '@/components/retro/RetroPanel.astro';
import PixelButton from '@/components/retro/PixelButton.astro';
---

<RetroPanel title="Nueva sección" id="nueva-seccion" label="NOTAS.txt">
  <p>Contenido breve y real, con una función clara dentro del recorrido.</p>
  <PixelButton href="/proyectos" variant="secondary">
    Explorar proyectos <span aria-hidden="true">→</span>
  </PixelButton>
</RetroPanel>
```

### Límites técnicos del diseño

- Astro y CSS nativo, con JavaScript local para las interacciones necesarias. La paleta de comandos ya utiliza `ninja-keys`.
- No introducir frameworks UI, Tailwind, librerías de animación, fuentes externas ni dependencias nuevas solo para replicar lo existente.
- Reservar estilos globales para tokens, base y reglas transversales. Los estilos del contenido de documentación se acotan a `.project-reading`, no a todos los `img`, `h2` o `main` del sitio.
- No modificar archivos generados en `dist/` para implementar diseño.
- Preservar rutas, enlaces, impresión y datos de contacto al cambiar la presentación.

### Mantenimiento de esta guía

Si se aprueba una nueva variante, token o comportamiento reutilizable, actualizar este archivo junto al código. Separar lo implementado de propuestas pendientes; no convertir excepciones heredadas en estándares por accidente.

Fuentes relacionadas:

- [Spec del rediseño RPG Dark](docs/specs/03-redesign-rpg-dark.md): intención y alcance originales; contiene propuestas históricas, no todos sus pasos están implementados.
- [Spec de casos de estudio](docs/specs/04-project-case-studies.md): estructura editorial y comportamiento de los detalles.
- [Historial de cambios](docs/changes/): decisiones y entregas por fecha.

## 12. Checklist de revisión

- [ ] Se reconoce la misma identidad RPG oscura, no un nuevo tema visual.
- [ ] Se reutilizan colores, fuentes y componentes existentes.
- [ ] Se mantiene la diferencia entre interfaz retro y lectura editorial.
- [ ] El contenido importante tiene jerarquía, aire y longitud de lectura controlada.
- [ ] No hay datos, tecnologías, resultados ni imágenes inventados.
- [ ] Las imágenes existen y sus referencias están actualizadas donde corresponda: landing, galería y documentación.
- [ ] No hay overflow horizontal en los anchos de referencia.
- [ ] Navegación, foco y acciones funcionan con teclado y toque, no solo hover.
- [ ] El contenido esencial sigue accesible sin JavaScript.
- [ ] Movimiento reducido e impresión mantienen una experiencia útil.
- [ ] Los cambios globales se revisan en landing, listado y detalles, no solo en la página editada.
- [ ] La verificación distingue revisión estática, compilación y prueba visual; no se afirma una prueba no realizada.
- [ ] Los cambios de sistema quedan reflejados en `DESIGN.md` y en el historial del proyecto.
