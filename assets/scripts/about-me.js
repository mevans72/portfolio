var experiences = [];

function Mike (opts) {
  this.category = opts.category;
  this.experience = opts.experience;
  this.goals = opts.goals;
}

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

Mike.prototype.toHtml = function() {
  var $newMike = $('ul').html();
  $('ul').append('<li>' + this.experience + '</li>');
  return $newMike;
};

rawData.forEach(function(ele) {
  experiences.push(new Mike(ele));
});

experiences.forEach(function(a){
  $('#experiences').append(a.toHtml());
});
