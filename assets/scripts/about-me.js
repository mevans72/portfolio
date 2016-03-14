var Mike = {};
Mike.all = [];

Mike.loadAll = function(rawData) {
//   rawData.sort(function(a,b) {
//     return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
//   });

  rawData.forEach(function(ele) {
    Mike.all.push(new Mike(ele));
  });
};

Mike.fetchAll = function() {
  var storedEtag;
  $.ajax({
    type: 'HEAD',
    url: 'portfolio/assets/scripts/about-me-data.js',
    success: function(data, message, xhr) {
      storedEtag = xhr.getResponseHeader('etag');
      localStorage.setItem('etag', storedEtag);
      if (storedEtag === localStorage.etag && localStorage.rawData) {
        Mike.loadAll(localStorage.rawData);
        // articleView.initIndexPage();
      } else {
        $.getJSON('portfolio/assets/scripts/about-me-data.js', function(rawData) {
          console.log(rawData);
          Mike.loadAll(rawData);
          localStorage.setItem('rawData', JSON.stringify(rawData));
          // articleView.initIndexPage();
        });
      }
    }
  });

};
Mike.fetchAll();
