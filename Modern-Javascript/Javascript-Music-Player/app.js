const app = document.querySelector('#app')
const image = document.querySelector('.disk');
const title = document.querySelector('#title');
const singer = document.querySelector('#singer');
const prev = document.querySelector('#prev');
const play = document.querySelector('#play');
const next = document.querySelector('#next');
const player = new MusicPlayer(musicList);
const disk = document.querySelector(".disk");
const duration = document.querySelector("#duration");
const currentTime = document.querySelector("#current-time");
const progressBar = document.querySelector("#progres-bar");
const volume = document.querySelector('#volume');
const volumeBar = document.querySelector("#volume-bar");
const ul = document.querySelector("#music-list");

window.addEventListener("load",() =>{
    let music = player.getMusic();
    displayMusic(music);
    displayMusicList(player.musicList);
});
function displayMusic(music){
    title.innerText = music.title;
    singer.innerText = music.singer;
    image.style.background= `url('../img/${music.img}')`;
    audio.src = "mp3/" + music.file;
}
play.addEventListener("click",function(){
    const isMusicPlay = disk.classList.contains("playing");
    isMusicPlay ? pauseMusic() : playMusic();
});
function pauseMusic() {
    audio.pause();
    disk.classList.remove('playing');
    play.querySelector('button i').classList = ('fa fa-play-circle')
    disk.style.animationPlayState = 'paused';

};
function playMusic() {
    audio.play();
    disk.classList.add('playing');
    play.querySelector('button i').classList = ('fa fa-pause-circle')
    disk.style.animationPlayState = 'running';
};
prev.addEventListener("click",function(){
    prevMusic();
});
function prevMusic(){
    player.previous();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
};
next.addEventListener("click",function(){
    nextMusic();
});
function nextMusic(){
    player.next();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
};
const calculateTime = (toplamSaniye) => {
    const dakika = Math.floor(toplamSaniye / 60);
    const saniye = Math.floor(toplamSaniye % 60);
    const guncelSaniye = saniye < 10 ? `0${saniye}` : `${saniye}`; 
    const sonuc = `${dakika}:${guncelSaniye}`;
    return sonuc;
};
audio.addEventListener("loadedmetadata",()=>{
    duration.textContent =calculateTime(audio.duration);
    progressBar.max = Math.floor(audio.duration)
});
audio.addEventListener("timeupdate",() => {
    progressBar.value = Math.floor(audio.currentTime);
    currentTime.textContent = calculateTime(progressBar.value);
    musicStop();
});
progressBar.addEventListener("input",() => {
    currentTime.textContent = calculateTime(progressBar.value);
    audio.currentTime = progressBar.value;
    musicStop();
});
function musicStop(){
    if(audio.currentTime == audio.duration){
        pauseMusic();
    }
};
let sesDurumu = "sesli";
volume.addEventListener("click",() =>{
    if (sesDurumu ==="sesli") {
        audio.muted = true;
        sesDurumu = "sessiz";
        volumeBar.value = 0;
        volume.classList = "fa-solid fa-volume-xmark";
    }
    else
    {
        volumeBar.value = 100;
        volume.classList = "fa-solid fa-volume-high";
        audio.muted = false;
        sesDurumu = "sesli";
    }
});
volumeBar.addEventListener("input",(e) => {
    const value = e.target.value;
    audio.volume = value/100;
    if(value == 0)
    {
        volume.classList = "fa-solid fa-volume-xmark";
    }
    else if (value > 0 && value <= 50 )
    {
        volume.classList = "fa-solid fa-volume-low";
    }
    else if (value > 50 && value <= 100)
    {
        volume.classList = "fa-solid fa-volume-high";
    }
})
const displayMusicList = (list) =>{
    for(let i=0; i< list.length; i++){
        let liTag =`<li li-index='${i}' onclick="selectedMusic(this)">
                    <marquee>${list[i].getName()}</marquee>
                    <span id="music-${i}">${i}</span>
                    <audio class="music-${i}" src="mp3/${list[i].file}">
                    </li>`;
        ul.insertAdjacentHTML("beforeend",liTag);
        let liAudioDuration = ul.querySelector(`#music-${i}`);
        let liAudioTag = ul.querySelector(`audio.music-${i}`)
        liAudioTag.addEventListener("loadeddata",() => {
            liAudioDuration.innerHTML = calculateTime(liAudioTag.duration);
        });
    }
}
const selectedMusic = (li) =>{
    player.index =  (li.getAttribute("li-index"));
    console.log(player.index)
    displayMusic(player.getMusic());
    playMusic();
};