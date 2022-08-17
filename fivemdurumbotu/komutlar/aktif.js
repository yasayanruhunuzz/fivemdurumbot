const Discord = require('discord.js');

exports.run = (client, message, args) => 
	{
	  
	 
     
	 const sunucubilgi = new Discord.MessageEmbed()
	
	 
     .setTitle("Dizzy Roleplay")
     .setAuthor("Dizzy Roleplay", "https://media.discordapp.net/attachments/990291257198800966/1005289276189188096/Dizzy_RP_-_Logo_design.png?width=671&height=671","https://yagami.xyz")
	 .addField('Sunuucu ip:','connect 45.141.149.9') 	
     .addField('TS3','dizzyroleplay') 
	 .addField('Dizzy Roleplay','@here & @everyone ') 
	 .setImage("https://cdn.discordapp.com/attachments/991530877811167304/1005311396327739422/ezgif.com-gif-maker_5.gif")
		
    return message.channel.send({ embed:sunucubilgi });


    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['DESTEK'],
  permLevel: "2"
};

exports.help = {
  name: "aktif",
  description: "destek",
  usage: "destek"
};