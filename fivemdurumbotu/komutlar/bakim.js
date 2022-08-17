const Discord = require('discord.js');
exports.run = (client, message, args) => 
	{
	  
	 
     
	 const sunucubilgi = new Discord.MessageEmbed()
	
	 
     .setTitle("Dizzy Roleplay")
     .setAuthor("Dizzy Roleplay Bakimda", "https://media.discordapp.net/attachments/990291257198800966/1005289276189188096/Dizzy_RP_-_Logo_design.png?width=671&height=671","https://yagami.xyz")
	 .addField('Dizzy Roleplay Bakimda lütfen güvenli bir şekilde çıkış yapınız.','@here & @everyone ') 
	 .setImage("https://media.discordapp.net/attachments/991530877811167304/1005313290756431944/ezgif.com-gif-maker_6.gif")
		
    return message.channel.send({ embed:sunucubilgi });


    };



exports.conf = 
{
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "2"
};

exports.help = 
{
  name: "bakım",
  description: "bakım komutu berk abi",
  usage: "bakım"
};
