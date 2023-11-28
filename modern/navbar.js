const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

let intervals = [];

document.querySelectorAll(".navbar p").forEach(p => {
  p.onmouseover = event => {
    let iteration = 0;

    clearInterval(intervals[p]);

    intervals[p] = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(intervals[p]);
      }

      iteration += 1 / 3;
    }, 30);
  };
});
