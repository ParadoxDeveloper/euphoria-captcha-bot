const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    DiscordId: String || null,
    SessionId: String || null
})

const model = new mongoose.model("userData", Schema);

exports.default = model;