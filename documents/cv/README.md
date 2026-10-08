# CV descargable en español e inglés

Las fuentes editables están en esta carpeta y los PDF que sirve el sitio en `public/cv/`:

| Idioma  | Fuente                               | PDF                                      |
| ------- | ------------------------------------ | ---------------------------------------- |
| Español | `walter_thomas_moya_araya_cv_es.tex` | `/cv/walter_thomas_moya_araya_cv_es.pdf` |
| Inglés  | `walter_thomas_moya_araya_cv_en.tex` | `/cv/walter_thomas_moya_araya_cv_en.pdf` |

Ambas versiones son de una página A4, con una columna y cuerpo de 10,7 puntos. La traducción mantiene las fechas, los resultados y los proyectos del CV final en español del 8 de octubre de 2026. El título de Ingeniería Civil Industrial se presenta como Industrial Engineering, sin convertirlo en una titulación de ingeniería civil ni atribuir una equivalencia de grado no documentada. Las notas académicas conservan la escala chilena de 7,0.

La revisión visual del 8 de octubre de 2026 separa las líneas divisorias de los títulos de sección en ambos idiomas. El PDF español coincide con `../../../cv_walter_moya_araya.pdf`; se conservan el contenido curricular, el tamaño de letra y los nueve destinos enlazados.

La descripción de la tesis explicita la detección, el seguimiento y la cuantificación de actividad de maquinaria de construcción con YOLOv8 y BoT-SORT, tanto en los CV como en el perfil del sitio.

Ingeniería Civil Industrial incluye la nota **5,7/7,0** en español y **5.7/7.0** en inglés, conservando la escala chilena y la distinción de titulación.

La experiencia independiente se contrastó con el código local de la plataforma AFML. Los CV resumen diferenciación fraccional, etiquetado de eventos, búsqueda anidada, walk-forward/CPCV, embargo según memoria de variables, ponderación de muestras, costos, Sharpe deflactado y forward testing pre-registrado. La experiencia aparece antes de los proyectos. El portafolio amplía estos puntos en ambos idiomas, sin atribuir rentabilidad ni ejecución de órdenes reales.

El inicio y Contacto tienen un único botón de CV por sección. En `/` descarga el PDF español y en `/en` descarga el PDF inglés. Las etiquetas **PDF · ES** y **PDF · EN**, los nombres de archivo, `hreflang` y las descripciones accesibles identifican el idioma real del documento. Los nombres públicos y de descarga son idénticos, en minúsculas y con guiones bajos.

Dentro del CV, el enlace al portafolio usa `https://waltermoya.vercel.app/` en español y `https://waltermoya.vercel.app/en` en inglés. Las antiguas direcciones `/cv/walter-moya-cv-es.pdf` y `/cv/walter-moya-cv-en.pdf` redirigen a sus nuevos nombres mediante `next.config.mjs`.

## Compilar

Desde la raíz del repositorio, con Tectonic instalado:

```sh
tectonic --outdir public/cv documents/cv/walter_thomas_moya_araya_cv_es.tex
tectonic --outdir public/cv documents/cv/walter_thomas_moya_araya_cv_en.tex
```

La compilación de esta entrega usa Tectonic 0.17.0. La primera ejecución puede descargar paquetes. También se puede subir cada `.tex` a un proyecto vacío en Overleaf y usar pdfLaTeX; copiar después los PDF a las rutas indicadas. No se necesitan imágenes ni archivos auxiliares del sitio.

Tras editar, comprobar que cada CV sigue ocupando una página, revisar su aspecto y extraer el texto con `pdftotext`. Conservar exactamente los nombres de los PDF: los enlaces del sitio están definidos en `components/CVDownload.tsx`.

## Validación de esta entrega

- Ambos PDF: una página A4, nueve enlaces correctos, fuentes incorporadas y texto extraíble en orden con Poppler, PyMuPDF y pypdf. Se revisaron visualmente las dos versiones.
- Compilación de producción y comprobación de tipos correctas. Lint sin errores; permanece la advertencia anterior de `<img>` en `mdx-components.tsx`.
- Playwright sobre la compilación de producción: cuatro descargas reales, una por sección e idioma de la página. Se comprobaron el único botón de CV en cada sección, el nombre en minúsculas con guiones bajos, el idioma y la identidad de los bytes con cada PDF del repositorio.
- Los dos archivos responden con HTTP 200 y tipo `application/pdf`. Sin errores de JavaScript durante las pruebas.
- Las dos direcciones anteriores responden con redirección HTTP 308 al PDF correspondiente.
- Sin desbordamiento horizontal a 320, 375, 768 y 1440 px en ambas portadas; botones con un alto mínimo de 44 px. Capturas en `../vista-previa-portfolio/` desde la raíz del repositorio, junto a las otras vistas del proyecto.

## Publicar

Los PDF son archivos estáticos incluidos en el despliegue de Next.js. Para que aparezcan en Vercel, subir los cambios al repositorio conectado y desplegar el commit. Seguir [INSTALLATION.md](../../INSTALLATION.md) para revisar la Preview e integrar la rama a producción.
