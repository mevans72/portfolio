(function(module) {
  var mikeView = {};

  mikeView.navDisplayAllHandler = function() {
    $('#profile_pic').on('dblclick', function() {
      $('*').show();
      $('.icon-menu').hide();
    });
  };

  // Calling js/jquery functions
  $(document).ready(function() {
    mikeView.navDisplayAllHandler();
  });

  module.mikeView = mikeView;
})(window);
