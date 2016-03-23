(function(module) {
  var repoView = {};

  var ui = function() {
    var $gh = $('#gh');
    $gh.find('#gh ul').empty();
  };

  var render = Handlebars.compile($('#repo-template').text());

  repoView.index = function() {
    ui();
    $('#gh ul').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
