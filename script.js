const audio = document.getElementById("audio");
const playPause = document.getElementById("play");
const previousBtn = document.getElementById("previous");
const forwardBtn = document.getElementById("forward");
const audioSource = document.getElementById("audioSource");

const songs = [
  "musica/Hoobastank The Reason [Traducida al español].mp3",
  "musica/Cigarettes After Sex - Cry (Sub. Español).mp3",
  "musica/ONCE BEGINS, TWICE BEGINS ONE IN A MILLION (1).mp3",
];

let currentSongIndex = 0;

function playSong(index) {
  audioSource.src = songs[index];
  audio.load();
  audio.play();
  playPause.querySelector(".pause-btn").classList.remove("hide");
  playPause.querySelector(".play-btn").classList.add("hide");
}

playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    playSong(currentSongIndex);
  } else {
    audio.pause();
    playPause.querySelector(".pause-btn").classList.add("hide");
    playPause.querySelector(".play-btn").classList.remove("hide");
  }
});

forwardBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  playSong(currentSongIndex);
});

previousBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  playSong(currentSongIndex);
});
