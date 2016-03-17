(function(module) {
  function MikeData (opts, templateId) {
    for (key in opts) this[key] = opts[key];
    this.templateId = templateId;
  };

  MikeData.prototype.toHtml = function() {
    var template = Handlebars.compile($(this.templateId).html());
    return template(this);
  };

  function insertTemplates(data, templateId, templateLocation) {
    var array = [];
    data.forEach(function(obj) {
      // console.log(obj);
      array.push(new MikeData(obj, templateId));
    });
    array.forEach(function(obj){
      $(templateLocation).append(obj.toHtml());
    });
  }

  insertTemplates(mikeData.experienceData, '#experience-template', '.experiences');
  insertTemplates(mikeData.goalsData, '#goals-template', '.goals');
  insertTemplates(mikeData.projectsData, '#projects-template', '.projects');

  // module.MikeData = MikeData;
})(window);
