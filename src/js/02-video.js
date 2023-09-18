import throttle from "lodash.throttle";
import Player from "@vimeo/player";


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


let savedTime = localStorage.getItem('videoplayer-current-time');
console.log(stopTime);


    if (savedTime != null) {
  player.setCurrentTime(savedTime);
    }

function timeSaver() {
player.getCurrentTime().then(function (seconds) {
localStorage.setItem('videoplayer-current-time', seconds);
    });
player.on('timeupdate', throttle(timeSaver, 1000));


