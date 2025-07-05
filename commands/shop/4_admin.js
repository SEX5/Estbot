// commands/shop/4_admin.js

const config = require('../../config.js');

module.exports.config = {
    name: "contact admin",
    aliases: ["4", "admin", "contact"],
    description: "Shows how to contact the admin.",
};

module.exports.run = ({ api, event }) => {
    const adminFacebook = config.shop.contact.facebook;
    const adminGcash = config.shop.contact.gcash;

    const adminInfo = `📞 For urgent concerns, you can contact the admin directly:
- Facebook: ${adminFacebook}
- GCash: ${adminGcash} (for reference)

Please expect a reply within 24 hours.`;

    api.sendMessage(adminInfo, event.threadID);
};
