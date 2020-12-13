const discord_akairo = require("discord-akairo");
const { default: schemaUserData } = require("../utils/structures/schema.userData");
require("dotenv").config()
class Client extends discord_akairo.AkairoClient {
    constructor(){
        super({})

        this.commandHandler = new discord_akairo.CommandHandler(this, {
            prefix: process.env.PREFIX,
            directory: '/commands'
        })
        this.listenerHandler = new discord_akairo.ListenerHandler(this, {
            directory: '/listeners'
        })
    }
}

const client = new Client()
module.exports = client;
module.exports.verify = function(id){
    client.guilds.fetch(guild => {
        guild.members.fetch(member => {
            if(member.id == id){
                member.roles.add(process.env.VERIFIED_ROLE)
            }
        })
    })
}