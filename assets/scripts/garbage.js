(function(module) {

  var Mike = {};
  Mike.all = [];
  //Put misc stuff in localStorage
  Mike.loadAll = function() {
    // Mike.all = [];
    // experienceData.forEach(function(el) {
    //   Mike.all.push((el));
    // });
    // goalsData.forEach(function(el) {
    //   Mike.all.push((el));
    // });
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
  Mike.loadAll();
  // Mike.numWordsAll = function() {
  //   // Mike.loadAll();
  //   return Mike.all.map(function(projectName) {
  //     return projectName.projectDescription.match(/\b\w+/g).length;
  //   })
  //     .reduce(function(acc, cur) {
  //       return acc + cur;
  //     });
  // };
  //
  // newObject = Mike.map(function (projectName, projectDescription) {
  //     return value * value;
  // });

  Mike.allProjects = function() {
    return Mike.all.map(function(projectName) {
      console.log('The project name is: ' + projectName);
        // console.log(projectDescription);
      return Mike.projectName;
    }) // Don't forget to read the docs on map and reduce! You can reference the previous
      .reduce(function(acc, cur) {
        if (acc.indexOf(cur) < 0) acc.push(cur);
        // console.log(acc);
        // console.log(cur);
        return acc;
      }, []);
  };


  Mike.numWordsByProject = function() {
    return Mike.allProjects().map(function(projectName) {
      console.log('The projectName is: ' + projectName);
      // return Mike.allProjects();
      return {
        project: projectName,
        numWords: Mike.all.filter(function(words) {
          return words.projectName === projectName;
        })
          .map(function() {
            return Mike.projectDescription.match(/\b\w+/g).length;
          })
          .reduce(function(acc, cur) {
            return acc + cur;
          })
      };
    });
  };
  module.Mike = Mike;
})(window);
