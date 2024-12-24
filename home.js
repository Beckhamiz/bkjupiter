function homefunction() {
    const imgElement = document.getElementById('bzkimg'); 

  if (imgElement.src.endsWith('fire.png')) {
      imgElement.src = 'blaziken.png';
  } else {
      imgElement.src = 'fire.png';
  }
}