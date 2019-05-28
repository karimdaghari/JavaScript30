const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

let isPaused = true; // added the flag otherwise space bar control won't work

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

function skip() {
    let time = Number(this.dataset.skip);
    video.currentTime += time;
}

function skipArrows(arrow) {
    if (arrow.code === "ArrowRight") {
        video.currentTime += 25;
    } else if (arrow.code === "ArrowLeft") {
        video.currentTime += -10;
    }
}

function updateRange() {
    video[this.name] = this.value;
}

function handleProgress() {
    let percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

// Play/Pause when the 'video' is clicked
video.addEventListener('click', togglePlay);
video.addEventListener('keydown', (e) => e.code === "Space" && togglePlaySpace());


// Play/Pause when the 'space bar' is pressed
window.addEventListener('keydown', (e) => e.code === "Space" && togglePlaySpace());
window.addEventListener('keydown', (e) => e.code === "Space" && updateButton());

// Update the play/pause button display
video.addEventListener('click', updateButton);
toggle.addEventListener('click', updateButton);
video.addEventListener('ended', () => {
    toggle.textContent = '🔁';
    video.currentTime = 0;
});


// Handle skip buttons
// Directly: (by clicking on the buttons)
skipButtons.forEach(button => button.addEventListener('click', skip));

// Indirectly: (by pressing on the left|right arrow)
window.addEventListener('keydown', (e) => skipArrows(e));

// Control volume and speed
ranges.forEach(range => range.addEventListener('change', updateRange));

// Update progress
video.addEventListener('timeupdate', handleProgress);
