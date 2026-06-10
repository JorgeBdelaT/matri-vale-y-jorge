# Matrimonio Vale & Jorge 💍

Invitación web del matrimonio — **sábado 24 de octubre de 2026, Herbarium, Peñalolén**.

Página estática construida con [Next.js](https://nextjs.org) (App Router), TypeScript, Tailwind CSS v4, shadcn/ui y [motion](https://motion.dev) para las animaciones. Pensada para desplegarse en Vercel.

## Comandos

```bash
pnpm dev              # servidor de desarrollo en http://localhost:3000
pnpm build            # build de producción (página 100% estática)
pnpm lint             # eslint
pnpm storybook        # catálogo de componentes en http://localhost:6006
pnpm build-storybook  # build estático de Storybook
```

## Estructura

```
src/
  app/                        # layout (fuentes, metadata) y página única
  lib/constants.const.ts      # TODO el contenido: fechas, enlaces, textos, rutas de fotos
  lib/utils.util.ts           # helper cn()
  hooks/*.hook.ts             # use-countdown, use-prefers-reduced-motion
  components/                 # carpeta por componente:
    ui/button/                #   <nombre>.component.tsx + <nombre>.stories.tsx
    common/<nombre>/          # bloques reutilizables (Section, Doodle, Reveal, …)
    sections/<nombre>/        # una sección de la página por carpeta
public/images/                # fotografías (se versionan en el repo)
```

## Cómo agregar las fotos reales

1. Copia la foto a `public/images/` (por ejemplo `public/images/historia.jpg`).
2. En `src/lib/constants.ts`, apunta la entrada correspondiente de `IMAGES` a esa ruta (`"/images/historia.jpg"`).

Mientras una entrada sea `null`, se muestra un marco con texto guía.

## Contenido editable

Todo el contenido (textos, horarios, enlaces al formulario de asistencia, playlist de Spotify, lista de novios y mapa) vive en `src/lib/constants.ts`. El diseño de referencia está en `design-proposal.html`.
