import express from 'express';
import Stripe from 'stripe';

const app = express();
const port = 3000;
const PUBLIC_KEY =
  'pk_test_51JcVQFGekqenOkRviYiKnassRnDxt37pKYWvtKDYOu5J3XRDAJpfJSSjQK8kYEaevtGjivnSEu859lDXPbpsv4ry00QraQqcU9';
const PRIVATE_KEY =
  '';

const stripe = new Stripe(PRIVATE_KEY, { apiVersion: '2020-08-27' });

app.post('/create-payment', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000,
      currency: 'usd',
      payment_method_types: ['card'],
    });
    const clientSecret = paymentIntent.client_secret;

    res.json({
      clientSecret,
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`server is ready on port ${port}`);
});
