const fileInput = document.getElementById('fileInput');
const playlist = document.getElementById('playlist');
const searchInput = document.getElementById('searchInput');
const themeToggle = document.getElementById('themeToggle');
const playPauseBtn = document.getElementById('playPauseBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const waveformContainer = document.getElementById('waveform');

let songs = [];
let currentIndex = 0;
let wave = null;
let isPlaying = false;

// Inicializa WaveSurfer
function initWaveSurfer(url) {
    if (wave) wave.destroy();

    wave = WaveSurfer.create({
        container: '#waveform',
        waveColor: '#ccc',
        progressColor: '#5a65ff',
        height: 80,
        responsive: true
    });

    wave.load(url);

    wave.on('ready', () => {
        wave.play();
        isPlaying = true;
        updatePlayPauseButton();
    });

    wave.on('finish', () => {
        playNext();
    });
}

// Subir archivo
fileInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        songs.push({ name: file.name, url });
        renderPlaylist();
    }
});

// Reproduce canción
function playSong(index) {
    if (index < 0 || index >= songs.length) return;
    currentIndex = index;
    const song = songs[index];
    initWaveSurfer(song.url);
    highlightPlaying(index);
}

// Reproduce siguiente
function playNext() {
    const nextIndex = (currentIndex + 1) % songs.length;
    playSong(nextIndex);
}

// Reproduce anterior
function playPrev() {
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    playSong(prevIndex);
}

// Pausar/Reproducir
function togglePlayPause() {
    if (!wave) return;
    if (isPlaying) {
        wave.pause();
    } else {
        wave.play();
    }
    isPlaying = !isPlaying;
    updatePlayPauseButton();
}

// Actualiza botón de reproducción
function updatePlayPauseButton() {
    playPauseBtn.textContent = isPlaying ? '⏸️' : '▶️';
}

// Renderiza lista de canciones
function renderPlaylist() {
    playlist.innerHTML = '';
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = song.name;
        li.classList.add('song-item');

        li.addEventListener('click', () => playSong(index));

        const delBtn = document.createElement('button');
        delBtn.textContent = '🗑️';
        delBtn.classList.add('delete-btn');
        delBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            songs.splice(index, 1);
            renderPlaylist();
        });

        li.appendChild(delBtn);
        playlist.appendChild(li);
    });

    applySearchFilter();
}

// Destaca canción actual
function highlightPlaying(index) {
    const items = document.querySelectorAll('.song-item');
    items.forEach((item, i) => {
        item.classList.toggle('playing', i === index);
    });
}

// Filtro de búsqueda
searchInput.addEventListener('input', applySearchFilter);

function applySearchFilter() {
    const filter = searchInput.value.toLowerCase();
    const items = document.querySelectorAll('.song-item');

    items.forEach((item) => {
        const name = item.textContent.toLowerCase();
        item.style.display = name.includes(filter) ? 'flex' : 'none';
    });
}

// Cambiar tema claro/oscuro
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});

// Controles
playPauseBtn.addEventListener('click', togglePlayPause);
nextBtn.addEventListener('click', playNext);
prevBtn.addEventListener('click', playPrev);
