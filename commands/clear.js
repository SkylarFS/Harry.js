module.exports = {
    name: 'clear', 
    description: "Clear messages!",
    async execute(message, args) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You do not have the permissions to use that")

        if(!args[0]) return message.reply("enter the amount of messages you want to purge!");
        if(isNaN(args[0])) return message.reply("Enter a number!");

        if(args[0] > 100) return message.reply("You cannot delete more than 100 messages!");
        if(args[0] < 1) return message.reply("You gotta delete atleast one message!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{ 
            message.channel.bulkDelete(messages);

        });
    
    }
    
}