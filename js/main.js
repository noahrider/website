// cool scroll effect
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }
  
  function clickHandler(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const offsetTop = target.offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  }
});

// Funny console text
console.log("Greetings, traveller! I see you like my code ;)")
