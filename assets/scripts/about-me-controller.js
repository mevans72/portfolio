(function(module) {
  var controller = {};

  controller.home = function() {
    $('.tab-content').hide();
    $('#home').show();
  };
  controller.about = function() {
    $('.tab-content').hide();
    $('#about').show();
  };
  controller.life = function() {
    $('.tab-content').hide();
    $('#life').show();
  };
  controller.projects = function() {
    $('.tab-content').hide();
    $('#projects').show();
  };

  module.controller = controller;
})(window);
