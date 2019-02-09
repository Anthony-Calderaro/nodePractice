// This is the project's entry point. The "app file"
// To help with debugging, install Ayima's redirect path extension in chrome https://www.ayima.com/
const express = require('express') // import express

const app = express(); // declare an application from express

// set up handlebars from the package 'express-handlebars'
const handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.POR || 4000); // set the port at whatever the environment variable is or 4000

// Add a default path to 'localhost:4000/'. 
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/about', (req, res) => {
  res.render('about');
  
})
// Custom 404 error page - all other routes that are not error pages must come before this!
app.use((req, res, next) => { // note that errors are app.USE not app.VERB. This is how express handles middleware
  res.status(404);
  res.render('404');
});

// Custom 500 error page
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

// Start listening to the app on the port
app.listen(app.get('port'), () => { 
  console.log('Express started on http://localhost:' + app.get('port') + '; press ctrl-C to terminate');
});


