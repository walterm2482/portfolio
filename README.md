# Portafolio de Walter Moya

Sitio personal en español e inglés, construido con Next.js, React, TypeScript y Tailwind CSS. Publicación actual: <https://waltermoya.vercel.app/>.

## Trabajar en este equipo

```bash
cd /home/walter/Documentos/busqueda-trabajo/portfolio
npm ci
npm run dev
```

Abrir <http://localhost:3000>. La terminal debe permanecer abierta; `Ctrl+C` detiene el servidor. Los cambios guardados se ven automáticamente en el navegador. `npm ci` se necesita al instalar el proyecto o al cambiar el archivo de dependencias, no cada vez que lo abres.

Consulta [INSTALLATION.md](INSTALLATION.md) para editar contenido y publicar en Vercel, y [ACTUALIZACION_2026-10.md](ACTUALIZACION_2026-10.md) para revisar las fuentes de esta actualización.

## Validación

```bash
npm run lint
npm run typecheck
npm run build
```

Para revisar la versión compilada: `npm start` y abrir <http://localhost:3000>.

## Archivos principales

| Archivo | Contenido |
| --- | --- |
| `app/data.ts` | Proyectos, experiencia, notebooks, redes y correo; datos ES/EN |
| `components/Hero.tsx` | Presentación en ambos idiomas |
| `components/ProjectGallery.tsx` | Filtros y fichas de proyectos |
| `public/projects/` | Imágenes de proyectos |
| `app/page.tsx` / `app/en/page.tsx` | Secciones de cada idioma |
| `app/header.tsx` / `app/footer.tsx` | Navegación, idioma y temas |
| `app/globals.css` | Estilos generales |
| `app/layout.tsx` / `app/en/layout.tsx` | Metadatos para buscadores y redes |
| `lib/constants.ts` | Dominio principal |

La interfaz conserva componentes de la plantilla Nim / Motion Primitives, adaptados al portafolio.
