(function(module) {
  var mikeView = {};


  mikeView.navExperienceHandler = function() {
    $('.nav').on('click', '.tab', function() {
      $('.tab-content').hide();
      $('#' + $(this).data('content')).fadeIn();
      $('#' + $(this).data('content')).css({ 'margin-top': '0em' });

    });
    $('.nav .tab:first').click();
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
