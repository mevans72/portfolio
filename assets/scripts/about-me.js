(function(module) {
  function MikeData(opts, templateId) {
    for (key in opts) this[key] = opts[key];
    this.templateId = templateId;
  };

  MikeData.prototype.toHtml = function() {
    var template = Handlebars.compile($(this.templateId).html());
    return template(this);
  };

  MikeData.insertTemplates = function(data, templateId, templateLocation) {
    var array = [];
    data.forEach(function(obj) {
      array.push(new MikeData(obj, templateId));
    });
    array.forEach(function(obj) {
      $(templateLocation).append(obj.toHtml());
    });
  };

  MikeData.loadAboutMeData = function() {
    var rawData = JSON.parse(localStorage.rawData);
    if ($('ul.experiences li').length < 3) {
      MikeData.insertTemplates(rawData.experienceData, '#experience-template', '.experiences');
      MikeData.insertTemplates(rawData.goalsData, '#goals-template', '.goals');
      // MikeData.insertTemplates(rawData.projectsData, '#projects-template', '.projects');
    }
  };

  MikeData.localData = function(context, next) {
    var etag;
    $.ajax({
      type: 'HEAD',
      url: 'assets/data/about-me-data.json',
      success: function(data, message, xhr) {
        etag = xhr.getResponseHeader('etag');
        if(localStorage.rawData && localStorage.etag === etag) {
          MikeData.loadAboutMeData();
        }
        if (!localStorage.etag || localStorage.etag !== etag) {
          localStorage.etag = etag;
        }
        if (!localStorage.rawData || localStorage.etag !== etag) {
          $.getJSON('assets/data/about-me-data.json', function(rawData) {
            localStorage.rawData = JSON.stringify(rawData);
            MikeData.loadAboutMeData();
          });
        }
        next();
      }
    });
  };

  module.MikeData = MikeData;
})(window);
