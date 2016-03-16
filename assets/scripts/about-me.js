var Mike = {};
Mike.all = [];
//Put misc stuff in localStorage
Mike.loadAll = function() {
  Mike.all = [];
  experienceData.forEach(function(el) {
    Mike.all.push((el));
  });
  goalsData.forEach(function(el) {
    Mike.all.push((el));
  });
  projectsData.forEach(function(el) {
    Mike.all.push((el));
  });

};
//Check for and/or set both localStorage and/or eTag
Mike.fetchAll = function() {
  var rawData;
  var storedEtag;

  $.ajax({
    type: 'HEAD',
    url: 'assets/scripts/about-me-project-data.json',
    success: function(data, message, xhr) {
      storedEtag = xhr.getResponseHeader('etag');
    }
  });
  if (localStorage.etag && localStorage.rawData) {
    console.log('Both keys already exist in local storage');
  // } else if (storedEtag !== localStorage.etag && localStorage.rawData) {
  //   localStorage.setItem('etag', storedEtag);
  //   console.log('Had to set etag in local storage...');
  // } else if (storedEtag === localStorage.etag && !localStorage.rawData) {
  //   Mike.loadAll();
  //   var stringifiedMikeAll = JSON.stringify(Mike.all);
  //   console.log('Had to set rawData in local storage...');
  //   localStorage.setItem('rawData', stringifiedMikeAll);
  } else {
    Mike.loadAll();
    var stringifiedMikeAll = JSON.stringify(Mike.all);
    console.log(stringifiedMikeAll);
    localStorage.setItem('rawData', stringifiedMikeAll);
    $.ajax({
      type: 'HEAD',
      url: 'assets/scripts/about-me-project-data.json',
      success: function(data, message, xhr) {
        storedEtag = xhr.getResponseHeader('etag');
        localStorage.setItem('etag', storedEtag);
      }
    });
  };
};
//Run fetchAll
Mike.fetchAll();

Mike.numWordsAll = function() {
  return Mike.all.map(function(project) {
    return project.projectDescription.match(/\b\w+/g).length;
  })
    // return article.body; // Grab the words from the `article` `body`.
    .reduce(function(acc, cur) {
      return acc + cur; // Sum up all the values!
    });
};
