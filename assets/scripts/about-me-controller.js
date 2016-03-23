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
  controller.githubProjects = function() {
    $('.tab-content').hide();
    $('#gh').show();
    repos.requestRepos(repoView.index);
  };

  module.controller = controller;
})(window);
