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
app.get('/', (req, res) => res.status(200).send({ msg: 'Hello World' }));
app.post('/payment/create', async (req, res) => {
    const total = req.query.total;
    console.log(`payment request received for total ${total}`);
    if (!total) {
        res.status(400).send({
            status: false,
            message: 'Invalid total amount passed'
        })
    }
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,  //total value must be in subunits of the currency
            currency: 'cad'
        });
        console.log(paymentIntent);
        res.status(201).send({
            status: true,
            clientSecret: paymentIntent.client_secret
        });
    } catch (err) {
        console.error(err);
        res.send({
            message: err
        })
    }
});

// Listen command
exports.api = functions.https.onRequest(app);

// Local API endpoint
// http://localhost:5001/amzon-react-clone/us-central1/api