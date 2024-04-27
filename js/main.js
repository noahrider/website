// i forgor what this is for honestly
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

//  toggle between light and dark mode
function toggleTheme() {
    const body = document.body;
    const lightTheme = document.getElementById('light-theme');
    const darkTheme = document.getElementById('dark-theme');
    const themeIcon = document.getElementById('theme-icon');

    body.classList.toggle('dark-mode');
    lightTheme.toggleAttribute('disabled');
    darkTheme.toggleAttribute('disabled');

    // Toggle the theme icon between sun and moon
    themeIcon.querySelector('i').classList.toggle('fa-sun');
    themeIcon.querySelector('i').classList.toggle('fa-moon');

    // Toggle dark mode for specific elements if needed
    const aboutSection = document.getElementById("about-section");
    aboutSection.classList.toggle("dark-mode");

    // Set the theme in the cookie
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    document.cookie = `theme=${theme};expires=Fri, 31 Dec 9999 23:59:59 GMT`;
}

// funny console text
console.log("what are you doing in here? there's not much...")