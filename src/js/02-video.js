import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = localStorage.getItem("videoplayer-current-time")


player.on("timeupdate", throttle(onPlay, 1000));

function onPlay(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
}
   

player.setCurrentTime(currentTime).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
        default:
            // some other error occurred
            break;
    }
});






