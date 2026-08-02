function upDate(previewPic) {
  document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
  document.getElementById('image').textContent = previewPic.alt;
}

function unDo() {
  document.getElementById('image').style.backgroundImage = "url('')";
  document.getElementById('image').textContent = "Pase el mouse (o use Tab) sobre una imagen para verla aquí.";
}

function agregarTabIndex() {
  console.log("Evento onload disparado: agregando tabindex a las imágenes");
  var imagenes = document.getElementsByClassName('preview');
  for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].setAttribute('tabindex', i + 1);
  }
}

window.onload = agregarTabIndex;