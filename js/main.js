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

    body.classList.toggle('dark-mode');
    lightTheme.toggleAttribute('disabled');
    darkTheme.toggleAttribute('disabled');

    function toggleDarkMode() {
        var aboutSection = document.getElementById("about-section");
        aboutSection.classList.toggle("dark-mode");
    }

    // cookie stuff
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    document.cookie = `theme=${theme};expires=Fri, 31 Dec 9999 23:59:59 GMT`;
}

window.onload = function () {
    const theme = getCookie('theme');
    if (theme === 'dark') {
        toggleTheme();
    }
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Function to set a cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Function to get the value of a cookie
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const cookiePopup = document.getElementById('cookie-popup');
const acceptCookiesBtn = document.getElementById('accept-cookies');
const rejectCookiesBtn = document.getElementById('reject-cookies');

// Show the cookie consent popup if the user has not made a decision yet
if (!getCookie('cookie_consent')) {
    cookiePopup.style.display = 'block';
}

// Handle accept cookies button click
acceptCookiesBtn.addEventListener('click', function () {
    setCookie('cookie_consent', 'accepted', 365); // Set cookie consent for 1 year
    cookiePopup.style.display = 'none';
});

// Handle reject cookies button click
rejectCookiesBtn.addEventListener('click', function () {
    setCookie('cookie_consent', 'rejected', 365); // Set cookie consent for 1 year
    cookiePopup.style.display = 'none';
});