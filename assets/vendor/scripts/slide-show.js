$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut()
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);
