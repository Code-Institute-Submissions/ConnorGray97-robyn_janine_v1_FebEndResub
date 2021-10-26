

$(document).ready(function () { // Toggles the open and close full nav
    $('.toggle').click(function() {
       $(this).toggleClass('active');
       $('#fullnav').toggleClass('open');
      });
      });



// Slides h2 into hompage according to screen size

$(document).on('scroll', function() {
        if($(window).width() < 767)
    {
        $('h2').css("left", Math.max(3000 - 3*window.scrollY, 100) + "px");
    } else if ($(window).width() > 767) {
        $('h2').css("left", Math.max(3000 - 1*window.scrollY, 100) + "px");
    }
    
})
    

