// commands/shop/2_prices.js

module.exports.config = {
    name: "check prices",
    aliases: ["2", "prices", "price"],
    description: "Shows the price list.",
};

module.exports.run = ({ api, event }) => {
    const priceList = `💰 Price List:
- Product A: ₱500
- Product B: ₱750
- Product C: ₱1200

✅ Is there anything else I can help you with?
Type 'menu' to go back to options.`;

    api.sendMessage(priceList, event.threadID);
};
