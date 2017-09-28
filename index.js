const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot Launched!');
});

client.on('message', (message) => {
  if (message.content === '!hi') {
    message.channel.send({embed: {
    color: 0xff3e3e,
    title: "Hi I'm Fox",
    description: "A Sexy :robot:"
}})
}
});

client.on('message', (message) => {
  if (message.content === '!cmd') {
    message.channel.send({embed: {
    color: 0xff3e3e,
    title: "Announcement:",
    description: "Fox Is Now WIP ~ If you have any suggestions for the bot please let an administrator know!"
}})
}
});

client.on('message', (message) => {
  if (message.content === '!invite') {
    message.channel.send({embed: {
        color: 0xff3e3e,
        author: {
          name: "Invite Fox To Your Server",
        },
        title: "Invite Here",
        url: "https://discordapp.com/oauth2/authorize/?permissions=1341643969&scope=bot&client_id=362527820326633472",
       }
    });
    }
    });

  client.on("message", (message) => {
    if (message.content === "!ping") {
        try {
            timeBefore = new Date();
            message.reply("Calculating :ping_pong: ...");
            message.delete();
        } catch (err) {
            message.channel.send(err);
        }
    }
    if (message.content.includes("Calculating :ping_pong: ...") && message.author === client.user) {
        try {newTime = new Date();
            var calc = newTime - timeBefore;
            message.edit(":ping_pong: " + calc + "ms").then(m => setTimeout(function () { m.delete(); }, 5000));
        } catch (err) {
            message.channel.send(err);
        }
    }
});

client.login('MzYyNTI3ODIwMzI2NjMzNDcy.DK090w.ckAozoHmRLsGmbq9t7vJ4UPM-SU');
