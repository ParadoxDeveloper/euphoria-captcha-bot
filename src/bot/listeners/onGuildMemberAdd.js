const discord_akairo = require("discord-akairo");
const userData = require("../../utils/structures/schema.userData");

class onGuildMemberAdd extends discord_akairo.Listener {
    constructor(){
        super("guildMemberAdd", {
            emitter: "client",
            event: "guildMemberAdd"
        })
    }
    async exec(message, member){
        const found = await userData.default.find({
            DiscordId: member.id
        })
        if (found){
            message.channel.send("You already have a pending verification!")
        }
        else {
            const url = require('crypto').randomBytes(64).toString("hex")
            await userData.default.create({
                DiscordId: member.id,
                SessionId: url
            })
            message.channel.send(`Please verify using this link:\n\nhttps://psu.dev/verify?id=${url}`);
        }
    }
}

module.exports = onGuildMemberAdd;
