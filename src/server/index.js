// Configure the environment variables
const dotenv = require("dotenv");
dotenv.config();

const fetch = require("node-fetch");
var path = require("path");

// Global Variables & functions
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";
const apiKey = process.env.API_KEY

console.log(`Your API key is ${process.env.API_KEY}`);

// Setup empty JS object to act as endpoint for SUMMARY route
serverData = {};

// Setup empty JS object to act as endpoint for SENTIMENT route
getMeaningData = {};

// Require Express for server and routes
const express = require('express');
const app = express();

// Middleware
const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Server
const port = 8080;
const server = app.listen(process.env.PORT || port, listening);

function listening() {
  console.log("Yay! The server is running!");
  console.log(`Running on localhost: ${port}`);
}

// Get
app.get("/", function (req, res) {
  res.sendFile(path.resolve("src/client/views/index.html"));
});

// Route APIKEY
app.get('/apikey', function (req, res) {
    res.send(API_KEY)
  })

// Summary Endpoint: make Meaning Cloud SUMMARY API call, save data to server, send back to client success message
app.post("/checkURL", async function getMeaningData(req, resp) {
  userInput = req.body.url;
  console.log("getMeaningData: incoming request is ..", req.body);

  const response = await fetch(getMeaningData)
  const data = await response.json()
  console.log(data)

})

app.get("/analysis", (req, res) => {
  res.send({ serverData });
});