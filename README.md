# Arcobox — Sitio web

Web estática trilingüe (castellano / català / english) para **Arcobox — Arquitectura Consulting Barcelona Oliete Xavier**, estudio de arquitectura en Vila de Gràcia, Barcelona.

Sin frameworks ni proceso de build: HTML + CSS + JavaScript. Se puede alojar en cualquier hosting estático (GitHub Pages, Netlify, Vercel, cPanel…).

## Estructura

```
arcobox-web/
├── index.html        Página principal (una sola página con secciones)
├── css/styles.css    Estilos (paleta papel/tinta/terracota)
├── js/
│   ├── config.js     ⚙️  Email, teléfono, enlace de mapa → RELLENAR
│   ├── i18n.js       Traducciones ES / CA / EN
│   ├── projects.js   📁 Lista de proyectos → AÑADIR AQUÍ
│   └── main.js       Lógica (idiomas, filtros, menú, formulario)
└── img/              Fotos de proyectos
```

## Cómo añadir un proyecto

1. Guarda la foto en `img/` (ideal: JPG apaisado, ~1200px de ancho).
2. Abre `js/projects.js` y copia uno de los bloques `{...}` de la lista:

```js
{
  cat: "rehabilitacion",            // "obra-nueva" | "rehabilitacion" | "reforma"
  year: "2025",
  location: "Gràcia, Barcelona",
  image: "img/mi-proyecto.jpg",     // opcional; sin foto se dibuja un plano
  title: {
    es: "Rehabilitación de fachada",
    ca: "Rehabilitació de façana",
    en: "Façade refurbishment"
  }
},
```

3. Los proyectos actuales llevan `sample: true` (aparecen sellados como "Ejemplo"). Elimina esa línea en los proyectos reales, o borra los ejemplos directamente.

## Datos de contacto

Edita `js/config.js` y rellena `email` y `phone`. Mientras estén vacíos, la web muestra "por confirmar" y el formulario avisa de que falta configurar el correo.

## Textos e idiomas

Todos los textos viven en `js/i18n.js`, organizados por idioma (`es`, `ca`, `en`) y sección. El idioma se detecta automáticamente por el navegador y se puede cambiar con el selector CA/ES/EN de la cabecera (se recuerda entre visitas).

## Ver en local

```bash
cd arcobox-web
python3 -m http.server 4173
# → http://localhost:4173
```
