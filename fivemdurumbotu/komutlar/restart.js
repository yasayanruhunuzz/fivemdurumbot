const Discord = require('discord.js');
exports.run = (client, message, args) => 
	{
	  
	 
     
	 const sunucubilgi = new Discord.MessageEmbed()
	
	 
     .setTitle("Dizzy Roleplay")
     .setAuthor("Dizzy Roleplay Oyuncuları!", "https://media.discordapp.net/attachments/990291257198800966/1005289276189188096/Dizzy_RP_-_Logo_design.png?width=671&height=671","https://yagami.xyz")
	 .addField('Dizzy Roleplay Sunucumuza kısa zamanlı restart atılcaktır bilginize!!.','@here & @everyone ') 
	 .setImage("https://cdn.discordapp.com/attachments/991530877811167304/1005314597370216458/ezgif.com-gif-maker_7.gif")
		
    return message.channel.send({ embed:sunucubilgi });


    };

exports.conf = 
{
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "2"
};

exports.help = {
  name: "restart",
  description: "restart komutu berk abi",
  usage: "restart"
};
