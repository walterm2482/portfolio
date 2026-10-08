# CV descargable en español e inglés

Las fuentes editables están en esta carpeta y los PDF que sirve el sitio en `public/cv/`:

| Idioma  | Fuente                  | PDF                         |
| ------- | ----------------------- | --------------------------- |
| Español | `walter-moya-cv-es.tex` | `/cv/walter-moya-cv-es.pdf` |
| Inglés  | `walter-moya-cv-en.tex` | `/cv/walter-moya-cv-en.pdf` |

Ambas versiones son de una página A4, con una columna y cuerpo de 10,7 puntos. La traducción mantiene las fechas, los resultados y los proyectos del CV final en español del 8 de octubre de 2026. El título de Ingeniería Civil Industrial se presenta como Industrial Engineering, sin convertirlo en una titulación de ingeniería civil ni atribuir una equivalencia de grado no documentada. Las notas académicas conservan la escala chilena de 7,0.

Los botones del inicio y Contacto ofrecen los dos archivos; el idioma de la página aparece primero. Las etiquetas **PDF · ES** y **PDF · EN**, los nombres de archivo, `hreflang` y las descripciones accesibles identifican el idioma real del documento.

## Compilar

Desde la raíz del repositorio, con Tectonic instalado:

```sh
tectonic --outdir public/cv documents/cv/walter-moya-cv-es.tex
tectonic --outdir public/cv documents/cv/walter-moya-cv-en.tex
```

La compilación de esta entrega usa Tectonic 0.17.0. La primera ejecución puede descargar paquetes. También se puede subir cada `.tex` a un proyecto vacío en Overleaf y usar pdfLaTeX; copiar después los PDF a las rutas indicadas. No se necesitan imágenes ni archivos auxiliares del sitio.

Tras editar, comprobar que cada CV sigue ocupando una página, revisar su aspecto y extraer el texto con `pdftotext`. Conservar exactamente los nombres de los PDF: los enlaces del sitio están definidos en `components/CVDownload.tsx`.

## Validación de esta entrega

- Ambos PDF: una página A4, nueve enlaces correctos, fuentes incorporadas y texto extraíble en orden con Poppler, PyMuPDF y pypdf. Se revisaron visualmente las dos versiones.
- Compilación de producción y comprobación de tipos correctas. Lint sin errores; permanece la advertencia anterior de `<img>` en `mdx-components.tsx`.
- Playwright sobre la compilación de producción: ocho descargas reales, correspondientes a dos documentos, dos secciones y dos idiomas de la página. Se comprobaron el nombre de descarga, el idioma y la identidad de los bytes con cada PDF del repositorio.
- Los dos archivos responden con HTTP 200 y tipo `application/pdf`. Sin errores de JavaScript durante las pruebas.
- Sin desbordamiento horizontal a 320, 375, 768 y 1440 px en ambas portadas; botones con un alto mínimo de 44 px. Capturas en `../vista-previa-portfolio/` desde la raíz del repositorio, junto a las otras vistas del proyecto.

## Publicar

Los PDF son archivos estáticos incluidos en el despliegue de Next.js. Para que aparezcan en Vercel, subir los cambios al repositorio conectado y desplegar el commit. Seguir [INSTALLATION.md](../../INSTALLATION.md) para revisar la Preview e integrar la rama a producción.
