// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});




let newObject = {}

app.get("/api/timestamp/:input", (req,res) => {
  
  let input = req.params.input

  
// Test for date string format

  if (!input.match(/\d{5,}/)) {
    newObject['unix'] = new Date(input).getTime()
    newObject['utc'] = new Date(input).toUTCString()
  } else {
    // unix key to UTC timestamp
    input = parseInt(input)

    newObject['unix'] = new Date(input).getTime() 
    newObject['utc'] = new Date(input).toUTCString()
  }
  // Input Error Handling
  if (!newObject['unix'] || !newObject['utc']) {
    res.json({error: "Invalid Date"})
  }
  res.json(newObject)
  
})

app.get("/api/timestamp/", (req,res) => {
  newObject['unix'] = new Date().getTime() 
  newObject['utc'] = new Date().toUTCString()
  
  res.json(newObject)
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});