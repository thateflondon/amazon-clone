const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stipe")('sk_test_51IY6UlC1XM3tYf8dm54ukQBn6rtqDybh4lDADB3AON9hq6BPHvvx9cFoI4jp8tpn3IjAngCqvrKWxRxD9c6FMVht00fdVxFjUZ')

//Setting up the API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true })); //security
app.use(express.json()); //send data in json format

//API routes
app.get('/', (request, response) => response.status(200).send("hello world"));

//Listen command
exports.api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });