function homefunction() {
    const imgElement = document.getElementById('gr'); 

  if (imgElement.src.endsWith('mgr.jpg')) {
      imgElement.src = 'gr.png';
  } else {
      imgElement.src = 'mgr.jpg';
  }
}