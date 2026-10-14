export interface ProjectCapture {
  src: string;
  caption: string;
}

export interface ProjectDetail {
  path: string;
  title: string;
  category: string;
  summary: string;
  need: string;
  solution: string;
  features: { title: string; description: string }[];
  decisions: { title: string; description: string }[];
  gallery: ProjectCapture[];
  stack?: string[];
  url?: string;
  mediaNote?: string;
}

// Orden editorial de los detalles. Los textos sintetizan las páginas originales,
// que se conservan íntegramente en el apartado desplegable de documentación.
export const projectDetails: ProjectDetail[] = [
  {
    path: '/proyectos/1m-kontrolfit-desktop',
    title: 'KontrolFit Desktop',
    category: 'DESKTOP / GESTIÓN',
    summary: 'La operación diaria de un gimnasio, desde una aplicación de escritorio que funciona sin conexión a internet.',
    need: 'Administrar socios, membresías, pagos, asistencias y caja sin depender de una conexión permanente ni de un servidor remoto.',
    solution: 'Una aplicación local que reúne la recepción del gimnasio, valida las membresías al registrar entradas y conecta los cobros con la caja y la impresión de comprobantes.',
    features: [
      { title: 'Socios y membresías', description: 'Códigos únicos, búsqueda y filtros por plan o estado. Las renovaciones anticipadas conservan los días ya pagados.' },
      { title: 'Recepción y asistencias', description: 'Registro por código con validación de membresía y pago. Las visitas de un día se gestionan sin crear socios.' },
      { title: 'Caja e impresión', description: 'Apertura, ingresos, movimientos y cierre de caja con tickets para pagos, visitas y cierres.' },
      { title: 'Control de la información', description: 'Permisos por módulo, respaldos y restauración de la base de datos, además de exportación a CSV.' },
    ],
    decisions: [
      { title: 'Datos locales con SQLite', description: 'Go y Wails integran la aplicación con el sistema operativo; SQLite y GORM almacenan la información en el equipo.' },
      { title: 'Impresión directa con ESC/POS', description: 'Tickets de 58 u 80 mm para Windows y Linux sin pasar por el diálogo del navegador ni generar un PDF.' },
      { title: 'Activación sin conexión', description: 'Licencias vinculadas al equipo, verificadas con firmas Ed25519, para mantener el funcionamiento offline.' },
    ],
    gallery: [
      { src: '/images/kontrolfit/1.png', caption: 'Panel de actividad del gimnasio' },
      { src: '/images/kontrolfit/2.jpg', caption: 'Gestión de socios' },
      { src: '/images/kontrolfit/6.png', caption: 'Operaciones de caja' },
      { src: '/images/kontrolfit/7.png', caption: 'Impresión y comprobantes' },
    ],
    mediaNote: 'Capturas provisionales de KontrolFit Web como referencia visual. Pendiente incorporar capturas propias de la versión Desktop.',
  },
  {
    path: '/proyectos/1f-cuponcitos',
    title: 'Cuponcitos',
    category: 'SAAS / FIDELIZACIÓN',
    summary: 'Programas de lealtad con cupones digitales, recompensas y una página pública para cada negocio.',
    need: 'Dar a los negocios un espacio para administrar cupones, clientes y recompensas, y a sus clientes una forma de consultar los beneficios disponibles.',
    solution: 'Una plataforma SaaS con panel por negocio, catálogo de premios, reglas de canje, planes de suscripción y consulta pública de cupones.',
    features: [
      { title: 'Cupones y recompensas', description: 'Cupones con códigos únicos, puntos y estados de disponibilidad, canje o vencimiento.' },
      { title: 'Administración por negocio', description: 'Estadísticas de clientes y cupones, productos canjeables y condiciones configurables para las recompensas.' },
      { title: 'Página pública', description: 'Cada negocio cuenta con un identificador y un slug propios para mostrar premios y verificar el estado de sus cupones.' },
      { title: 'Suscripciones y plataforma', description: 'Planes, pagos y facturación por negocio; un superadministrador gestiona negocios, precios y estadísticas generales.' },
    ],
    decisions: [
      { title: 'Aplicación con Nuxt y Vue', description: 'Nuxt y Vue construyen la aplicación, con Nuxt UI para los componentes de interfaz y Drizzle ORM para gestionar los datos almacenados en Turso.' },
      { title: 'Acceso y protección', description: 'Registro, recuperación de contraseña y verificación de correo, con rate limiting para limitar intentos de acceso.' },
      { title: 'Reglas de fidelización configurables', description: 'Las condiciones de puntos y recompensas se activan o desactivan desde el panel de cada negocio.' },
    ],
    gallery: [
      { src: '/images/cuponcitos/new/1.jpg', caption: 'Panel de administración del negocio' },
      { src: '/images/cuponcitos/new/2.jpg', caption: 'Gestión de cupones digitales' },
      { src: '/images/cuponcitos/new/3.jpg', caption: 'Catálogo de recompensas' },
      { src: '/images/cuponcitos/new/4.jpg', caption: 'Página pública del negocio' },
    ],
  },
  {
    path: '/proyectos/1h-canchitas-app',
    title: 'Canchitas App',
    category: 'WEB APP / COMUNIDAD',
    summary: 'Un espacio para que equipos locales registren sus partidos y compartan sus resultados con su comunidad.',
    need: 'Centralizar los resultados de equipos locales de fútbol y basketball y crear un lugar donde sus seguidores puedan encontrarlos.',
    solution: 'Una red social deportiva con gestión privada del equipo, feed público y perfiles que reúnen resultados y próximos partidos.',
    features: [
      { title: 'Panel del equipo', description: 'Gestión de torneos, jugadores y partidos con marcador, fecha y ubicación.' },
      { title: 'Comunidad de fans', description: 'Los seguidores pueden seguir equipos y dar me gusta a sus resultados.' },
      { title: 'Feed y perfiles públicos', description: 'Exploración de partidos, búsqueda por código y una página para consultar la actividad de cada equipo.' },
      { title: 'Vista general', description: 'Dashboard con información agregada de equipos, jugadores y partidos registrados.' },
    ],
    decisions: [
      { title: 'Aplicación full-stack con Nuxt', description: 'Nuxt 4 y Nitro reúnen la interfaz Vue 3 y el servidor; Nuxt UI y Tailwind CSS componen los controles visuales.' },
      { title: 'Persistencia relacional', description: 'Drizzle ORM conecta el servidor con PostgreSQL alojado en Neon.' },
      { title: 'Registro verificado', description: 'nuxt-auth-utils gestiona la autenticación, Zod valida los datos y Nodemailer envía los códigos de verificación por correo.' },
    ],
    gallery: [
      { src: '/images/canchitas-app/4.jpg', caption: 'Dashboard privado del equipo' },
      { src: '/images/canchitas-app/6.jpg', caption: 'Registro de un partido' },
      { src: '/images/canchitas-app/8.jpg', caption: 'Feed social de resultados' },
      { src: '/images/canchitas-app/11.jpg', caption: 'Perfil público de un equipo' },
    ],
  },
  {
    path: '/proyectos/1e-app-liga',
    title: 'App Liga de fútbol',
    category: 'WEB APP / DEPORTE',
    summary: 'Administración de una liga local y seguimiento público de temporadas, equipos, partidos y goleadores.',
    need: 'Organizar la información de una liga de fútbol y permitir que sus participantes consulten el calendario y los resultados de cada temporada.',
    solution: 'Un panel administrativo para operar la liga y una web pública con posiciones, próximos encuentros, jugadores y resultados.',
    features: [
      { title: 'Operación de la liga', description: 'Creación y edición de equipos, jornadas y partidos, con actualización de marcadores.' },
      { title: 'Temporadas independientes', description: 'Cada temporada mantiene sus equipos, jornadas, partidos y tablas; el administrador puede consultar temporadas anteriores.' },
      { title: 'Jugadores y goleadores', description: 'Plantillas por equipo, asignación de goles a jugadores y clasificación de anotadores.' },
      { title: 'Seguimiento público', description: 'Calendario, posiciones y detalles por equipo o partido, además de equipos destacados al finalizar la temporada.' },
    ],
    decisions: [
      { title: 'Backend y frontend desacoplados', description: 'Laravel actúa como API para una interfaz construida con Vue y Tailwind CSS, con datos en MySQL.' },
      { title: 'Datos vinculados a la temporada', description: 'La separación por temporada permite iniciar un nuevo ciclo conservando la información de los anteriores.' },
      { title: 'Resultados compartidos', description: 'Los marcadores y anotadores registrados alimentan tanto el panel administrativo como las tablas y vistas públicas.' },
    ],
    gallery: [
      { src: '/images/app-liga/2.jpg', caption: 'Tabla de posiciones en administración' },
      { src: '/images/app-liga/18.jpg', caption: 'Gestión de temporadas' },
      { src: '/images/app-liga/22.jpg', caption: 'Jugadores registrados por equipo' },
      { src: '/images/app-liga/29.jpg', caption: 'Tabla pública de goleadores' },
    ],
  },
  {
    path: '/proyectos/1i-randomteams',
    title: 'RandomTeams',
    category: 'WEB APP / SORTEOS',
    summary: 'Generación de equipos aleatorios a partir de listas de participantes, con sorteos e historial guardados.',
    need: 'Distribuir una lista de personas en equipos y poder reutilizar participantes o consultar el resultado de un sorteo después.',
    solution: 'Un generador que recibe nombres manualmente o mediante archivo, permite definir cuántos equipos crear y guarda listas y sorteos en un panel privado.',
    features: [
      { title: 'Generador de equipos', description: 'Introducción o importación de nombres y selección del número de equipos para realizar el sorteo.' },
      { title: 'Listas reutilizables', description: 'Panel para guardar y volver a utilizar listados de participantes.' },
      { title: 'Historial de sorteos', description: 'Consulta de grupos guardados con participantes, equipos, descripción y fecha de creación.' },
      { title: 'Edición y regeneración', description: 'Los sorteos guardados se pueden editar, regenerar o eliminar desde su detalle.' },
    ],
    decisions: [
      { title: 'Acceso mediante GitHub', description: 'OAuth con GitHub y nuxt-auth-utils evita un registro con contraseña propio.' },
      { title: 'Nuxt con Turso', description: 'Nuxt y Nitro manejan la aplicación; Drizzle ORM conecta con Turso, basado en SQLite, y Zod valida los datos.' },
      { title: 'Identidad neo-brutalista', description: 'Formas geométricas, colores sólidos y tipografía fuerte mantienen una identidad consistente entre la landing y los paneles.' },
    ],
    gallery: [
      { src: '/images/randomteams/5.png', caption: 'Resultado del generador de equipos' },
      { src: '/images/randomteams/3.png', caption: 'Entrada de nombres de participantes' },
      { src: '/images/randomteams/6.png', caption: 'Listas guardadas' },
      { src: '/images/randomteams/7.png', caption: 'Panel de sorteos' },
    ],
  },
  {
    path: '/proyectos/1j-dotlog',
    title: 'DotLog',
    category: 'WEB APP / HÁBITOS',
    summary: 'Un registro diario de hábitos donde confirmar una acción significa conservarla sin ediciones retroactivas.',
    need: 'Registrar acciones importantes y seguir hábitos con un sistema simple que mantenga la honestidad del historial personal.',
    solution: 'Una libreta digital con tabla mensual, hasta cuatro hábitos por ciclo y bloqueo de cada día después de confirmarlo.',
    features: [
      { title: 'Registro inmutable', description: 'Cada día reúne la acción principal y el avance de hábitos; al confirmarlo, la fila queda bloqueada.' },
      { title: 'Hasta cuatro hábitos', description: 'Un límite mensual que mantiene el seguimiento enfocado en pocas acciones relevantes.' },
      { title: 'Privacidad del registro', description: 'La acción principal se cifra localmente con AES-GCM antes de guardarse.' },
      { title: 'Progreso mensual', description: 'Indicadores de tasa de éxito, rachas activas y días perfectos, con soporte para español e inglés.' },
    ],
    decisions: [
      { title: 'La restricción como diseño', description: 'Bloquear la edición tras confirmar un día es una regla central del producto, no solo un estado visual.' },
      { title: 'Cifrado ligado al usuario', description: 'AES-GCM protege el contenido de la acción principal y mantiene su lectura ligada a la clave del usuario.' },
      { title: 'Interfaz de terminal', description: 'Nuxt, Vue y Nuxt UI componen una experiencia oscura con comandos y estados; la autenticación utiliza Google.' },
    ],
    gallery: [
      { src: '/images/dotlog/2.jpg', caption: 'Registro diario y confirmación de acciones' },
      { src: '/images/dotlog/3.jpg', caption: 'Seguimiento de hábitos mensuales' },
      { src: '/images/dotlog/1.jpg', caption: 'Presentación del concepto de DotLog' },
    ],
  },
  {
    path: '/proyectos/1g-eventos-app',
    title: 'Eventos App',
    category: 'WEB APP / EVENTOS',
    summary: 'Publicación de eventos, registro de asistentes y gestión de cupos desde una misma plataforma.',
    need: 'Ofrecer a organizadores y asistentes un sistema centralizado para consultar disponibilidad y gestionar inscripciones a eventos con capacidad limitada.',
    solution: 'Una web pública de eventos conectada con paneles personales, tickets únicos y una administración de cupos y asistentes.',
    features: [
      { title: 'Exploración e inscripción', description: 'Eventos con fecha, ubicación y disponibilidad; los asistentes pueden consultar el detalle e inscribirse.' },
      { title: 'Tickets y cancelaciones', description: 'Cada inscripción genera un identificador único de 16 caracteres; una cancelación libera el lugar.' },
      { title: 'Administración de eventos', description: 'Creación y edición de eventos, definición del cupo y consulta de asistentes con sus tickets.' },
      { title: 'Resumen de comentarios con IA', description: 'El administrador puede generar, regenerar o eliminar un resumen cuando hay al menos seis comentarios visibles.' },
    ],
    decisions: [
      { title: 'Cupos conectados al registro', description: 'El registro reduce la disponibilidad y la cancelación la devuelve al evento.' },
      { title: 'Servidor y validación', description: 'Nuxt 4 y Nitro utilizan Drizzle con PostgreSQL en Neon; nuxt-auth-utils gestiona sesiones y Zod valida los datos.' },
      { title: 'IA con regla de publicación', description: 'Vercel AI SDK genera el resumen, que se muestra identificado como “Generado con IA” y requiere un mínimo de comentarios visibles.' },
    ],
    gallery: [
      { src: '/images/eventos-app/eventos-app-1.jpg', caption: 'Exploración de próximos eventos' },
      { src: '/images/eventos-app/eventos-app-5.jpg', caption: 'Panel personal de inscripciones' },
      { src: '/images/eventos-app/eventos-app-9.jpg', caption: 'Administración de asistentes' },
      { src: '/images/eventos-app/eventos-app-12.jpg', caption: 'Resumen público de comentarios con IA' },
    ],
  },
  {
    path: '/proyectos/1l-kontrolfit',
    title: 'KontrolFit Web',
    category: 'WEB APP / GESTIÓN',
    summary: 'Una cabina de administración web para centralizar la recepción y los ingresos de un gimnasio.',
    need: 'Sustituir cuadernos y planillas por un historial de socios, pagos y asistencias que permita saber quién está al día y qué ingresos se registraron.',
    solution: 'Un sistema web con gestión de membresías, validación de acceso, visitas diarias y panel de vencimientos, además de consulta pública para los socios.',
    features: [
      { title: 'Socios y planes', description: 'Códigos únicos y planes configurables en precio y duración; búsqueda y estados de membresía.' },
      { title: 'Pagos y períodos', description: 'Registro por socio con vista previa del período cubierto, método de pago e importe editable.' },
      { title: 'Asistencias y visitas', description: 'Acceso de socios validado contra un pago vigente; las visitas diarias permanecen separadas de las membresías.' },
      { title: 'Seguimiento y consulta', description: 'Dashboard de ingresos, filtros de vencimientos, contacto por WhatsApp y consulta pública del historial del socio.' },
    ],
    decisions: [
      { title: 'Operación web full-stack', description: 'Laravel, Vue, Tailwind CSS y MySQL forman el stack de la aplicación.' },
      { title: 'Validar antes de cobrar o ingresar', description: 'No se registra un pago sin una vista previa válida del período; tampoco una asistencia sin pago activo que cubra la fecha.' },
      { title: 'Separar visitas de socios', description: 'Las entradas diarias usan planes activos de un día y cuentan en los ingresos sin crear una membresía.' },
    ],
    gallery: [
      { src: '/images/kontrolfit/1.png', caption: 'Dashboard de recepción e ingresos' },
      { src: '/images/kontrolfit/3.png', caption: 'Registro de pagos y período cubierto' },
      { src: '/images/kontrolfit/7.png', caption: 'Seguimiento de vencimientos' },
      { src: '/images/kontrolfit/9.jpg', caption: 'Consulta pública de socios' },
    ],
  },
  {
    path: '/proyectos/1d-app-tortilleria',
    title: 'App Tortillería',
    category: 'WEB APP / VENTAS',
    summary: 'Registro de ventas por peso o importe, con historial de precios, acceso por roles y estadísticas del negocio.',
    need: 'Llevar el seguimiento de las ventas diarias de una tortillería y consultar su historial, precios y tendencias desde un mismo panel.',
    solution: 'Una aplicación con registro de operaciones por kilogramos o pesos, control de usuarios e indicadores para revisar el comportamiento de las ventas.',
    features: [
      { title: 'Venta por peso o importe', description: 'Registro de ventas del día, con sus datos principales y hora de operación.' },
      { title: 'Historial consultable', description: 'Búsqueda de ventas por fecha e historial de cambios del precio utilizado.' },
      { title: 'Administradores y empleados', description: 'Creación, edición y activación de usuarios; el empleado accede únicamente a ciertas partes del sistema.' },
      { title: 'Estadísticas de ventas', description: 'Horas pico, días con más ventas, tipos de operación y tendencias por hora, mes y año.' },
    ],
    decisions: [
      { title: 'API Laravel e interfaz Vue', description: 'Laravel expone el backend de la aplicación y MySQL conserva los registros; Vue construye la interfaz.' },
      { title: 'Precio vigente con historial', description: 'El último precio creado se utiliza en la pantalla de ventas, conservando los anteriores para consulta.' },
      { title: 'Acceso según el trabajo', description: 'La distinción entre administrador y empleado limita las operaciones disponibles para cada tipo de usuario.' },
    ],
    gallery: [
      { src: '/images/app-tortilleria/2.jpg', caption: 'Registro de las ventas del día' },
      { src: '/images/app-tortilleria/5.jpg', caption: 'Historial de ventas' },
      { src: '/images/app-tortilleria/7.jpg', caption: 'Estadísticas del negocio' },
      { src: '/images/app-tortilleria/9.jpg', caption: 'Administración de usuarios' },
    ],
  },
  {
    path: '/proyectos/1a-quiosco-laravel',
    title: 'Quiosco App',
    category: 'WEB APP / PEDIDOS',
    summary: 'Pedidos de restaurante conectados con un panel para atender órdenes y gestionar productos.',
    need: 'Permitir que los clientes preparen su pedido y que el administrador reciba las órdenes y controle la disponibilidad de los productos.',
    solution: 'Un flujo de compra con registro de clientes, selección de productos y envío de la orden, acompañado por una vista administrativa de pedidos.',
    features: [
      { title: 'Acceso de clientes', description: 'Registro e inicio de sesión antes de realizar un pedido.' },
      { title: 'Preparación de la orden', description: 'Selección de productos y revisión del contenido del pedido antes de enviarlo.' },
      { title: 'Atención de pedidos', description: 'El administrador recibe las órdenes y puede marcarlas como completadas.' },
      { title: 'Disponibilidad del catálogo', description: 'Gestión de productos y categorías desde la administración del restaurante.' },
    ],
    decisions: [
      { title: 'React para el frontend', description: 'React y React Router Dom organizan las vistas de cliente y administración, con estilos en Tailwind CSS.' },
      { title: 'Laravel como API', description: 'El backend Laravel gestiona la aplicación y utiliza MySQL para sus datos.' },
      { title: 'Flujos separados', description: 'El cliente prepara órdenes mientras el administrador atiende los pedidos y mantiene la disponibilidad del catálogo.' },
    ],
    gallery: [
      { src: '/images/react-quiosco/03.png', caption: 'Selección de productos y pedido' },
      { src: '/images/react-quiosco/04.png', caption: 'Recepción de órdenes en administración' },
      { src: '/images/react-quiosco/05.png', caption: 'Gestión de disponibilidad y pedidos' },
    ],
  },
  {
    path: '/proyectos/1b-appsalon-laravel',
    title: 'AppSalon',
    category: 'WEB APP / CITAS',
    summary: 'Agenda de citas para negocios de servicios, con horarios disponibles y administración del catálogo.',
    need: 'Dar a los clientes una forma de reservar servicios y a la administración una vista de las citas agendadas y la disponibilidad.',
    solution: 'Una aplicación donde el cliente consulta servicios y horarios, reserva o modifica sus citas y mantiene informada a la administración por correo.',
    features: [
      { title: 'Cuenta de cliente', description: 'Registro, inicio de sesión y recuperación de contraseña.' },
      { title: 'Reserva de citas', description: 'Selección de servicios y horarios disponibles desde la agenda del usuario.' },
      { title: 'Cambios y avisos', description: 'Edición y cancelación de citas con notificación por correo al administrador.' },
      { title: 'Administración de servicios', description: 'Consulta de todas las citas y gestión de servicios, disponibilidad y datos del catálogo.' },
    ],
    decisions: [
      { title: 'Estado de interfaz con Vue', description: 'Vue Router y Pinia acompañan a Vue en la navegación y el manejo de estado del frontend.' },
      { title: 'Backend API', description: 'Laravel y MySQL sostienen la gestión de citas; Tailwind CSS se utiliza para la interfaz.' },
      { title: 'Comunicar cambios de agenda', description: 'Las modificaciones de citas se notifican por correo para mantener informada a la administración.' },
    ],
    gallery: [
      { src: '/images/app-salon/4-agendar.jpg', caption: 'Agenda y selección de una cita' },
      { src: '/images/app-salon/3-agendar.jpg', caption: 'Selección de servicios y horario' },
      { src: '/images/app-salon/5-admin.jpg', caption: 'Consulta administrativa de citas' },
      { src: '/images/app-salon/6-admin.jpg', caption: 'Gestión de servicios' },
    ],
  },
  {
    path: '/proyectos/1c-devstagram-laravel',
    title: 'Devstagram',
    category: 'WEB APP / RED SOCIAL',
    summary: 'Un clon de Instagram para publicar imágenes, seguir cuentas y participar con comentarios y me gusta.',
    need: 'Reproducir los flujos básicos de una red social: identidad de usuario, publicaciones y relaciones entre cuentas.',
    solution: 'Una aplicación Laravel con perfiles editables, publicaciones con imagen y descripción, seguidores e interacciones sobre el contenido.',
    features: [
      { title: 'Registro y perfiles', description: 'Correo y nombre de usuario únicos, inicio de sesión y edición de la imagen y los datos del perfil.' },
      { title: 'Publicaciones', description: 'Creación de contenido con imagen y descripción obligatorias; el autor puede eliminar sus publicaciones.' },
      { title: 'Seguimiento de cuentas', description: 'Perfiles públicos desde los que se pueden consultar publicaciones y seguir a otros usuarios.' },
      { title: 'Interacciones', description: 'Comentarios y me gusta en las publicaciones de la comunidad.' },
    ],
    decisions: [
      { title: 'Stack centrado en Laravel', description: 'PHP, Laravel y Livewire construyen la aplicación, con MySQL como base de datos y Tailwind CSS para los estilos.' },
      { title: 'Identidad sin duplicados', description: 'El registro exige que tanto el correo electrónico como el nombre de usuario sean únicos.' },
      { title: 'Contenido con requisitos claros', description: 'Publicar requiere imagen y descripción; la eliminación está disponible para el propietario de la publicación.' },
    ],
    stack: ['PHP', 'Laravel', 'Livewire', 'Tailwind CSS', 'MySQL'],
    url: 'https://mukpotu.nyc.dom.my.id/login',
    gallery: [
      { src: '/images/devstagram/3.png', caption: 'Perfil y publicaciones del usuario' },
      { src: '/images/devstagram/4.png', caption: 'Creación de una publicación' },
      { src: '/images/devstagram/5.png', caption: 'Comentarios y me gusta' },
      { src: '/images/devstagram/6.png', caption: 'Edición del perfil' },
    ],
  },
  {
    path: '/proyectos/1k-cafeteria-astro-wp',
    title: 'Cafetería Astro',
    category: 'WEB / HEADLESS CMS',
    summary: 'Un sitio de cafetería que combina la administración de WordPress con un frontend estático construido con Astro.',
    need: 'Separar la presentación del sitio de la administración del contenido, manteniendo una experiencia editorial conocida y un frontend ligero.',
    solution: 'WordPress actúa como CMS y expone su contenido mediante REST API; Astro lo consume para construir la web pública.',
    features: [
      { title: 'Contenido administrable', description: 'Textos, páginas e imágenes se gestionan desde el panel de WordPress sin editar el frontend.' },
      { title: 'Secciones del negocio', description: 'Composición con hero, menú, categorías, productos destacados e información de la cafetería.' },
      { title: 'Frontend estático', description: 'Páginas pre-renderizadas y poco JavaScript en cliente como prioridades de implementación.' },
      { title: 'Control de presentación', description: 'Componentes reutilizables y manejo de metadatos, títulos y estructura semántica desde Astro.' },
    ],
    decisions: [
      { title: 'WordPress sin tema tradicional', description: 'El CMS se utiliza como fuente de datos y panel editorial, no como responsable del renderizado público.' },
      { title: 'REST API como conexión', description: 'Astro obtiene y normaliza el contenido publicado en WordPress para componer las secciones del sitio.' },
      { title: 'Despliegues independientes', description: 'La separación de capas permite evolucionar el frontend sin sustituir el panel de administración de contenido.' },
    ],
    gallery: [],
  },
];
