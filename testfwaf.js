function hasUserMedia() { 
    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia); 
 } 
 
 if (hasUserMedia()) { 
     alert('ba;jajfa!')
    } 
 else { 
    alert("afawfjafjalkf"); 
 }

var video = document.querySelector('video');
  var canvas = window.canvas = document.querySelector('canvas')
  canvas.width = 480
  canvas.height = 360

  var button = document.querySelector('button')
  button.onclick = function () {
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)
  }

  function handleSuccess (stream) {
    window.stream = stream // make stream available to browser console
    video.srcObject = stream
  }
  function handleError (error) {
    console.log('navigator.getUserMedia error: ', error)
  }
  navigator.mediaDevices.getUserMedia({ audio: false, video: true }).then(handleSuccess).catch(handleError)
