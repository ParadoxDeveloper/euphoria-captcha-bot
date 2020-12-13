const discord_akairo = require('discord-akairo');

class ReadyEvent extends discord_akairo.Listener {
    constructor(){
        super("Ready", {
            emitter: "client",
            event: "ready"
        })
    }
    async exec(){
        console.log("connected to discord")
    }
}

module.exports = ReadyEvent;