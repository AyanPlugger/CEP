$(document).on("click","#camera",function(){
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      correcOrientation: true,
      saveToPhotoAlbum: true });

  function onSuccess(imageURI) {
      var image = document.getElementById('imagem');
      image.src = imageURI;
      
  }

  function onFail(message) {
      alert('Failed: ' + message);
  }
});