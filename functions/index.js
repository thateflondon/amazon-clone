const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IY6UlC1XM3tYf8dm54ukQBn6rtqDybh4lDADB3AON9hq6BPHvvx9cFoI4jp8tpn3IjAngCqvrKWxRxD9c6FMVht00fdVxFjUZ"
);

//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount >>>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //submits of the currency
    currency: "usd",
  });

  //If ok, created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//an other example of endpoint
//app.get('/gamechallenger', (request, response) => response.status(200).send('Dream are made to be chase...'));

//Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint (the API is running !)
//http://localhost:5001/clone-71182/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
