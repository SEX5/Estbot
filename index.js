// index.js

const login = require("fca-unofficial");
const fs = require("fs");
const { BotPack } = require("botpack");

// --- User Welcome System ---
const userDBPath = './users.json';
let userDB = {};

try {
    if (fs.existsSync(userDBPath)) {
        userDB = JSON.parse(fs.readFileSync(userDBPath));
    } else {
        fs.writeFileSync(userDBPath, JSON.stringify({}));
    }
} catch (e) {
    fs.writeFileSync(userDBPath, JSON.stringify({}));
}

const markUserAsWelcomed = (userID) => {
    userDB[userID] = true;
    fs.writeFileSync(userDBPath, JSON.stringify(userDB, null, 2));
};

const welcomeMessage = `👋 Hello! Welcome to Xplicit Shop.

🛒 You can:
1️⃣ View Products
2️⃣ Check Prices
3️⃣ Place an Order
4️⃣ Contact Admin

Please type the number of your choice or type 'menu' anytime to see this list again.`;
// --- End User Welcome System ---

login({ appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8')) }, (err, api) => {
    if (err) return console.error("Login Error:", err);

    console.log(`✅ Bot [${api.getCurrentUserID()}] is now online!`);

    const bot = new BotPack({
        api: api,
        prefix: "",
        commandNotFoundMessage: "❓ Sorry, I didn’t understand that.\nPlease type ‘menu’ to see the options.",
    });

    bot.loadCommands("./commands");
    console.log("✅ Commands loaded successfully.");

    api.listenMqtt((err, event) => {
        if (err) return console.error("ListenMqtt Error:", err);
        if (event.type !== "message" || event.isGroup || event.senderID === api.getCurrentUserID()) {
            return;
        }

        if (!userDB[event.senderID]) {
            api.sendMessage(welcomeMessage, event.threadID, (err) => {
                if (!err) markUserAsWelcomed(event.senderID);
            });
            return;
        }

        bot.handleEvent(event);
    });
});
