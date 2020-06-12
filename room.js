window.onload = function() {
    console.log(sessionStorage['id']);

    $('title').html('Room - ' + sessionStorage.id);
}

window.onbeforeunload = function() {
    return 'Are you sure you want to leave the meeting?';
};

var video = document.querySelector('#my-video');
if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            video.srcObject = stream;
        })
        .catch(function (e) {
            console.log("Something went wrong!");
      });
}