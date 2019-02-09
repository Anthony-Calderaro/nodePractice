// This is the project's entry point. The "app file"
// To help with debugging, install Ayima's redirect path extension in chrome https://www.ayima.com/
const express = require('express') // import express

const app = express(); // declare an application from express

app.set('port', process.env.POR || 4000); // set the port at whatever the environment variable is or 4000

// Add a default path to 'localhost:4000/'. 
app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Meadowlark Travel');
})

app.get('/about', (req, res) => {
  res.type('text/plain');
  res.send('About Meadowlark Travel');
  
})
// Custom 404 error page - all other routes that are not error pages must come before this!
app.use((req, res) => { // note that errors are app.USE not app.VERB. This is how express handles middleware
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

// Custom 500 error page
app.use((req, res) => {
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
});

// Start listening to the app on the port
app.listen(app.get('port'), () => { 
  console.log('Express started on http://localhost:' + app.get('port') + '; press ctrl-C to terminate');
});


