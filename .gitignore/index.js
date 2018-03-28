


const Discord = require('discord.js')
const bot = new Discord.Client()
const PREFIX = "-";


bot.on('guildMemberAdd', function(member){


  //member.guild.createRole({
   // name: (member.nickname),
   // color: 0x2E2E2E,
   // permissions: [],
    
    
 
  //}).then(function(role){
  //  member.addRole(role);
  
//  })
 
})

  bot.on('guildMemberAdd', member => {
  
      
  member.createDM().then(channel => {
    return channel.send('bvn sur le Discord de la PvpCubik ' + member.displayName)
  }).catch(console.error)
    member.setNickname("Recrut: " + member.displayName)
    //bot.channels.get  ("424179400079179776").send("salut à "+ member.displayName + "  Sur le serveur Dev");
    member.addRole(member.guild.roles.find("name", "en attente d'un admin-modo"));
 });

// member.addRole(member.guild.roles.find("name", "testrole"));
bot.on('ready', () => {
  
  
  bot.user.setGame("info: -help")
  console.log("Je suis connecté !")

})
bot.on('message', message => {



  if (message.content[0] === PREFIX) {
    if (message.content === "-slt") {
      message.channel.send("salut mon pote");
               }
 if (message.content ===  PREFIX + "info") {
      message.channel.sendMessage("``` Bot PvpCubik Version 1.0 \n Créateur : Benjamin ```");
         
      }
      if (message.content ===  PREFIX + "5") {
        var présentation = new Discord.RichEmbed()
        .setTitle('Bonjour je suis ' + bot.user.username )
        .setColor('#03F6EE')
        .setDescription("le bot de la PvpCubik")
        .addField("commande:", '-help -msgp  -slt -inv')
        .setFooter("Enjoy ")
                message.channel.send(présentation)

               }  
    if (message.content === PREFIX + "box"){
            message.channel.send({embed: {
        color: 	0x01DFD7,
        description: "-help for info"
      }});
    } 
    if (message.content === PREFIX + "bvn"){
      var présentation2 = new Discord.RichEmbed()
      .setTitle('Bienvenue à une nouvelle personne ' )
      .setColor('#03F6EE')
      .setDescription("Je me présente je suis  " + bot.user.username + " le bot de la PvpCubik")
      .addField( message.author.username , " te dit la bienvenue")
      .setFooter(" ")
              message.channel.send(présentation2)
    } 
if (message.content === PREFIX + "inv") {
  if(!message.channel.guild) return;
if (message.author.bot) return;
        message.channel.createInvite({
        thing: true,
        maxUses: 2,
        maxAge: 3600
        
    }).then(invite =>
      message.author.sendMessage(invite.url)
    ) 
  
  message.channel.send("AwexVHz")
}
    if (message.content === PREFIX + "help"){
      message.channel.send({embed: {
        color: 3448053,
        description: "-msgp : for message private | -info for information creator"
      }});
    }
    if (message.content === PREFIX + "pika"){
      channel.send("555")
    }
    if (message.content === "-msgp") {
            message.author.createDM().then(channel =>{
              channel.send("salut ")
             
                         })
        
            
          }
     }
});

bot.login(process.env.TOKEN);


