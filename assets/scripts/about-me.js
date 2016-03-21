(function(module) {
  function MikeData (opts, templateId) {
    for (key in opts) this[key] = opts[key];
    this.templateId = templateId;
  };

  MikeData.prototype.toHtml = function() {
    var template = Handlebars.compile($(this.templateId).html());
    return template(this);
  };


  //*************//
  //right now your insertTemplates function is a private function that can't be used by other objects,
  //if you want to exposure this function to other object, use MikeData.prototype.insertTemplates;
  //*************//
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

  $.getJSON('/assets/scripts/about-me-data.json', function(data) {
    insertTemplates(data.experienceData, '#experience-template', '.experiences');
    insertTemplates(data.goalsData, '#goals-template', '.goals');
    insertTemplates(data.projectsData, '#projects-template', '.projects');
  });

})(window);
