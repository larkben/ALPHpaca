const { SlashCommandBuilder } = require('discord.js');
const { NodeProvider } = require('@alephium/web3')

const nodeProvider = new NodeProvider('https://node-alephium.ono.re/')

async function getTxStatus(tx) {
    const result = await nodeProvider.transactions.getTransactionsStatus({
        txId: tx
    })
    console.log("User requested tx.")
    return result.type
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('checktx')
		.setDescription('Gets the status of your tx.')
    .addStringOption(option =>
      option.setName('tx-hash')
        .setDescription('the from point')),
	async execute(interaction) {
        const hash = interaction.options.getString('tx-hash')

        const tx = await getTxStatus(hash)

		await interaction.reply(`The transaction(${hash}) is ${tx}.`)
	},
};