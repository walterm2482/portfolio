# Revisión del portafolio — 8 de octubre de 2026

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
