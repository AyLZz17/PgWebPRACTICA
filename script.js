/* =========================================================
   SPIKE//INTEL — script.js
   100% frontend: sin fetch, sin API, sin base de datos.
   Todo el contenido vive en el array ARTICLES de abajo.
========================================================= */

const CATEGORY_LABELS = {
  parche:   'Parches',
  agentes:  'Agentes',
  mapas:    'Mapas',
  esports:  'Esports',
  comunidad:'Comunidad'
};

const ARTICLES = [
  {
    id: 'umbral',
    category: 'agentes',
    title: 'Umbral rompe la línea de visión',
    excerpt: 'El agente 19 llega con humo rastrero, un señuelo de pasos falsos y una definitiva que silencia el sonido del área.',
    date: '12 AGO 2026',
    read: '4 MIN',
    body: [
      'El equipo de balance confirmó el kit completo de Umbral, el próximo agente en sumarse al roster. Su habilidad de firma, "Cortina Rastrera", libera una nube de humo que se desplaza pegada al suelo antes de expandirse, pensada para cegar líneas de disparo bajas sin bloquear la visión aérea de los francotiradores propios.',
      'La segunda habilidad, "Eco Falso", despliega un señuelo que reproduce pasos y sonidos de recarga en un punto elegido por el jugador, ideal para simular un flanco o retrasar una ejecución rival.',
      'Su definitiva, "Silencio de Sector", elimina temporalmente el sonido direccional dentro de una zona marcada, dificultando que el rival ubique pasos y disparos. Los primeros análisis apuntan a un impacto fuerte en la fase de retoma de sitio, donde la información sonora suele decidir los duelos.',
      'Umbral se suma a la rotación de agentes disponibles la próxima semana, con acceso inmediato para quienes posean el pase de la temporada en curso.'
    ]
  },
  {
    id: 'parche-908',
    category: 'parche',
    title: 'Parche 9.08: rework de Centinela y ajustes de economía',
    excerpt: 'Cambios profundos en el rol de soporte defensivo y una revisión de los precios de escudo ligero.',
    date: '10 AGO 2026',
    read: '5 MIN',
    body: [
      'El parche 9.08 introduce el rework más grande del año para el rol Centinela: las trampas de reconocimiento ahora revelan la dirección del movimiento enemigo, no solo su posición, y su tiempo de reutilización se redujo en dos segundos.',
      'En el plano económico, el escudo ligero baja de precio y el pesado sube ligeramente, buscando incentivar rondas de compra mixta en lugar de "full buy" generalizado desde la ronda tres.',
      'También se ajustó la cadencia de disparo del rifle ligero, reduciendo su efectividad a distancias largas para diferenciarlo mejor del rifle pesado.',
      'El parche ya está disponible en todas las regiones y no requiere descarga adicional en clientes actualizados.'
    ]
  },
  {
    id: 'pearl-rework',
    category: 'mapas',
    title: 'Retorno de Pearl con rework de tres sitios',
    excerpt: 'El mapa vuelve a la rotación competitiva con cambios de geometría en A, B y el conector central.',
    date: '08 AGO 2026',
    read: '3 MIN',
    body: [
      'Pearl regresa a la rotación competitiva tras un periodo fuera de circulación. El rework abre nuevas líneas de rotación entre el conector central y el sitio B, además de reducir un pilar que generaba ángulos ciegos frecuentes en el sitio A.',
      'El equipo de diseño de niveles indicó que el objetivo principal fue equilibrar el tiempo de rotación entre sitios, que en la versión anterior favorecía claramente a los equipos que defendían el sitio A.',
      'Se espera que Pearl entre en el mapa pool competitivo a partir de la siguiente fase de clasificatorios regionales.'
    ]
  },
  {
    id: 'champions-2026',
    category: 'esports',
    title: 'Champions 2026: la fase de grupos define semifinalistas',
    excerpt: 'Una jornada maratónica de series al mejor de tres deja el cuadro de semifinales prácticamente cerrado.',
    date: '11 AGO 2026',
    read: '4 MIN',
    body: [
      'La fase de grupos del torneo internacional vivió su jornada más intensa hasta el momento, con cuatro series decididas en el tercer mapa. Los equipos que llegaban invictos confirmaron su lugar en semifinales, mientras que la última plaza del grupo se resolvió por diferencia de rondas.',
      'El nivel defensivo fue el gran protagonista de la jornada: varias series se definieron en pistolas de ronda trece, con remontadas desde marcadores adversos de hasta cuatro rondas.',
      'Las semifinales se disputarán el próximo fin de semana, con el cuadro completo de enfrentamientos disponible en el sitio oficial del torneo.'
    ]
  },
  {
    id: 'skins-protocolo-003',
    category: 'comunidad',
    title: 'Colección "Protocolo 003" inspirada en tecnología forense',
    excerpt: 'Una nueva línea de skins con acabados translúcidos y efectos de escaneo para armas primarias.',
    date: '07 AGO 2026',
    read: '2 MIN',
    body: [
      'La comunidad ya puede previsualizar la colección "Protocolo 003", centrada en una estética de laboratorio forense: superficies translúcidas, líneas de escaneo animadas y un efecto de recarga que proyecta un holograma del arma.',
      'La colección incluye variantes para rifle de asalto, subfusil, pistola y cuchillo, con tres paletas de color alternativas desbloqueables tras la compra base.',
      'Según los reportes de la comunidad, el lanzamiento oficial en tienda se espera para la próxima rotación semanal de ofertas destacadas.'
    ]
  },
  {
    id: 'hotfix-908a',
    category: 'parche',
    title: 'Hotfix 9.08a corrige colisión de habilidad en Ascent',
    excerpt: 'Se resuelve un error que permitía atravesar geometría en el sitio A usando una combinación específica de habilidades.',
    date: '13 AGO 2026',
    read: '2 MIN',
    body: [
      'El hotfix 9.08a corrige un error reportado por la comunidad en el que una combinación específica de habilidades permitía atravesar parcialmente la geometría del sitio A en Ascent.',
      'También se solucionaron dos problemas menores de audio relacionados con pasos duplicados al usar ciertos señuelos, y un error visual en la pantalla de fin de partida en resoluciones ultra anchas.',
      'No se realizaron cambios de balance en este hotfix; los ajustes de agentes y economía se mantienen igual que en el parche 9.08.'
    ]
  },
  {
    id: 'balance-iso-fade',
    category: 'agentes',
    title: 'Balance: ajuste a Iso y mejora para Fade tras la temporada',
    excerpt: 'El agente más reportado en informes de balance recibe un ajuste a la duración de su escudo de contrato.',
    date: '09 AGO 2026',
    read: '3 MIN',
    body: [
      'Tras una temporada competitiva dominada por Iso en varios roles, el equipo de balance redujo la duración de su escudo de contrato de doce a nueve segundos y aumentó ligeramente el tiempo de reutilización de su habilidad de doble exposición.',
      'En el otro extremo, Fade recibe una mejora en el radio de detección de su habilidad "Presa", buscando hacerla más consistente en mapas con múltiples rutas de rotación.',
      'El equipo de diseño aclaró que seguirá monitoreando las estadísticas de la próxima semana antes de considerar ajustes adicionales.'
    ]
  },
  {
    id: 'franquicia-latam-norte',
    category: 'esports',
    title: 'Nueva plaza de franquicia para Latinoamérica Norte',
    excerpt: 'La liga regional confirma un cupo adicional a partir de la temporada siguiente, con proceso de selección abierto.',
    date: '06 AGO 2026',
    read: '3 MIN',
    body: [
      'La organización de la liga regional confirmó la apertura de una plaza adicional de franquicia para la región Latinoamérica Norte, que se sumará a partir de la próxima temporada.',
      'El proceso de selección incluirá criterios deportivos, de infraestructura y de alcance de audiencia, con resultados esperados antes del cierre del año.',
      'Esta expansión eleva a diez el número total de organizaciones franquiciadas en la región.'
    ]
  }
];

