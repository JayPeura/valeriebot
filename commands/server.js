const Discord = require('discord.js');

module.exports = {
	commands: 'server',
	description: 'Post server info.',
	execute(message, arguments, text) {
		const { guild } = message;
		const { name, memberCount, owner } = guild;
		const icon = guild.iconURL();



		const embed = new Discord.MessageEmbed()
			.setTitle(`Server info for "${name}"`)
			.setThumbnail(icon)
			.addFields(
			{
				name: 'Members',
				value: memberCount,
			},
			{
				name: 'Owner',
				value: owner,
			})
			
		message.channel.send(embed)
		}

		

};