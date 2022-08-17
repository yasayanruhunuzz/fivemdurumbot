const Discord = require('discord.js');
exports.run = (client, message, args) => 
{
    return message.channel.send("``En Yakın Zamanda Dizzy Yetkili Ekip Sizinle İlgilenecek``  <@&1006299584814907475> ")
};

exports.conf =
 {
  enabled: true,
  guildOnly: false,
  aliases: ['DESTEK'],
  permLevel: "0"
};

exports.help =
 {
  name: "destek",
  description: "destek",
  usage: "destek"
};
