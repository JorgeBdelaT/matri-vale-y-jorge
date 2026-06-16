/**
 * Única fuente de verdad para todo el contenido y configuración del sitio.
 */

export const COUPLE = {
  bride: "Vale",
  groom: "Jorge",
  monogram: "V & J",
  displayName: "Vale & Jorge",
} as const;

export const WEDDING = {
  /** Hora de inicio en Chile continental (UTC-3 en octubre, horario de verano). */
  startDateISO: "2026-10-24T17:00:00-03:00",
  endDateISO: "2026-10-25T01:00:00-03:00",
  dateLabel: "24 Octubre 2026",
  dateLongLabel: "Sábado 24 de octubre de 2026",
  timeLabel: "desde las 17:00 hrs hasta la 01:00 hrs",
} as const;

export const VENUE = {
  name: "Herbarium",
  address: "Av. José Arrieta 9960, Peñalolén, Región Metropolitana",
  shortLabel: "Herbarium · Peñalolén",
  mapsUrl:
    "https://www.google.com/maps/place/Herbarium/@-33.4670563,-70.5279897,17z/data=!3m1!4b1!4m6!3m5!1s0x9662cdffd9f2adbb:0x1602e953b7b360d8!8m2!3d-33.4670608!4d-70.5254148!16s%2Fg%2F11c3rmz4cn?entry=ttu",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Herbarium%20Av.%20Jos%C3%A9%20Arrieta%209960%20Pe%C3%B1alol%C3%A9n&t=&z=15&ie=UTF8&iwloc=&output=embed",
} as const;

export const LINKS = {
  rsvpForm: "https://forms.gle/c4vqyZxn6FgkiRes8",
  spotifyPlaylist:
    "https://open.spotify.com/playlist/6eUt08vppknVyKL1NpvjSB?si=HA6aAUieRXmYjwhSoJwQBg&pt=1484623aeb9f75daa4f3c87e44c83d19",
  spotifyEmbed:
    "https://open.spotify.com/embed/playlist/6eUt08vppknVyKL1NpvjSB?utm_source=generator",
  giftList: "https://www.noviosparis.cl/home/couple-catalog/6970877",
} as const;

export const GIFT_LIST = {
  store: "Novios Paris",
  code: "6970877",
} as const;

export interface TimelineItem {
  time: string;
  icon: string;
  label: string;
}

export const TIMELINE: TimelineItem[] = [
  { time: "17:00", icon: "☼", label: "Llegada" },
  { time: "17:30", icon: "✦", label: "Ceremonia" },
  { time: "18:30", icon: "♬", label: "Cóctel y brindis" },
  { time: "22:00", icon: "❦", label: "Fiesta" },
  { time: "01:00", icon: "☾", label: "Cierre" },
];

export interface DressCodeSwatch {
  label: string;
  className: string;
}

export const DRESS_CODE = {
  code: "Elegante",
  leads: [
    {
      noteBefore: "La celebración será en un entorno de jardín y naturaleza, por lo que recomendamos tenerlo en cuenta al elegir vestuario y calzado.",
      noteEmphasis: "",
      noteAfter: "",
    },
    {
      noteBefore: "Por favor ",
      noteEmphasis: "evitar ",
      noteAfter: " blanco, burdeo, borgoña y rojo."
    },

  ],
  noteAfter: " blanco, burdeo, borgoña y rojo.",
  avoid: [
    { label: "Blanco", className: "bg-white border border-ink/15" },
    { label: "Rojo", className: "bg-[#9f1d1d] text-white" },
    { label: "Burdeo", className: "bg-[#6d0f1d] text-white" },
    { label: "Borgoña", className: "bg-burgundy text-white" },
  ] satisfies DressCodeSwatch[],
} as const;

/**
 * Rutas de imágenes dentro de /public. Cuando existan las fotos reales,
 * basta con agregar el archivo y completar la ruta aquí.
 */
export const IMAGES = {
  hero: "/images/hero.jpeg" as string | null,
  footer: "/images/footer.jpg" as string | null,
  storyLarge: null as string | null,
  storyLargeVideo: "/images/story-large.mp4" as string | null,
  storySmall: "/images/story-small-2.jpg" as string | null,
  rsvpStrip: ["/images/rsvp-strip-1.jpg", "/images/rsvp-strip-2.jpeg", "/images/rsvp-strip-3.JPG"] as (string | null)[],
};

export const COPY = {
  intro: {
    eyebrow: "Nos casamos",
    scrollCue: "Desliza",
  },
  hero: {
    eyebrow: "Matrimonio",
    lead: "Queremos celebrar este día rodeados de las personas que más queremos. Gracias por ser parte de nuestra historia.",
  },
  story: {
    eyebrow: "Nuestra historia",
    title: "Momento para celebrar",
    leads: ["Después de 9 años, varios viajes, muchos pedaleos y una cantidad indeterminada de anime, pastelitos, proyectos, hobbies y apañe, la evidencia acumulada era bastante contundente: seguir compartiendo aventuras parecía una muy buena idea.", "Así que decidimos formalizar el asunto."],
  },
  countdown: {
    eyebrow: "Falta poco",
    title: "Para el gran día",
    lead: "La cuenta regresiva ya comenzó.",
  },
  schedule: {
    eyebrow: "Ceremonia y celebración",
    title: "Fecha y horario",
  },
  location: {
    eyebrow: "Ubicación",
    cta: "Ver ubicación",
  },
  dressCode: {
    eyebrow: "Código de vestimenta",
    title: "Elegante",
  },
  rsvp: {
    eyebrow: "Confirmación",
    title: "¿Nos acompañas?",
    lead: {
      noteBefore: "Para organizar todo con mucho cariño, te pedimos confirmar tu asistencia lo antes posible. ",
      noteEmphasis: "Fecha máxima de confirmación: 31 de agosto.",
    },
    cta: "Confirmar asistencia",
  },
  playlist: {
    eyebrow: "Nuestra música",
    title: "La playlist",
    lead: "Todos tenemos esa canción que automáticamente mejora cualquier celebración. Agrega esas canciones que no pueden faltar.",
    cta: "Agregar canciones",
  },
  gifts: {
    eyebrow: "Sugerencia de regalo",
    title: "Lista de novios",
    lead: "Si estás pensando en darnos un detalle, te dejamos esta opción que nos ayudará a seguir sumando experiencias, proyectos, viajes y futuras aventuras.",
    codeLabel: "Código novios",
    copyHint: "Toca para copiar",
    copiedMessage: "¡Copiado!",
    cta: "Ver lista",
  },
  footer: {
    tagline: "24 octubre 2026 · con mucho amor",
  },
} as const;

export const SITE = {
  title: "Vale & Jorge · 24 Octubre 2026",
  description:
    "Nos casamos. Sábado 24 de octubre de 2026 en Herbarium, Peñalolén. Acompáñanos a celebrar.",
  url: "https://matri-vale-y-jorge.vercel.app",
} as const;
