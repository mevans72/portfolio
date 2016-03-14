var mikeView = {};

mikeView.navExperienceHandler = function() {
  $('.nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
    $('#' + $(this).data('content')).css({ 'margin-top': '0em' });

  });
  $('.nav .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
};

mikeView.navDisplayAllHandler = function() {
  $('#profile_pic').on('dblclick', function() {
    $('*').show();
  });
};



//In progress or testing code below

// $('#profile_pic').hover(function(){
//   $('body').css('background-color', 'yellow');
// }, function(){
//   $('body').css('background-color', 'pink');
// });

// $('#profile_pic').toggle(function() {
//   $('body').css('background-color', 'yellow');
// }, function() {
//   $('body').css('background-color', 'pink');
// });

// mikeView.navMobileMenuHoverHandler = function() {
//   if($(window).width() <= 480) {
//     $('profile_pic').toggle(function() {
//       $('body').css('background-color', 'yellow');
//     }, function() {
//       $('body').css('background-color', 'pink');
//     });
//   };
// };

// mikeView.navMobileMenuHoverHandler = function() {
//   $('.nav').on('click', '.tab', function() {
//     $('.tab-content').hide();
//     $('#' + $(this).data('content')).fadeIn();
//     $('#' + $(this).data('content')).css({ 'margin-top': '0em' });
//
//   });
//   $('.nav .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
// };


mikeView.navMobileMenuHoverHandler = function() {
  if($(window).width() <= 480) {
    $(document).on('mouseenter mouseleave', 'nav', function(){
      $('nav ol').css('visibility', 'visible');
      $('nav').css('height', '12em');
      $('body').css('background-color', 'blue');
    }, function(){
      $(document).on('mouseleave', 'nav', function(){
      // $('nav ol').css('visibility', 'hidden');
        $('nav').css('height', '4em');
        $('body').css('background-color', 'pink');//Seems to work...
      });
    });
  }
};

mikeView.navDesktopMenuHoverHandler = function() {
  if($(window).width() >= 480) {
    $('nav').on('mouseenter', 'nav', function(){
      $('nav ol').css('visibility', 'visible');
      $('nav').css('height', '4em');
      $('body').css('background-color', 'yellow');
    });
  };
};


// if($(window).width() <= 480) {
//   $('nav').hover(function(){
//     $('nav ol').css('visibility', 'visible');
//     $('nav').css('height', '12em');
//   }, function(){
//     $('nav ol').css('visibility', 'hidden');
//     $('nav').css('height', '4em');
//   });
// };
//
// if($(window).width() >= 480) {
//   $('nav').hover(function(){
//     $('nav ol').css('visibility', 'visible');
//     $('nav').css('height', '4em');
//   });
// };


//End of test code
// Calling js/jquery functions
$(document).ready(function() {
  mikeView.navExperienceHandler();
  mikeView.navDisplayAllHandler();
  mikeView.navMobileMenuHoverHandler();
  mikeView.navDesktopMenuHoverHandler();
});
