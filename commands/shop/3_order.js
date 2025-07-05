// commands/shop/3_order.js

// Import the config file. The '../../' goes up two directories to find it.
const config = require('../../config.js');

module.exports.config = {
    name: "place an order",
    aliases: ["3", "order"],
    description: "Provides instructions for placing an order.",
};

module.exports.run = ({ api, event }) => {
    // Use the config value here
    const gcashNumber = config.shop.contact.gcash;

    const orderInstructions = `📝 To place an order, please send the following details in a single message:
- Product Name(s) & Quantity
- Your Full Name
- Complete Address
- Contact Number

💳 Payment Method: GCash
Please send your payment to ${gcashNumber} and reply with a screenshot of the transaction receipt.

We will confirm your order as soon as we verify the payment.`;

    api.sendMessage(orderInstructions, event.threadID);
};
