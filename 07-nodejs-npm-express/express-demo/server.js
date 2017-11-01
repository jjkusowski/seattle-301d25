'use strict';

// Load the express library from node_modules
const express = require('express');

// Instantiate express so we can use its functionality
const app = express();

// Designate a port to serve our app on
// "process" is in the Node environment, use a port if it is set up, or set your own
const PORT = process.env.PORT || 3000;

// Tell the server which directory to serve files from
app.use(express.static('./public'));

// Set up a route to send a message
app.get('/sam', function(request, response){
  console.log('This will show up in Node');
  response.send('<h1>This will show up in the browser</h1>');
})

// Set up a route to send a file
app.get('/demi', function(req, res){
  res.sendFile('demi.html', {root: './public'});
  //Below is same as above.
  // res.sendFile('/public/demi.html', {root: '.'});
})

// Can we perform other methods on the same route?
// app.post('/demi', callback)

// Start the app so it listens for changes
app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);
})
