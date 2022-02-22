let trackImage = document.querySelector("#track-img");
let title = document.querySelector("#title");
let artist = document.querySelector("#artist");
let slider = document.querySelector("#duration-slider");
let previous = document.querySelector("#prev");
let play = document.querySelector("#pla");
let next = document.querySelector("#next");
let timer;
let autoplay=1;
let track = document.createElement("audio");
let indexNo = 0;
let playingSong = false;

let all_song = [
    {
    name:"Mudhal-Nee-Mudivum-Nee",
    path:"music/song1.mp3",
    img:"img/mudhalnee.jpg",
    artist:"Sidsriram"
    },
    {
        name:"Naan-pizhai",
        path:"music/song2.mp3",
        img:"img/Naanpizhai.jpg",
        artist:"Sidsriram"  
    },
    {
        name:"Annana-Thaalaattum",
        path:"music/song3.mp3",
        img:"img/selfie.jpg",
        artist:"Sidsriram"
    }
];
console.log(all_song)
function loadTrack(indexNo){
clearInterval(timer);
resetSlider();
track.src = all_song[indexNo].path;
title.innerHTML =all_song[indexNo].name;
trackImage.src = all_song[indexNo].img;
artist.innerHTML = all_song[indexNo].artist;
timer = setInterval(range_slider,1000);

}
loadTrack(indexNo);

function justplay(){
    if(playingSong==false){
        playsong();
    }else{
        pausesong();
    }
}

function resetSlider(){
    slider.value=0;
}

function playsong(){
    track.play();
    playingSong = true;
    play.innerHTML ='<i class="fa fa-pause"></i>';
}

function pausesong(){
    track.pause();
    playingSong = false;
    play.innerHTML ='<i class="fa fa-play"></i>';
}

function nextsong(){
    if(indexNo<all_song.length-1){
        indexNo+=1;
        loadTrack(indexNo);
        playsong();
    }else{
        indexNo = 0;
        loadTrack(indexNo);
        playsong();
    }
}

function previoussong(){
    if(indexNo>0){
        indexNo-=1;
        loadTrack(indexNo);
        playsong();
    }else{
        indexNo = all_song.length;
        loadTrack(indexNo);
        playsong();
    }
}

function changeduration(){
    slider_position = track.duration*(slider.value/100);
    track.currentTime = slider_position;
}