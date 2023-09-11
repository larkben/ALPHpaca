const { SlashCommandBuilder } = require('discord.js');
const { NodeProvider } = require('@alephium/web3')

async function getBlockHeight() {
    let result = await nodeProvider.blockflow.getBlockflowChainInfo({
        fromGroup: 0,
        toGroup: 0
      })
    console.log(result)
    return result.currentHeight
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('getheight')
		.setDescription('Replies with Block Height.'),
	async execute(interaction) {
		await interaction.reply(getBlockHeight());
	},
};