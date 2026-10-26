# StartApp — sitio web institucional

Rediseño completo del sitio de StartApp (software house, Posadas, Misiones) con lenguaje editorial
inspirado en sitios de grandes tecnológicas. Conserva el contenido real: proyectos, enlaces, logo,
fotos, datos de contacto y cifras del sitio actual.

## Stack

- React 18 + Vite + TypeScript
- Tailwind CSS (tokens propios en `tailwind.config.js`)
- Framer Motion (`LazyMotion`, solo `domAnimation`)
- Lucide React (iconos funcionales)
- Geist + Geist Mono (Google Fonts)

## Comandos

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
npm run preview  # sirve dist/ en http://localhost:4173
```

## Publicar (S3 + CloudFront)

Subí **el contenido de `dist/`** (no la carpeta) a la raíz del bucket. Es un sitio de una sola página
con anclas (`#proyectos`, `#contacto`…), no necesita reglas de SPA. Invalidá `/*` en CloudFront
después de cada deploy.

## Estructura

```
src/
  components/   Header, Hero, Marquee, Services, Metrics, Projects, ProjectCase,
                Support, Process, Proof, CtaBand, Contact, Footer
    ui/         motion.tsx  (Reveal, SplitLines, ImageReveal, ArrowLink, Button)
    diagrams/   ServiceDiagrams.tsx (esquemas vectoriales de "Soluciones")
  data/         site.ts, projects.ts, services.ts, process.ts   ← contenido editable
  hooks/        useScrollAnimation.ts (count-up, sección activa, scroll)
public/images/  logo, fotos del sitio actual, imágenes de proyectos
```

Para cambiar textos, enlaces o proyectos, editá los archivos de `src/data/`.

## Decisiones de diseño

- Campos alternados negro `#0A0A0A` / blanco cálido `#F5F5F2`; un solo acento `#F2542D`
  (tomado del isotipo del logo) en el marquee, los CTAs y el cierre.
- Sin tarjetas repetidas, glassmorphism, gradientes ni neón.
- El logo solo existe en variante para fondo oscuro (texto blanco), por eso el header y el footer
  siempre están sobre negro.
- Movimiento: reveal por scroll, títulos por línea, máscara de imágenes, parallax leve, marquee lento,
  count-up y línea de proceso atada al scroll. Todo respeta `prefers-reduced-motion`.

## Notas

- El formulario no tiene backend: al enviar abre WhatsApp con la consulta armada.
- Los casos 2–4 usan los logos existentes; si hay capturas reales de las apps, reemplazarlas en
  `public/images/proyectos/` mejora mucho esos bloques.
- `.impeccable/` guarda el contexto de diseño (PRODUCT.md, brief de superficie, DESIGN.md).
