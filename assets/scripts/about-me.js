// var experiences = [];
//
// function Mike (opts) {
//   this.category = opts.category;
//   this.experience = opts.experience;
//   this.goals = opts.goals;
// }

//Adding functionality for a couple form  features to add things to the various section(s)
$(document).ready(function() {
  $('#button').click(function() {
    var toAdd = $('input[name=visitedListItem]').val();
    $('.visitedList').append($('<div class="item">' + toAdd + '</div>'));
  });
  $(document).on('click', '.item', function() {
    $(this).remove();
  });
});

$(document).ready(function() {
  $('#buttonTwo').click(function() {
    var toAdd = $('input[name=toVisitListItem]').val();
    $('.toVisitList').append($('<div class="item">' + toAdd + '</div>'));
  });
  $(document).on('click', '.item', function() {
    $(this).remove();
  });
});

// Mike.prototype.toHtml = function() {
//   var $newMike = $('ul').html();
//   $('ul').append('<li>' + this.experience + '</li>');
//   return $newMike;
// };
//
// rawData.forEach(function(ele) {
//   experiences.push(new Mike(ele));
// });
//
// experiences.forEach(function(a){
//   $('#experiences').append(a.toHtml());
// });


//New code leveraging Handlebars...
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
