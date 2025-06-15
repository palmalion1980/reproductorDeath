# 🎧 Reproductor de Música JS – Tema *Death Note*

Este proyecto es un reproductor de música construido con HTML, CSS y JavaScript puro, con diseño inspirado en el anime *Death Note*. El reproductor permite cargar canciones locales, controlar la reproducción, navegar entre pistas, y visualizar la forma de onda del audio gracias a [WaveSurfer.js](https://wavesurfer-js.org/).

## 🧩 Funcionalidades

- 🎵 Cargar archivos de música locales desde el navegador.
- ▶️ Reproducir, pausar, avanzar o retroceder canción.
- 📜 Lista dinámica de canciones con opción de eliminar canciones individuales.
- 🔍 Filtro de búsqueda en tiempo real para encontrar canciones por nombre.
- 🌗 Modo claro/oscuro con un simple interruptor.
- 🌊 Visualización de forma de onda de audio usando WaveSurfer.js.
- 🎧 Estética visual basada en *Death Note* (recomendado complementar con imágenes/fuentes).


## 📁 Estructura del proyecto

deathnote-music-player/
│
├── index.html # Estructura HTML principal
├── style.css # Estilos visuales, incluyendo tema dark/light
├── script.js # Lógica del reproductor (este archivo)
├── assets/
│ ├── images/ # Fondos, logos y elementos visuales (opcional)
│ └── audio/ # (Opcional) Canciones de ejemplo
└── README.md # Este archivo

## 🚀 Cómo usar

1. Clona o descarga este repositorio:

```bash
git clone https://github.com/tuusuario/deathnote-music-player.git

2. Abre el archivo index.html en tu navegador.

3. Carga tus archivos de música desde el botón correspondiente.

🧠 Detalles técnicos
📌 Componentes clave:
WaveSurfer.create({...})
Inicializa el visualizador de forma de onda al cargar una canción.

fileInput.addEventListener('change', ...)
Permite cargar canciones desde el dispositivo local.

renderPlaylist()
Muestra las canciones cargadas y añade botones de eliminar.

highlightPlaying(index)
Resalta la canción que se está reproduciendo.

themeToggle.addEventListener(...)
Permite cambiar entre tema claro y oscuro con classList.toggle('light-theme').

applySearchFilter()
Filtra canciones en la lista según el texto ingresado en el campo de búsqueda.

📦 Tecnologías utilizadas
✅ HTML5

✅ CSS3 (con soporte para modo claro/oscuro)

✅ JavaScript Vanilla

✅ WaveSurfer.js para visualización del audio

🛠 Posibles mejoras futuras
🎨 Añadir fondo animado con temática Death Note.

💾 Guardar la playlist en localStorage o usar IndexedDB.

📱 Mejorar responsividad móvil.

🎚️ Barra de progreso personalizada y control de volumen.

⚠️ Licencia
Este proyecto es de carácter educativo y personal. No incluye archivos ni recursos oficiales de Death Note ni música protegida por derechos de autor. Se recomienda utilizar material visual con licencias libres o de uso permitido.

Desarrollado con pasión, código puro y un poco de oscuridad. 🖤
