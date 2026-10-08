# Portafolio de Walter Moya

Sitio personal en español e inglés, construido con Next.js, React, TypeScript y Tailwind CSS. Publicación actual: <https://waltermoya.vercel.app/>.

## Trabajar en este equipo

```bash
cd /home/walter/Documentos/busqueda-trabajo/portfolio
npm ci
npm run dev
```

Abrir <http://localhost:3000>. La terminal debe permanecer abierta; `Ctrl+C` detiene el servidor. Los cambios guardados se ven automáticamente en el navegador. `npm ci` se necesita al instalar el proyecto o al cambiar el archivo de dependencias, no cada vez que lo abres.

Consulta [INSTALLATION.md](INSTALLATION.md) para editar contenido y publicar en Vercel, [ACTUALIZACION_2026-10.md](ACTUALIZACION_2026-10.md) para las fuentes de los proyectos y [DISENO_Y_CONTENIDO.md](DISENO_Y_CONTENIDO.md) para la nueva presentación.

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
| `app/profile-data.ts` | Habilidades, formación, tesis y cursos; datos ES/EN |
| `components/PortfolioPage.tsx` | Estructura compartida de las dos páginas |
| `components/Hero.tsx` | Presentación en ambos idiomas |
| `components/ProjectGallery.tsx` | Filtros y fichas de proyectos |
| `components/ContactSection.tsx` | Contacto y botón para copiar el correo |
| `components/ThemeControls.tsx` | Controles de tema claro, oscuro y del sistema |
| `public/projects/` | Imágenes de proyectos |
| `public/brand/` | Nuevo logo WM, tamaños para web y prompt de generación |
| `app/favicon.ico` / `lib/brand.ts` | Iconos del navegador y metadatos compartidos |
| `app/page.tsx` / `app/en/page.tsx` | Entrada de cada idioma |
| `app/header.tsx` / `app/footer.tsx` | Navegación, idioma y temas |
| `app/globals.css` | Estilos generales |
| `app/layout.tsx` / `app/en/layout.tsx` | Metadatos para buscadores y redes |
| `app/opengraph-image.tsx` | Imagen generada para compartir el enlace en redes |
| `lib/constants.ts` | Dominio principal |

La interfaz conserva componentes de la plantilla Nim / Motion Primitives, adaptados al portafolio.
