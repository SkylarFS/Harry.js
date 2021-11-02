const { execute } = require("./ping");

module.exports = {
    name : 'help',
    description: "list of commands!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFD700')
        .setTitle(`Help`)
        .addFields(
            {name: "bruhlol", value: "lmao"}
        )
        .setFooter("\u3000".repeat(15/*any big number works too*/))

        message.channel.send(newEmbed);
    }

}