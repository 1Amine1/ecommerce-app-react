const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')
(`sk_test_4n8ur8YaPXuombRgtryqb1DA00via4PGSt`)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// Initialize app
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// Set API routes
app.get('/', (req, res) => res.status(200).send('Hello World'));

// Listen command
exports.api = functions.https.onRequest(app);