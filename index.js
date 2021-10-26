const { Collection, Client, Discord, MessageEmbed, Intents } = require('discord.js');
const Client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_INVITES] });
const prefix = require('./config.json')

Client.on('ready', () => {
    console.log(`${Client.user.tag} is now online!`)
})

Client.login(process.env.TOKEN)