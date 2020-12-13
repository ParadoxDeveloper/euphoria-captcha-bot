const app = require("express")();
require("dotenv").config()

app.use('/verify', require("./src/backend/routes.captcha").get);
app.use('/verify', require("./src/backend/routes.captcha").post);

require("./src/bot/client").login(process.env.BOT_TOKEN)

(async () => {
    await require("./src/utils/connect")()
})