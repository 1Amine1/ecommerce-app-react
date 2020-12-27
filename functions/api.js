export function createCharge (req, res) {
    const total = req.query.total;
    console.log(`payment request received for total ${total}`);
    if (!total) {
        res.status(400).send({
            status: false,
            message: 'Invalid total amount passed'
        })
    }
    try {
        const paymentIntent = stripe.paymentIntents.create({
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
}