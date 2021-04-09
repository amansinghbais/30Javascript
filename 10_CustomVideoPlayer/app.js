const video = document.getElementById('video');
const progress = document.getElementById('progress')
const playPauseButton = document.getElementById('play-pause-button');
const volume = document.getElementById('volume');
const forward = document.getElementById('forward');
const backward = document.getElementById('backward');
const progressBar = document.getElementById('progress-bar');
const toggleScreen = document.getElementById('toggleScreen');
const main = document.getElementById('main');
const speed = document.getElementById('speed');

const videoWidth = video.offsetWidth;
let mousedown = false;
let screenFull = false;

function handleProgress(){
    const percent = (video.currentTime / video.duration ) * videoWidth;
    progress.style.width = `${percent}px`
}

function togglePlayPause(){
    if(video.paused){
        video['play']();
        playPauseButton.innerHTML = `<i class="fas fa-pause" id="icon">`;
    }else{
        video['pause']();
        playPauseButton.innerHTML = `<i class="fas fa-play" id="icon">`;
    }
}

function updateVolume(){
    video.volume = volume.value / 100;
}

function forwardTime(){    
video.currentTime += 10;
}
function backwardTime(){    
    video.currentTime -= 10;
}

function changeTime(e){
    const newTime = ( e.offsetX / progressBar.offsetWidth ) * video.duration;
    video.currentTime = newTime;
    handleProgress();
}

function toggleSize(){
    if(!screenFull){
        main.style.width = "100vw";
        progressBar.style.width = "100vw";
        toggleScreen.classList.replace("fa-expand","fa-compress");
        screenFull = true;
    }else{
        main.style.width = "60vw";
        progressBar.style.width = "60vw";
        toggleScreen.classList.replace("fa-compress","fa-expand");
        screenFull = false
    }
}

playPauseButton.addEventListener('click', togglePlayPause);
video.addEventListener('timeupdate', handleProgress);
volume.addEventListener('change', updateVolume);
forward.addEventListener('click', forwardTime);
backward.addEventListener('click', backwardTime);
progressBar.addEventListener('click', changeTime);
video.addEventListener('click',togglePlayPause);
progressBar.addEventListener('mousemove',(e)=> mousedown && changeTime(e));
progressBar.addEventListener('mousedown',()=> mousedown= true);
progressBar.addEventListener('mouseup',()=> mousedown= false);
toggleScreen.addEventListener('click', toggleSize);
speed.addEventListener('change',()=>{
    video.playbackRate = speed.value;
});