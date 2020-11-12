// get elements
//build functions
// hook up evenet listeners

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


function togglePlay() {
    
    const method = video.paused ? 'play' : 'pause';
    video[method]()
}

function updateButton() {
    const icon = this.paused? '►' : '❚ ❚';
    // console.log(`${icon}`)
    toggle.textContent = icon;
    // console.log('skibbiddy bop do daw')
}

function skip() {
    console.log('skipadelphia')
    // console.log(this.dataset)
    video.currentTime += parseFloat(this.dataset.skip)
}

function scrub(e) {
    console.log(e)

    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function handleRangeUpdate(){
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    // console.log(percent)
    progressBar.style.flexBasis = `${percent}%`

}
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))

progress.addEventListener('click', scrub)
progress,addEventListener('mousemove', (e) => mousedown && scrub(e))
let mouseDown = false;
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);