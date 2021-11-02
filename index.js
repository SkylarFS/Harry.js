const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '=';

const fs = require('fs');

const ms = require('ms');


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log('Harry is Online!');
})


client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    client.commands.get('ping').execute(message, args);
  } else if (command == 'ron') {
    client.commands.get('youtube').execute(message, args, Discord)
  }

  if (command === 'help') {
    client.commands.get('help').execute(message, args, Discord);
  } else if (command == 'human') {
    client.commands.get('heli').execute(message, args, Discord)
  }

  if (command === "shit") {
    client.commands.get('shit').execute(message, args, Discord);
  } else if (command == 'shit') {
    client.commands.get('shit').execute(message, agrs, Discord)
  }

  if (command === "purge") {
    client.commands.get('clear').execute(message, args, Discord);
  }





  if (command === "bugreport") {
    if (!args[1]);
    const bug = args.slice().join(" ")
    const bruhchannel = client.channels.cache.get('829628238313422889')

    let BugEmbed = new Discord.MessageEmbed()
      .setColor('#275BF0')
      .setTitle('Bug Report')
      .addFields(
        { name: 'Game:', value: `Quirkymals` },
        { name: 'Bug:', value: `${bug}` }
      )
      .setFooter(message.author.tag)
    bruhchannel.send(BugEmbed)

    message.reply("Your Bug Report has been submitted!")
  }


  //kick 
  client.on('message', message => {
    if (!message.guild) return;

    if (message.content.startsWith('=kick')) {
      if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You do not have the permissions to use that command!")
      const user = message.mentions.users.first();

      if (user) {

        const member = message.guild.members.resolve(user);

        if (member) {

          member
            .kick(`bruh momnent sad!`)
            .then(() => {

              message.reply(`Successfully kicked ${user.tag}`);
            })
            .catch(err => {

              message.reply('I was unable to kick the member');

              console.error(err);
            });
        } else {
          message.reply("That user isn't in this guild!");
        }
      } else {
        message.reply("You didn't mention the user to kick!");
      }
    }
  });


  //ban
  client.on('message', message => {
    if (!message.guild) return;

    if (message.content.startsWith('=ban')) {
      if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You do not have the permissions to use that command!")
      const user = message.mentions.users.first();

      if (user) {

        const member = message.guild.members.resolve(user);

        if (member) {

          member
            .ban('Optional reason that will display in the audit logs')
            .then(() => {

              message.reply(`Successfully banned ${user.tag}`);
            })
            .catch(err => {

              message.reply('I was unable to ban the member');

              console.error(err);
            });
        } else {
          message.reply("That user isn't in this guild!");
        }
      } else {
        message.reply("You didn't mention the user to ban!");
      }
    }
  })

  //avatarPFP
  client.on('message', message => {
    if (message.content === '=av') {
      var member = message.mentions.members.first();
      let embed = new Discord.MessageEmbed()
        .setImage(message.member.avatarURL)
        .setColor('#275BF0')
      message.channel.send(embed)
    }
  });
})


client.login(token);
