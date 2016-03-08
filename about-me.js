var experiences = [];

function Mike (opts) {
  this.category = opts.category;
  this.experience = opts.experience;
  this.goals = opts.goals;
}


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


//class code below

Mike.prototype.toHtml = function() {
  var $newMike = $('experience.template').clone();

  $newMike.attr('data-category', this.category);

  $newMike.find('li').append($('<li>' + this.experience + '</li>'));
  $newMike.find('.experiences').html(this.experience);

  $newMike.removeClass('template');

  return $newMike;
};

rawData.forEach(function(ele) {
  experiences.push(new Mike(ele));
});

experiences.forEach(function(a){
  $('#experiences').append(a.toHtml());
});
