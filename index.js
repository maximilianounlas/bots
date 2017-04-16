const Discord = require('discord.js');
const bot = new Discord.Client();

client.on('message',(message)=>{
    if(message.content == 'ping'){
        message.reply('pong');
    }
});

bot.login('MzAyOTU0NjgwNDM3NDQwNTEy.C9REIA.a5aRNDC1R9OCWdKWy7nejCBGWdU'); 