$(document).ready(function() {
    if(localStorage.getItem('popState') != 'shown'){
        $("#popup").delay(2000).fadeIn();
        localStorage.setItem('popState','shown')
    }

    $('#popup-close').click(function(e) // You are clicking the close button
    {
    $('#popup').fadeOut(); // Now the pop up is hiden.
    });
    $('#popup').click(function(e) 
    {
    $('#popup').fadeOut(); 
    });
});