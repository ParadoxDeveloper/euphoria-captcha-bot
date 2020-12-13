const app = require("express")()
const users = require("../utils/structures/schema.userData");
const express_recaptcha = require("express-recaptcha").RecaptchaV3;
const bodyParser = require("body-parser");

const Captcha = new express_recaptcha('0AO4LZNN71SQOC11EWBUSBIVGVOQVX6L', 'AUQR2IZ386O6LE0B7KEXGL2CALL8WXID')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
module.exports.get = app.get("/verify", Captcha.middleware.render, async (req, res) => {
    if (req.query.id){
        const found = users.default.find({
            SessionId: req.query.id
        })
        if (found){
            res.render('verify', {captcha: res.recaptcha})
            res.send("Please solve the captcha above to get access to the server.")
        }
    }
    else {
        res.send("<h1>Invalid get request!</h1>")
    }
})

module.exports.post = app.post("/verify", Captcha.middleware.verify, async (req, res) => {
    if (req.recaptcha.error){
        res.send("There was an error.")
    }
    else {
        const data = require("./getIpInfo")(req.ip)
        if (data.privacy.vpn === true || data.privacy.proxy === true){
            res.send("You are using a vpn, please remove it.");
        }
        else {
            res.send("Verified!")
            require("../bot/client").verify(schemaUserData.find({SessionId: req.query.id}).DiscordId)
        }
    }

})

