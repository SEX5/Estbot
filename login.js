// login.js

const login = require("fca-unofficial");
const fs =require("fs");

const credentials = { 
    email: "61571374393707", 
    password: "abalunan1" 
};

login(credentials, (err, api) => {
    if (err) {
        console.error("Login failed:", err);
        if (err.error === 'login-approval') {
            console.log("Your account has 2FA. Approve the login on Facebook, then run this script again.");
        }
        return;
    }
    console.log("✅ Login successful!");
    fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState(), null, 2));
    console.log("✅ appstate.json has been created. You can now delete login.js.");
    process.exit();
});