/* ---------- render de tarjetas ---------- */
const grid = document.getElementById('grid');

function renderGrid(filter = 'todos'){
  const items = filter === 'todos'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === filter);

  if(items.length === 0){
    grid.innerHTML = `<p class="grid__empty">// SIN INFORMES EN ESTA CATEGORÍA</p>`;
    return;
  }

  grid.innerHTML = items.map(a => `
    <article class="card" data-open-article="${a.id}" tabindex="0" role="button"
              aria-label="Abrir informe: ${a.title}">
      <p class="card__tag">${CATEGORY_LABELS[a.category].toUpperCase()}</p>
      <h3 class="card__title">${a.title}</h3>
      <p class="card__excerpt">${a.excerpt}</p>
      <div class="card__foot">
        <span>${a.date}</span>
        <span class="card__read">LEER INFORME →</span>
      </div>
    </article>
  `).join('');
}

renderGrid();

/* ---------- filtros ---------- */
const filterButtons = document.querySelectorAll('.filter');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    renderGrid(btn.dataset.filter);
  });
});

/* ---------- modal ---------- */
const modal = document.getElementById('modal');
const modalTag = document.getElementById('modalTag');
const modalTitle = document.getElementById('modalTitle');
const modalMeta = document.getElementById('modalMeta');
const modalBody = document.getElementById('modalBody');
let lastFocused = null;

function openArticle(id){
  const article = ARTICLES.find(a => a.id === id);
  if(!article) return;

  modalTag.innerHTML = `<span class="eyebrow__dot"></span>${CATEGORY_LABELS[article.category].toUpperCase()}`;
  modalTitle.textContent = article.title;
  modalMeta.textContent = `${article.date} · ${article.read} DE LECTURA`;
  modalBody.innerHTML = article.body.map(p => `<p>${p}</p>`).join('');

  lastFocused = document.activeElement;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal__close').focus();
}

function closeArticle(){
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if(lastFocused) lastFocused.focus();
}

document.addEventListener('click', (e) => {
  const opener = e.target.closest('[data-open-article]');
  if(opener){
    openArticle(opener.dataset.openArticle);
    return;
  }
  if(e.target.closest('[data-close-article]')){
    closeArticle();
  }
});

document.addEventListener('keydown', (e) => {
  if(e.key === 'Enter' && document.activeElement.matches('[data-open-article]')){
    openArticle(document.activeElement.dataset.openArticle);
  }
  if(e.key === 'Escape' && modal.classList.contains('is-open')){
    closeArticle();
  }
});

/* ---------- menú móvil ---------- */
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  navToggle.classList.toggle('is-open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ---------- contador regresivo (100% cliente) ---------- */
// Fecha objetivo fija y estática: no depende de ninguna API externa.
const TARGET_DATE = new Date('2026-08-27T17:00:00');

function updateCountdown(){
  const now = new Date();
  let diff = TARGET_DATE - now;

  if(diff < 0) diff = 0;

  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff / (1000*60*60)) % 24);
  const mins = Math.floor((diff / (1000*60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  const pad = n => String(n).padStart(2, '0');

  document.getElementById('cd-days').textContent = pad(days);
  document.getElementById('cd-hours').textContent = pad(hours);
  document.getElementById('cd-mins').textContent = pad(mins);
  document.getElementById('cd-secs').textContent = pad(secs);
}

updateCountdown();
setInterval(updateCountdown, 1000);
