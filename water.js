function homefunction() {
    const imgElement = document.getElementById('ky'); 

  if (imgElement.src.endsWith('pk1.png')) {
      imgElement.src = 'k1.png';
  } else {
      imgElement.src = 'pk1.png';
  }
}