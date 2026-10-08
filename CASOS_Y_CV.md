# CV y proyectos destacados — 8 de octubre de 2026

## Cambios

- Descarga del CV junto a la presentación y en Contacto, con dos versiones de una página: español (**PDF · ES**) e inglés (**PDF · EN**). Ambas están disponibles desde los dos idiomas del sitio.
- Tres proyectos al abrir la portada: FSG Ultimate v2.1, Portfolio Optimizer y Machine Learning API. Los ocho proyectos siguen disponibles mediante **Ver todos los proyectos**, con filtros por categoría.
- Seis páginas de casos de estudio: tres en español y tres en inglés. Incluyen problema, aporte, flujo de trabajo, decisiones, entregables verificables, capturas ampliables y fuentes.
- Descripciones breves y etiquetas de tecnología de 12 px. El resumen visual del proceso del inicio se muestra desde tablet para acercar los proyectos en móvil.
- Retiro de los dos artículos de ejemplo y su layout. Los notebooks propios y sus enlaces a Kaggle se conservan.
- Documentos raíz por idioma: `/en` y sus casos reciben `lang="en"` directamente desde el servidor, incluso sin JavaScript. Las rutas públicas del inicio no cambian.

## CV

Español: `../cv_walter_moya_final_ats.pdf`, generado el 8 de octubre de 2026 y copiado sin modificar a `public/cv/walter-moya-cv-es.pdf`. Inglés: `public/cv/walter-moya-cv-en.pdf`, traducido a partir de esa versión y compilado con Tectonic. Ambos conservan los mismos hechos, fechas, proyectos, número **+56 9 3366 9343** y correo de contacto.

Destacan K-Means, FSG Ultimate v2.1 y Smart Portfolio Architect, con Portfolio Optimizer como complemento en Python. Las fuentes LaTeX editables se incluyen en `documents/cv/`; ver su [README](documents/cv/README.md) para recompilar. `components/CVDownload.tsx` muestra ambos archivos en las dos secciones, con el idioma de la página en primer lugar y nombres de descarga que distinguen ES y EN.

## Evidencia de los casos

Las capturas se copiaron sin alteraciones. Los enlaces a archivos de GitHub fijan la revisión consultada para que las fuentes sigan correspondiendo al contenido mostrado.

| Caso                 | Fuente consultada                                                                                                                                     | Capturas locales                                                                                |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| FSG Ultimate v2.1    | [Ficha y galería del producto en cTrader](https://ctrader.com/products/438)                                                                           | `fsg-signal.webp`: gráfico anotado de alineación Stochastic multitemporal de la galería pública |
| Portfolio Optimizer  | [Repositorio, revisión ef5477d](https://github.com/walterm2482/portfolio-optimizer/tree/ef5477d63f24991a31699c797e0dce3a7a7f40a0)                     | `portfolio-dashboard.png` y `portfolio-equity.png`, desde `images/`                             |
| Machine Learning API | [Repositorio, revisión 28dacd1](https://github.com/walterm2482/kibernum_ml_modulo_10_actividad_modular/tree/28dacd17ec68dafbbab97d7eff5b26701d1096aa) | `ml-api-predict.png` y `ml-training.png`, desde `imgs/`                                         |

Directorio de capturas: `public/projects/cases/`. Imagen original de cTrader: [CDN del producto](https://cdn.ctrader.com/image/webp/bd352b80-a0db-47d7-806a-b108704522ba_56998).

Se revisaron los módulos de optimización y backtesting de Portfolio Optimizer, y `app.py`, `train_model.py`, `test_api.py` y `test_api_errors.py` de la API. Los resultados se expresan como funcionalidades y entregables comprobables. Las cuatro pruebas de la API están **definidas en el código**; no se anuncia una nueva ejecución de esas pruebas ni un benchmark nuevo del modelo. Las capturas preservan ejecuciones históricas documentadas.

FSG se presenta como producto publicado y con controles descritos en su ficha. Los backtests financieros no se convierten en promesas de rendimiento ni en rentabilidad auditada.

La tarjeta de la API usa `public/projects/ml-api-workflow.svg`, un esquema vectorial del flujo Random Forest → Flask → Docker. Es una ilustración de arquitectura; las capturas reales están dentro del caso.

## Edición y publicación

Contenido: `app/case-studies.ts`. Plantilla: `components/CaseStudyPage.tsx`. Rutas: `lib/project-routes.ts`. Los casos se generan estáticamente y el cambio de idioma conserva el caso abierto. El sitemap incluye las ocho páginas principales con sus alternativas ES/EN.

Comprobar con `npm run lint`, `npm run typecheck` y `npm run build`; después seguir [INSTALLATION.md](INSTALLATION.md) para revisar la Preview de Vercel e integrar la rama a `main`.

## Validación realizada

- Compilación de producción y comprobación de tipos correctas. Lint sin errores; permanece la advertencia anterior de `<img>` en `mdx-components.tsx`.
- Revisión inicial con Playwright sobre la compilación de producción: descarga real del PDF español desde ambas portadas, nombre del archivo y contenido idéntico al original; teléfono, tres destacados, expansión a ocho proyectos, filtros y retorno a destacados. La validación de los dos PDF finales se detalla en `documents/cv/README.md`.
- Seis casos con HTTP 200, capturas cargadas, cambio de idioma conservando el caso, canonicals y sitemap con ocho URLs. Imagen de redes disponible en la dirección estable `/opengraph-image`.
- Menú móvil, modales con teclado y recuperación del foco; revisión de desbordamiento en 320, 375, 768, 1024 y 1440 px. Etiquetas de tecnología de 12 px.
- HTML inicial con el idioma correcto en las ocho páginas, comprobado con JavaScript desactivado. Los dos artículos de ejemplo y los casos inexistentes devuelven HTTP 404.
- axe-core con reglas WCAG A/AA: sin infracciones detectadas en las dos portadas con temas claro y oscuro y en los seis casos comprobados. Sin errores de JavaScript ni solicitudes fallidas durante la navegación de prueba.
- Capturas de revisión en `../vista-previa-portfolio/`, incluyendo `galeria-destacados-light.png`, `cv-proyectos-movil.png` y `caso-fsg-ultimate.png`.
