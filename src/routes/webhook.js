import bodyParser from "../middlewares/bodyParser";
import delivery from "../controllers/delivery"

export default app => {
  app.post('/webhook', bodyParser.json, asyncRoute(async (req, res) => {
    let event;

    try {
      event = JSON.parse(req.body);
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;

      //  await asyncRoute(delivery.placeOrder(req, res));

        // Then define and call a method to handle the successful payment intent.
        // handlePaymentIntentSucceeded(paymentIntent);
        break;
      case 'payment_method.attached':
        const paymentMethod = event.data.object;
        // Then define and call a method to handle the successful attachment of a PaymentMethod.
        // handlePaymentMethodAttached(paymentMethod);
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Return a response to acknowledge receipt of the event
    res.json({received: true});
  }));
}