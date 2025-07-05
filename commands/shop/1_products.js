// commands/shop/1_products.js

module.exports.config = {
    name: "view products",
    aliases: ["1", "products"],
    description: "Shows the list of available products.",
};

module.exports.run = ({ api, event }) => {
    const productList = `Here are our products:

🔹 Product A - High quality and durable.
🔹 Product B - Best seller for a reason.
🔹 Product C - New arrival! Limited stock.

✅ Is there anything else I can help you with?
Type 'menu' to go back to options.`;

    api.sendMessage(productList, event.threadID);
};
