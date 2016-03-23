(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.get('github/users/mevans72/repos' +
            '?per_page=50' +
            '&sort=updated')
          .done(function(data, message, xhr) {
            repos.all = data;
          })
      .done(callback);
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
