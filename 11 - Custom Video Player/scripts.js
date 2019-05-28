const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

let isPaused = true;

function togglePlay() {
    this.paused ? video.play() : video.pause();
    isPaused = this.paused;
}

function togglePlaySpace() {
    isPaused ? video.play() : video.pause();
    isPaused = !isPaused;
}

function updateButton() {
    toggle.textContent = isPaused ? '►' : '❚ ❚';
}

// Play/Pause when the 'video' is clicked
video.addEventListener('click', togglePlay);

// Play/Pause when the 'space bar' is pressed
window.addEventListener('keydown', (e) => e.code === "Space" && togglePlaySpace());

// Update the play/pause button display
video.addEventListener('click', updateButton);
toggle.addEventListener('click', updateButton);
window.addEventListener('keydown', (e) => e.code === "Space" && updateButton());