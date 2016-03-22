// DONE: Configure our two routes for this app with page.js, by registering each URL your app can handle,
// linked to a a single controller function to handle it:

// page('/home', aboutMeController.index);
page('/', controller.home);
page('/about', controller.about);
page('/life', controller.life);
page('/projects', controller.projects);

// page('/admin', Article.fetchAll(adminController.index));

// DONE: What function do we call to activate page.js? Fire it off now, to execute
page();
