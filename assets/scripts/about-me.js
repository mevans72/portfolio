var experienceArray = [];
var GoalsArray = [];

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

function Goals (opts) {
  for (key in opts) this[key] = opts[key];
};

Goals.prototype.toHtml = function() {
  var source = $('#goals-template').html();
  var template = Handlebars.compile(source);
  return template(this);
};

goalsData.forEach(function(obj) {
  GoalsArray.push(new Goals(obj));
});

GoalsArray.forEach(function(obj){
  $('.goals').append(obj.toHtml());
});
