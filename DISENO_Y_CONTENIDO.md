# Mejora de diseño y contenido — octubre de 2026

Rama: `diseno-contenido-portfolio`. Esta iteración parte de la actualización con FSG Ultimate v2.1 integrada a `main`.

## Presentación

- Identidad visual verde, monograma, mejor jerarquía tipográfica y más espacio entre secciones.
- Inicio con una presentación profesional, acceso a proyectos y contacto, y un resumen del proceso de trabajo.
- Tarjetas que distinguen productos publicados, código abierto y notebooks, con contadores por categoría.
- Contexto de problema, enfoque y resultado en Portfolio Optimizer, la API de Machine Learning y Divvy.
- Sección de habilidades, formación académica, tesis y cursos seleccionados.
- Experiencia con tareas concretas, contexto y tecnologías, en ambos idiomas.
- Contacto visible con correo, redes y botón para copiar la dirección.
- Imagen Open Graph propia al compartir el enlace.

## Contenido

La formación y la experiencia se basan en los CV disponibles en la carpeta de trabajo, especialmente `cv_walter_moya_mejorado.md` y `cv_walter_moya_una_pagina.tex`. Los enlaces y datos de productos mantienen las fuentes de [ACTUALIZACION_2026-10.md](ACTUALIZACION_2026-10.md). La cifra de procesamiento de inventario en PwC procede del CV; las fichas no añaden promesas de rentabilidad ni métricas de modelos sin respaldo. LinkedIn usa la dirección de la versión más reciente del CV.

Los datos se editan en `app/data.ts` y `app/profile-data.ts`. Las páginas ES/EN comparten `components/PortfolioPage.tsx`, lo que permite cambiar la estructura una sola vez. El contenido principal se genera en el servidor y puede leerse con JavaScript desactivado.

## Interacción y accesibilidad

- Menú móvil con estado accesible, cierre con Escape y retorno del foco al botón.
- Enlaces de navegación por sección y cambio de idioma que conserva la sección seleccionada.
- Tema claro, oscuro o automático, con controles identificados en cada idioma.
- Enlace para saltar al contenido, encabezados ordenados y foco visible.
- Filtros que anuncian el número de resultados y vistas ampliadas operables con teclado.
- Preferencia de movimiento reducido respetada en los estilos.

## Revisar y publicar

```bash
npm run dev
```

Abrir `/` y `/en`. Para comprobar la compilación:

```bash
npm run lint
npm run typecheck
npm run build
```

Seguir [INSTALLATION.md](INSTALLATION.md) para subir la rama, revisar la Preview y publicar mediante `main`.

## Validación realizada

- Lint sin errores, comprobación de tipos y compilación de producción correctos. Persiste una advertencia previa sobre `<img>` en `mdx-components.tsx`.
- Pruebas de navegador con Playwright en español e inglés: ocho proyectos, cuatro filtros, detalles, modal con teclado y restauración del foco, copia del correo, menú móvil y cambio de idioma conservando la sección.
- Revisión de desbordamiento en anchos de 320, 375, 768, 1024 y 1440 px, con temas claro y oscuro.
- Análisis automático con axe-core para WCAG A/AA en ambas páginas y temas, sin infracciones detectadas. Esto complementa la revisión visual y de teclado.
- Imagen Open Graph y sitemap disponibles; contenido principal legible sin JavaScript.
- Capturas guardadas fuera del repositorio en `../vista-previa-portfolio/`.
