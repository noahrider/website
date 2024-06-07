// cool scroll effect
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('nav a[href^="#"]');
  
  for (const link of links) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);
      const offset = 40; // Adjust this value as needed
      const offsetTop = target.offsetTop - offset;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    });
  }
});


// Funny console text
console.log("Greetings, traveller! I see you like my code ;)")

function makeItRainFooter() {
  const characters = `日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝ0123456789ZNOAHRIDER"'=:.+<>|_ç`;
  const length = 100;

  function makeLine() {
    const snippet = document.createElement('div');
    snippet.className = 'rain-drop';
    snippet.style.left = `${Math.round(Math.random() * 99)}%`;
    document.querySelector('#footer').appendChild(snippet);
    let counter = 0;
    var i = setInterval(() => {
      snippet.innerHTML += characters[Math.round(Math.random() * (characters.length - 1))];
      counter++;
      if (counter > (length * .90)) {
        snippet.classList.add('fade-out');
      }
      if (counter > length) {
        clearInterval(i);
        snippet.remove();
      }
    }, 100);
  }

  function startRain() {
    makeLine();
    makeLine();
    makeLine();
    makeLine();
    makeLine();

    setInterval(() => {
      makeLine();
    }, 100);
  }

  startRain();
}

makeItRainFooter();
