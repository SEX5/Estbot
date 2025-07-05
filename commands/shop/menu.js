// commands/shop/menu.js

module.exports.config = {
    name: "menu",
    aliases: ["hi", "hello"],
    description: "Displays the main menu.",
};

module.exports.run = ({ api, event }) => {
    const menuText = `🛒 Main Menu:
1️⃣ View Products
2️⃣ Check Prices
3️⃣ Place an Order
4️⃣ Contact Admin

Please type the number of your choice.`;
    
    api.sendMessage(menuText, event.threadID);
};
