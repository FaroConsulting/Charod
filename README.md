# Sitio Charod

## Estructura
```
index.html                     → Inicio
proyectos.html                 → Grilla de proyectos con filtro (Solo diseño / Diseño + Desarrollo)
proyecto-casa-meridiano.html   → Página de proyecto individual
proyecto-depto-lino.html       → Página de proyecto individual
css/style.css                  → Todos los estilos del sitio
js/main.js                     → Scroll del header, animaciones, filtro, carrusel
assets/logo.png                → Logo sin fondo
assets/projects/<proyecto>/     → Fotos y videos de cada proyecto
```

## Agregar o cambiar fotos/videos
Se edita directo en el HTML del proyecto (`proyecto-casa-meridiano.html` o
`proyecto-depto-lino.html`), buscando el bloque `<div class="carousel-track">`.

1. Subí el archivo a `assets/projects/<proyecto>/` (nombralo como quieras, ej. `casa_4.jpg`).
2. Agregá un bloque `.carousel-slide`:
   ```html
   <!-- foto -->
   <div class="carousel-slide"><img src="assets/projects/casa-meridiano/casa_4.jpg" alt="Living"></div>

   <!-- video (necesita poster de portada en jpg) -->
   <div class="carousel-slide">
     <video controls poster="assets/projects/casa-meridiano/casa_4_poster.jpg">
       <source src="assets/projects/casa-meridiano/casa_4.mp4" type="video/mp4">
     </video>
   </div>
   ```
3. El carrusel (flechas, puntos, contador) se arma solo con la cantidad de `.carousel-slide`
   que haya — no hay que tocar `js/main.js`.

### Sobre los videos
Git no está pensado para archivos pesados. Si los videos son cortos (unos MB), subirlos
al repo anda bien. Si son varios o pesados, mejor subirlos como "no listados" a YouTube
o Vimeo y usar `<iframe>` en vez de `<video>` — te paso el snippet si lo necesitás.

## Agregar un proyecto nuevo
1. Duplicá `proyecto-casa-meridiano.html`, renombralo (ej. `proyecto-oficinas-estero.html`).
2. Cambiá el texto, la ficha técnica (`.detail-meta`) y las fotos/videos del carrusel.
3. Creá la carpeta `assets/projects/oficinas-estero/` y subí ahí sus fotos.
4. Sumalo a la grilla en `proyectos.html` copiando un bloque `<a class="grid-card">`
   y poniendo `data-category="diseno"` o `data-category="diseno-desarrollo"` según
   corresponda — eso es lo que hace funcionar el filtro.

## Publicar en GitHub Pages
1. Creá un repositorio en GitHub.
2. Subí todo el contenido de esta carpeta a la raíz del repo (`git init`, `add`, `commit`,
   `push`, o arrastrando los archivos desde la web de GitHub si preferís no usar terminal).
3. **Settings → Pages → Source: rama `main`, carpeta `/ (root)`**.
4. GitHub te da una URL tipo `https://tuusuario.github.io/nombre-repo/` en un par de minutos.

Avisame cuando quieras el paso a paso exacto de comandos de git para el push inicial.
