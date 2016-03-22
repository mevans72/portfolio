(function(module) {
  var mikeView = {};


  mikeView.navExperienceHandler = function() {
    $('.home').show();
  };

  mikeView.navDisplayAllHandler = function() {
    $('#profile_pic').on('dblclick', function() {
      $('*').show();
      $('.icon-menu').hide();
    });
  };

  // Calling js/jquery functions
  $(document).ready(function() {
    mikeView.navExperienceHandler();
    mikeView.navDisplayAllHandler();
  });

  module.mikeView = mikeView;
})(window);
