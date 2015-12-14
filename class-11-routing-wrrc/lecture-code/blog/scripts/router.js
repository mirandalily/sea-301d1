
page('/', articlesController.index);

page('/index', articlesController.index);

page('/about', function() {
  $('#about').show();
  $('#spinner').hide();
  $('#articles').hide();
});

page.start();
