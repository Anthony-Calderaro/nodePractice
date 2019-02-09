// This is the project's entry point. The "app file"
const express = require('express') // import express

const app = express(); // declare an application from express

app.set('port', process.env.POR || 4000); // set the port at whatever the environment variable is or 4000

// Custom 404 error page
app.use((req, res) => { 
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


