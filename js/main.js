// get current year for footer
var currentYear = new Date().getFullYear();
var yearElement = document.getElementById("year");
yearElement.innerHTML = "© 2021-" + currentYear + " [/noahrider]<br>Hosted and Created by Noah Rider";



    // checks if 'about' section is in view on main pg. if it is shown, then make it visible
window.addEventListener('scroll', function() {
    const aboutSection = document.getElementById('about');
    const position = aboutSection.getBoundingClientRect();
    if(position.top <= window.innerHeight && position.bottom >= 0) {
        aboutSection.classList.add('visible');
    } else {
        aboutSection.classList.remove('visible');
    }
});