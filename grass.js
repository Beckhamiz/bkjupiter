function homefunction() {
    const imgElement = document.getElementById('ly'); 

  if (imgElement.src.endsWith('hslily.jpg')) {
      imgElement.src = 'lily.png';
  } else {
      imgElement.src = 'hslily.jpg';
  }
}