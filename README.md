# Portafolio de Walter Moya

Sitio personal en español e inglés, construido con Next.js, React, TypeScript y Tailwind CSS. Publicación actual: <https://waltermoya.vercel.app/>.

## Trabajar en este equipo

```bash
cd /home/walter/Documentos/busqueda-trabajo/portfolio
npm ci
npm run dev
```

Abrir <http://localhost:3000>. La terminal debe permanecer abierta; `Ctrl+C` detiene el servidor. Los cambios guardados se ven automáticamente en el navegador. `npm ci` se necesita al instalar el proyecto o al cambiar el archivo de dependencias, no cada vez que lo abres.

Consulta [INSTALLATION.md](INSTALLATION.md) para editar contenido y publicar en Vercel, [ACTUALIZACION_2026-10.md](ACTUALIZACION_2026-10.md) para las fuentes de los productos, [DISENO_Y_CONTENIDO.md](DISENO_Y_CONTENIDO.md) para la presentación y [CASOS_Y_CV.md](CASOS_Y_CV.md) para la descarga del CV y los casos ampliados.

## Validación

```bash
npm run lint
npm run typecheck
npm run build
```

Para revisar la versión compilada: `npm start` y abrir <http://localhost:3000>.

## Archivos principales

| Archivo                                                       | Contenido                                                         |
| ------------------------------------------------------------- | ----------------------------------------------------------------- |
| `app/data.ts`                                                 | Proyectos, experiencia, notebooks, redes y correo; datos ES/EN    |
| `app/profile-data.ts`                                         | Habilidades, formación, tesis y cursos; datos ES/EN               |
| `components/PortfolioPage.tsx`                                | Estructura compartida de las dos páginas                          |
| `components/Hero.tsx`                                         | Presentación en ambos idiomas                                     |
| `components/ProjectGallery.tsx`                               | Tres destacados y catálogo completo con filtros                   |
| `app/case-studies.ts` / `components/CaseStudyPage.tsx`        | Casos de estudio, capturas, aportes, decisiones y fuentes ES/EN   |
| `lib/project-routes.ts`                                       | Selección de destacados y rutas de los casos                      |
| `components/CVDownload.tsx` / `public/cv/`                    | Descarga del CV de una página en español                          |
| `components/ContactSection.tsx`                               | Correo, teléfono, CV y redes                                      |
| `components/ThemeControls.tsx`                                | Controles de tema claro, oscuro y del sistema                     |
| `public/projects/`                                            | Imágenes de proyectos                                             |
| `public/brand/`                                               | Nuevo logo WM, tamaños para web y prompt de generación            |
| `app/favicon.ico` / `lib/brand.ts`                            | Iconos del navegador y metadatos compartidos                      |
| `app/(es)/page.tsx` / `app/(en)/en/page.tsx`                  | Inicio en `/` y `/en`                                             |
| `app/(es)/proyectos/[slug]/` / `app/(en)/en/projects/[slug]/` | Tres casos estáticos en cada idioma                               |
| `app/header.tsx` / `app/footer.tsx`                           | Navegación, idioma y temas                                        |
| `app/globals.css`                                             | Estilos generales                                                 |
| `app/(es)/layout.tsx` / `app/(en)/layout.tsx`                 | Documentos raíz por idioma, con `lang` correcto desde el servidor |
| `components/SiteLayout.tsx` / `lib/metadata.ts`               | Estructura común y metadatos para buscadores y redes              |
| `lib/opengraph-image.tsx`                                     | Imagen para redes, disponible en `/opengraph-image`               |
| `lib/constants.ts`                                            | Dominio principal                                                 |

La interfaz conserva componentes de la plantilla Nim / Motion Primitives, adaptados al portafolio.
