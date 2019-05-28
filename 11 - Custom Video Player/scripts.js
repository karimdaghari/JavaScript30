const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
    this.paused ? video.play() : video.pause();
}

function updateButton() {
    toggle.textContent = this.paused ? '►' : '❚ ❚';
}

video.addEventListener('click', togglePlay);

video.addEventListener('click', updateButton);
toggle.addEventListener('click', updateButton);