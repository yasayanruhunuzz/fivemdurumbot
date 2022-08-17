const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send({embed:ozelmesajuyari}); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
      .setTitle("İşte Fivem Ve Team Speak Sunucularımızın Ip'leri")
      .setAuthor("Dizzy Roleplay", "https://media.discordapp.net/attachments/990291257198800966/1005289276189188096/Dizzy_RP_-_Logo_design.png?width=671&height=671","https://yagami.xyz")
      .addField('Sunucu İp:','connect 45.141.149.9')
	    .addField('TS3','dizzyroleplay')
      .setThumbnail("https://media.discordapp.net/attachments/991530877811167304/1005316833265598554/ezgif.com-gif-maker_3.gif")

    return message.channel.send({ embed:sunucubilgi });
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ip',
  description: 'Ambulansı arar (ciddiye almayın)',
  usage: 'ara112'
};
