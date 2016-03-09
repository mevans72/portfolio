// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var mikeView = {};

mikeView.navExperienceHandler = function() {
  $('.nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
    $('#' + $(this).data('content')).css({ 'margin-top': '5em' });

  });
  $('.nav .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
};

mikeView.navDisplayAllHandler = function() {
  $('#profile_pic').on('dblclick', function() {
    $('*').show();
  });
};

$(document).ready(function() {
  mikeView.navExperienceHandler();
  mikeView.navDisplayAllHandler();
});
