

$(document).ready(function () {// Toggles the open and close full nav
    $('.toggle').click(function() {
       $(this).toggleClass('active');
       $('#fullnav').toggleClass('open');
      });
      });


$(document).on('scroll', function(){  //Slides Bio into view
    $('h2').css("left", Math.max(3000 - 1.5*window.scrollY,
       100) + "px");
})
