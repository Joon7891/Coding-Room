window.onload = function() {
    $('title').html('Room - ' + sessionStorage.id);
}

/*
window.onbeforeunload = function() {
    return 'Are you sure you want to leave the meeting?';
};
*/

var isVideoOn = false;
var video = document.querySelector('#my-video');
if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            video.srcObject = stream;
            isVideoOn = true;
        })
        .catch(function (e) {
            console.log("Something went wrong!");
      });
}

function stop_video(e){
    var stream = video.srcObject;
    var tracks = stream.getTracks();

    for (let i = 0; i < tracks.length; i++) {
        tracks[i].stop();
    }

    video.srcObject = null;
}

function op_video(){
    if (isVideoOn){
        stop_video();
        isVideoOn = false;
        $('#option-video').html('<i class="fas fa-video-slash"></i>');
    }
    else {
        $('#option-video').html('<i class="fas fa-video"></i>');
        isVideoOn = true;
    }
}

var isAudioOn = true;

function op_audio(){
    if (isAudioOn){
        // Turn off audio
        isAudioOn = false;
        $('#option-audio').html('<i class="fas fa-microphone-slash"></i>');
    }
    else {
        // Turn on audio
        isAudioOn = true;
        $('#option-audio').html('<i class="fas fa-microphone"></i>');
    }
}

var isOutputOn = true;

function op_deafen(){
    if (isOutputOn){
        isOutputOn = false;
        $('#option-deafen').html('<i class="fas fa-volume-mute"></i>');
    }
    else {
        isOutputOn = true;
        $('#option-deafen').html('<i class="fas fa-volume-up"></i>');
    }
}

function op_exit(){
    window.location.replace("main.html");
}