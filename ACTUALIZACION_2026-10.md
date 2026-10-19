# Revisiones del portafolio — octubre de 2026

## SGU v2.3 — 19 de octubre de 2026

- Portada y caso de estudio actualizados en español e inglés a FSG Ultimate / Smart Grid Ultimate v2.3, publicado el 18 de octubre. La versión y la fecha se verificaron en los datos actuales de [cTrader Store](https://ctrader.com/products/438); parte de la descripción pública aún menciona v2.1.
- Los PDF originales de 63 páginas se publican en `public/guides/`, con un enlace en la portada y opciones para leer y descargar en el caso de estudio. Cada idioma usa su propia guía; las rutas se mantienen en `lib/sgu.ts`.
- Se documentan la retirada de ADX, los 56 parámetros y las mejoras de ejecución y recuperación descritas en las guías. El estudio histórico conservado corresponde a v2.2.2; no se presenta como una nueva ejecución de v2.3.
- Se incorpora el [video de SGU v2.3](https://www.youtube.com/watch?v=uTD31OqS04E) en ambos casos de estudio mediante el reproductor de YouTube, con interfaz según el idioma, carga diferida, pantalla completa y enlace directo. YouTube confirmó `playableInEmbed: true` al verificarlo.
- Los PDF del CV conservan su contenido y fecha de revisión anteriores a esta actualización del producto.
- Validación: TypeScript y compilación de producción sin errores; comprobación de formato de los archivos modificados; navegación con Playwright sobre Brave en ambos idiomas, escritorio de 1440 px, móvil de 375 px y tema oscuro. Se verificaron las descargas por SHA-256, el tipo `application/pdf`, el cambio de idioma y la ausencia de errores JavaScript o respuestas HTTP fallidas del sitio. Los otros casos de estudio conservan su presentación sin recursos de SGU.

## Revisión del 8 de octubre de 2026

## Productos verificados

| Proyecto | Versión publicada | Fecha indicada | Fuente |
| --- | --- | --- | --- |
| FSG Ultimate | 2.1 | Agosto de 2026 | [cTrader Store](https://ctrader.com/products/438) |
| K-Means Clustering Indicator | 2.0.0 | 8 de octubre de 2025 | [ClickAlgo](https://clickalgo.com/k-means) |
| Gaussian Mixture Model | 1.0.0 | 18 de septiembre de 2025 | [ClickAlgo](https://clickalgo.com/gaussian-mixture) |
| Smart Portfolio Architect | 1.0.0 | 18 de septiembre de 2025 | [ClickAlgo](https://clickalgo.com/smart-portfolio-architect) |
| Moya Bands | 1.0.0 | 9 de septiembre de 2025 | [ClickAlgo](https://clickalgo.com/moya-bands) |

Las cuatro versiones de ClickAlgo coinciden con las que ya mostraba el sitio. La fecha de esta revisión no sustituye la fecha real de actualización de cada producto. Moya Bands figura como producto de un socio: ClickAlgo remite las consultas al proveedor.

Para FSG Ultimate se usó la descripción del editor de la versión 2.1. El resumen automático de la tienda todavía contiene referencias a otra lógica de volumen; por ello no se utilizó. La ficha del portafolio describe arquitectura y controles, sin trasladar métricas comerciales de rentabilidad.

## Otros proyectos incorporados

- [Portfolio Optimizer](https://github.com/walterm2482/portfolio-optimizer): descripción e imagen tomadas de su README y galería pública.
- [Machine Learning API](https://github.com/walterm2482/kibernum_ml_modulo_10_actividad_modular): proyecto académico de Random Forest, Flask, Docker y pytest, con captura del repositorio.

## Correcciones

- Galería compartida por español e inglés, con filtros y enlaces explícitos a producto, notebook o código.
- Retiro de enlaces a repositorios que no aparecen entre los repositorios públicos del usuario y del placeholder `tuusuario`.
- Retiro de ratings y porcentajes de impacto de Divvy sin evidencia suficiente para presentarlos como resultados reales.
- Presentación actualizada, mayor ancho de lectura, navegación móvil y ampliación de imágenes accesible con teclado.
- Dominio consistente para metadatos, robots y sitemap; los previews de Vercel bloquean indexación.
- Comandos de instalación, edición y publicación adaptados al repositorio real.
- Node.js 22 y actualización dentro de Next.js 15 con versiones alineadas de ESLint.

Las imágenes incorporadas se conservan sin modificar; su origen se indica arriba.

## Validación local

- `npm run build`: compilación de producción completada, incluyendo `/`, `/en`, robots y sitemap.
- `npm run typecheck`: sin errores de TypeScript.
- `npm run lint`: sin errores; queda un aviso preexistente sobre `<img>` en el renderizador MDX.
- `npm audit --omit=dev`: cero vulnerabilidades reportadas en dependencias de producción al momento de esta revisión. Se actualizaron dependencias transitivas y se fijaron overrides de PostCSS compatibles con la compilación comprobada.
- Revisión automatizada con Playwright sobre Brave: ocho fichas por idioma, filtros, caso de estudio, modal mediante teclado, cierre con Escape, restitución de foco y scroll, ancho móvil de 375 px sin desbordamiento, cambio de idioma, tema oscuro, canonical y sitemap; sin errores JavaScript ni respuestas HTTP fallidas durante la prueba.
