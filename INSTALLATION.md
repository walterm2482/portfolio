# Cómo retomar, modificar y publicar tu portafolio

## 1. Abrir el proyecto correcto

Tu captura muestra que Vercel ya tiene el proyecto **portfolio**, conectado a **walterm2482/portfolio**. El código se edita en ese repositorio; Vercel construye y publica los cambios.

La copia preparada en este equipo está en:

```bash
cd /home/walter/Documentos/busqueda-trabajo/portfolio
```

En VS Code: **Archivo → Abrir carpeta** y selecciona esa carpeta. El archivo de LinkedIn y los CV están en la carpeta superior y no forman parte del sitio.

Para instalarlo en otro equipo, con Git y Node.js 22:

```bash
git clone https://github.com/walterm2482/portfolio.git
cd portfolio
npm ci
```

La actualización inicial con FSG Ultimate ya se integró a `main`. La siguiente mejora de diseño y contenido está preparada en la rama `diseno-contenido-portfolio`. Para revisar esa versión, si aún no se ha integrado:

```bash
git switch diseno-contenido-portfolio
npm ci
```

## 2. Iniciar el sitio localmente

```bash
npm run dev
```

Abre <http://localhost:3000> para español y <http://localhost:3000/en> para inglés. Si el puerto está ocupado, Next.js mostrará otro en la terminal. Guarda tus cambios y revisa el navegador. Detén el servidor con `Ctrl+C`.

Se instaló Node.js 22 en el directorio de usuario de este equipo. Si una terminal ya abierta no encuentra `node` o `npm`, abre otra o ejecuta:

```bash
export PATH="$HOME/.local/bin:$PATH"
node --version
npm --version
```

## 3. Modificar proyectos

Edita `app/data.ts`: `PROJECTS_ES` contiene los textos en español y `PROJECTS_EN` los de inglés. Usa el mismo `id` en ambos idiomas. Guarda las imágenes dentro de `public/projects/` y escribe su ruta como `/projects/nombre.webp`.

Ejemplo de una ficha:

```ts
{
  id: 'mi-proyecto',
  name: 'Mi proyecto',
  description: 'Qué problema resuelve y cómo lo desarrollé.',
  image: '/projects/mi-proyecto.webp',
  role: 'Data Scientist',
  category: 'ml',
  stack: ['Python', 'Scikit-learn'],
  code: 'https://github.com/walterm2482/repositorio-real',
}
```

Categorías: `quant` (desarrollo cuantitativo), `ml` (Machine Learning), `data` (análisis de datos). `link` abre la ficha pública del producto, `demo` un notebook o demostración y `code` el repositorio. Completa únicamente enlaces existentes. `metrics` es opcional: usa versiones o fechas verificadas y evita presentar proyecciones como resultados obtenidos.

Para cambiar tu presentación, edita `components/Hero.tsx`. Para modificar experiencia, redes o correo, edita las otras listas en `app/data.ts`. Las habilidades, títulos y cursos están en `app/profile-data.ts`.

Las dos versiones comparten la estructura de `components/PortfolioPage.tsx`; los textos se eligen según el idioma. El diseño general, las tarjetas y los colores están en `app/globals.css`. La imagen que aparece al compartir el sitio se genera desde `app/opengraph-image.tsx`.

## 4. Comprobar antes de subir

```bash
npm run lint
npm run typecheck
npm run build
```

Revisa español e inglés, filtros, enlaces, imágenes ampliadas y navegación desde un celular. Para ver la compilación de producción, ejecuta `npm start` después de `npm run build`.

## 5. Subir una rama para revisar en Vercel

Comprueba en qué rama estás y revisa los cambios. Si ya hay un commit preparado, basta con el último comando:

```bash
git branch --show-current
git status
git add .
git commit -m "Mejora el diseño y contenido del portafolio"
git push -u origin HEAD
```

`HEAD` sube la rama actual con su mismo nombre. En este equipo puedes usar la terminal integrada de VS Code, donde ya funcionó la autenticación con `walterm2482`. La sesión del navegador y la cuenta usada por Git son independientes. Si Git solicita autenticación, usa la integración de GitHub de VS Code o una clave SSH con acceso al repositorio; GitHub no admite la contraseña de tu cuenta para operaciones Git por HTTPS.

En GitHub, abre **Compare & pull request**, con base `main` y la rama de actualización como origen. Vercel normalmente genera una **Preview** al recibir el push. En tu panel abre **portfolio → Deployments**, selecciona el despliegue de esa rama y pulsa **Visit** para revisar la versión.

## 6. Publicar en tu dirección actual

En **portfolio → Settings → Git**, confirma el repositorio conectado y la rama de producción. Si es `main`, integra el pull request a `main` cuando la Preview esté correcta. Vercel construirá ese commit y actualizará <https://waltermoya.vercel.app/> cuando el despliegue llegue a **Ready**.

En la configuración del proyecto, usa Node.js **22.x**, framework **Next.js**, directorio raíz del repositorio y comando de compilación `npm run build`. No necesitas crear un proyecto nuevo ni volver a importar el repositorio para cada cambio.

`NEXT_PUBLIC_SITE_URL` es opcional; el código usa `https://waltermoya.vercel.app` por defecto. Si ya tienes esa variable definida en Vercel, comprueba que apunte a ese dominio. Un cambio de variable necesita un nuevo despliegue para reflejarse.

Si falla el despliegue, abre sus **Build Logs**, corrige el error y envía un nuevo commit. Para volver a una publicación anterior, selecciona un despliegue de producción que funcionaba y usa la acción de rollback disponible en Vercel.

Referencia: [despliegues de GitHub en Vercel](https://vercel.com/docs/git/vercel-for-github).
