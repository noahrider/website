// it's possible to run this code on any page (not for malicious intent), read the last few lines to know how

function clearAndResetDoc(message) {
    document.body.innerHTML = `
    <style>
      body {
        background: black;
        overflow: hidden;
        position: relative;
      }
  
      #sushi {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none; /* Prevents clicks on raindrops */
      }
  
      .rain-drop {
        position: absolute;
        top: 0;
        width: 1rem;
        writing-mode: vertical-lr;
        text-orientation: upright;
        white-space: nowrap;
        background: linear-gradient(transparent 10%, #008F11 50%, #00FF41 96%, white 3rem);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: drop-shadow(1px 1px 1px #008F11);
        font-weight: bold;
        opacity: 1;
        transition: 1s ease-out;
      }
  
      .fade-out {
        opacity: 0;
      }
  
      #message {
        display: none;
        font-family: 'ubuntu mono', monospace;
        position: fixed;
        left: 5%;
        top: 10%;
        font-size: 10rem;
        color: limegreen;
        text-shadow: 1px 1px 5px chartreuse;
        font-weight: normal;
      }
    </style>
    <div id="sushi"></div>
    <h1 id="message">${message}</h1>`;
  }
  
  function makeItRain(timeDelayToStart = (10 * 1000), timeDelayReveal = (10 * 1000), message = 'Happy April Fools :)', clearDoc = false) {
    const characters = `日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝ0123456789ZNOAHRIDER"'=:.+<>|_ç`;
    const length = 100;
  
    function makeLine() {
      const snippet = document.createElement('div');
      snippet.className = 'rain-drop';
      snippet.style.left = `${Math.round(Math.random() * 99)}%`;
      document.querySelector('#sushi').appendChild(snippet);
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
  
      setTimeout(() => {
        document.querySelector('#message').style.display = 'inherit';
      }, timeDelayReveal);
    }
  
    if (clearDoc) setTimeout(() => { clearAndResetDoc(message) }, timeDelayToStart);
    setTimeout(startRain, timeDelayToStart + 100);
  }
  
  makeItRain(0, 10 * 1000); // delete this line to use all the code in the console


  
  // goToHomePage function (return to home, outside of arena)
  function goToHomePage() {
    window.location.href = '../index.html';
  }

  // sendFeedback function
  function sendFeedback() {
    window.open('mailto:arena@noahrider.com?subject=[ARENA] Feedback', '_blank');
  }
