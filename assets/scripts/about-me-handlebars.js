(function(module) {
  //REVIEW: It may be best to add combine these three seperate arrays in some manner.
  var experienceArray = [];
  var goalsArray = [];
  var projectsArray = [];

  //REVIEW: It may be best to add combine these three seperate Handlebars activities (i.e., the functions below for Experience, Goals, and Projects) in some manner.

// 1 - Have a single constructor function, Mike, that acts as a template...?
// 2 -

  // function Mike (opts) {
  //   // console.log('Mike opts is: ' + opts);
  //   $.getJSON('about-me-data.json').forEach(function(obj) {
  //     this.push(new Mike(obj));
  //   });
  // };

  function MikeData (opts, templateId, data) {
    for (key in opts) this[key] = opts[key];
    this.templateId = templateId;

  };

  function insertTemplates(data, constructor, templateLocation) {
    var array = [];
    data.forEach(function(obj) {
      // console.log(obj);
      array.push(new constructor(obj));
    });
    array.forEach(function(obj){
      $(templateLocation).append(obj.toHtml());
    });
  }

  MikeData.prototype.toHtml = function() {
    var template = Handlebars.compile($(this.templateId).html());
    return template(this);
  };


  //Experience Hanldebars Logic
  function Experience (opts) {
    // console.log(opts);
    for (key in opts) this[key] = opts[key];
  };
  Experience.prototype.toHtml = function() {
    // console.log(this);
    var template = Handlebars.compile($('#experience-template').html());
    return template(this);
  };
  mikeData.experienceData.forEach(function(obj) {
    // console.log(obj);
    experienceArray.push(new Experience(obj));
  });
  experienceArray.forEach(function(obj){
    $('.experiences').append(obj.toHtml());
  });

  //Goals Hanldebars Logic
  function Goals (opts) {
    for (key in opts) this[key] = opts[key];
  };
  Goals.prototype.toHtml = function() {
    var template = Handlebars.compile($('#goals-template').html());
    return template(this);
  };
  mikeData.goalsData.forEach(function(obj) {
    goalsArray.push(new Goals(obj));
  });
  goalsArray.forEach(function(obj){
    $('.goals').append(obj.toHtml());
  });

  //Projects Hanldebars Logic
  function Projects (opts) {
    for (key in opts) this[key] = opts[key];
  };
  Projects.prototype.toHtml = function() {
    var template = Handlebars.compile($('#projects-template').html());
    return template(this);
  };
  mikeData.projectsData.forEach(function(obj) {
    projectsArray.push(new Projects(obj));
  });
  projectsArray.forEach(function(obj){
    $('.test').append(obj.toHtml());
  });

  //REVIEW: It may be best to add combine these three seperate Handlebars activities (i.e., the exposing Experience, Goals, and Projects below to the module) in some manner.

  module.Experience = Experience;
  module.Goals = Goals;
  module.Projects = Projects;
})(window);
