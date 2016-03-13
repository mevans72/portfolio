var experienceArray = [];
var goalsArray = [];
var projectsArray = [];

//Experience Hanldebars Logic
function Experience (opts) {
  for (key in opts) this[key] = opts[key];
};

Experience.prototype.toHtml = function() {
  var source = $('#experience-template').html();
  var template = Handlebars.compile(source);
  return template(this);
};

experienceData.forEach(function(obj) {
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
  var source = $('#goals-template').html();
  var template = Handlebars.compile(source);
  return template(this);
};
goalsData.forEach(function(obj) {
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
  var source = $('#projects-template').html();
  var template = Handlebars.compile(source);
  return template(this);
};
projectsData.forEach(function(obj) {
  projectsArray.push(new Projects(obj));
});
projectsArray.forEach(function(obj){
  $('.test').append(obj.toHtml());
});
