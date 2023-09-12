const { SlashCommandBuilder } = require('discord.js');
const { NodeProvider } = require('@alephium/web3')

const nodeProvider = new NodeProvider('https://node-alephium.ono.re/')

async function getBlockHeight(from, to) {
    let result = await nodeProvider.blockflow.getBlockflowChainInfo({
        fromGroup: from,
        toGroup: to
      })
    console.log("User called currentHeight.")
    return result.currentHeight
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('getheight')
		.setDescription('Replies with Block Height of a given from and to.')
    .addStringOption(option =>
      option.setName('from')
        .setDescription('the from point'))
    .addStringOption(option =>
      option.setName('to')
        .setDescription('the to point')),
	async execute(interaction) {
      const fromChain = interaction.options.getString('from')
      const toChain = interaction.options.getString('to')

      const height = await getBlockHeight(fromChain, toChain)

		  await interaction.reply(`The current height from: ${fromChain}, to: ${toChain}; is ${height}.`)
	},
};