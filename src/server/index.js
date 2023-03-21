// Configure the environment variables
const dotenv = require("dotenv");
dotenv.config();

const fetch = require("node-fetch");
var path = require("path");

// Global Variables & functions
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";
const apiKey = process.env.API_KEY;
const restUrl = "&lang=auto&url=";

console.log(`Your API key is ${process.env.API_KEY}`);

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


// Summary Endpoint: make Meaning Cloud SUMMARY API call, save data to server, send back to client success message
app.post("/api", async function getMeaningData(req, resp) {
  userInput = req.body.url;
  console.log("getMeaningData: incoming request is ..", req.body);

  const getMeaningData = {
    method: "GET",
    url: "http://api.meaningcloud.com/summarization-1.0",
    params: {
      key: `${my_key}`,
      url: `${req.body.summary_url}`,
    },
    headers: {},
  };
  try {
    const data = await getMeaningData.json();
    console.log(getMeaningData, data)
    res.send(data);
  }
  catch (error) {
    console.log("error", error);
    }
  
})
