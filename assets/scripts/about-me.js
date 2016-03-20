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
      // console.log(obj);
      array.push(new MikeData(obj, templateId));
    });
    array.forEach(function(obj) {
      $(templateLocation).append(obj.toHtml());
    });
  };

  MikeData.loadAboutMeData = function() {
    $.getJSON('/assets/scripts/about-me-data.json', function(data) {
      MikeData.insertTemplates(data.experienceData, '#experience-template', '.experiences');
      MikeData.insertTemplates(data.goalsData, '#goals-template', '.goals');
      MikeData.insertTemplates(data.projectsData, '#projects-template', '.projects');
    });
  };

  MikeData.localData = function() {
    var etag;
    console.log('etag before set: ' + etag);
    $.ajax({
      type: 'HEAD',
      url: 'assets/scripts/about-me-data.json',
      success: function(data, message, xhr) {
        etag = xhr.getResponseHeader('etag');
        console.log('etag after set: ' + etag);

        if (!localStorage.etag || localStorage.etag !== etag) {
          console.log('etag first IF: ' + etag);
          localStorage.etag = etag;
        }
        if (!localStorage.rawData || localStorage.etag !== etag) {
          $.getJSON('assets/scripts/about-me-data.json', function(rawData) {
            localStorage.rawData = JSON.stringify(rawData);
            console.log('rawData second IF: ' + rawData);
          });
        }
      }
    });
    MikeData.loadAboutMeData();
  };

  $(document).ready(function() {
    MikeData.localData();
  });

  module.MikeData = MikeData;
})(window);
