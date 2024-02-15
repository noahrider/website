const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA', 'Enter'];
let currentIndex = 0;

function handleKeyPress(event) {
  if (event.code === konamiCode[currentIndex]) {
    currentIndex++;
    
    if (currentIndex === konamiCode.length) {
      // redirect to another page when the Konami code is completed
      window.location.href = 'index2.html';
      currentIndex = 0; // reset the index for next sequence
    }
  } else {
    currentIndex = 0; // reset if a wrong key is pressed
  }
}

document.addEventListener('keydown', handleKeyPress);
