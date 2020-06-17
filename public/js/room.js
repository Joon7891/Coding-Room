const id = sessionStorage['id'];
const name = sessionStorage['name'];

const chat = document.getElementById('chat'); 

window.onload = function() {
    $('title').html(`Room - ID:${sessionStorage['id']}`);
}

const socket = io();
socket.emit('join-room', { id, name });

socket.on('message', msg => {
    const div = document.createElement('div'); 
    div.classList.add('chat-body', 'clearfix');
    div.innerHTML = `
    <div class="header">
    <strong class="primary-font">${msg.author}</strong> <small class="pull-left text-muted"><span class="glyphicon glyphicon-time"></span>${msg.time}</small>
    </div>
    <p>${msg.text}</p>
    `

    chat.append(div);
    chat.scrollTop = chat.scrollHeight;
});

document.getElementById('chat-button').addEventListener('click', () => {
    const text = document.getElementById('chat-text').value;
    if (text.length == 0) return;

    socket.emit('message', { id, author: name, text });
    document.getElementById('chat-text').value = '';
    document.getElementById('chat-text').focus();
});

// Setting up video streaming.
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

// Stops video.
function stop_video(e){
    var stream = video.srcObject;
    var tracks = stream.getTracks();

    for (let i = 0; i < tracks.length; i++) {
        tracks[i].stop();
    }

    video.srcObject = null;
}

function video_button(){
    if (isVideoOn){
        stop_video();
        isVideoOn = false;
        $('#option-video').html('<i class="fas fa-video-slash"></i>');
    }
    else {
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function (stream) {
                    video.srcObject = stream;
                    isVideoOn = true;

                    $('#option-video').html('<i class="fas fa-video"></i>');
                    isVideoOn = true;
                })
                .catch(function (e) {
                    console.log("Something went wrong!");
              });
        }
    }
}

let isAudioOn = true;
function audio_button() {
    if (isAudioOn) {
        $('#option-audio').html('<i class="fas fa-microphone-slash"></i>');
    }
    else {
        $('#option-audio').html('<i class="fas fa-microphone"></i>');
    }

    isAudioOn = !isAudioOn;
}

let isOutputOn = true;
function deafen_button() {
    if (isOutputOn) {
        $('#option-deafen').html('<i class="fas fa-volume-mute"></i>');
        document.querySelectorAll('video', 'audio').forEach(media => {
            media.muted = true;
        });
    }
    else {
        $('#option-deafen').html('<i class="fas fa-volume-up"></i>');
        document.querySelectorAll('video', 'audio').forEach(media => {
            media.muted = false;
        });
    }

    isOutputOn = !isOutputOn;
}

function exit_button(){
    window.location.replace("main.html");
}