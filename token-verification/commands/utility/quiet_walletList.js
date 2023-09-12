const { SlashCommandBuilder } = require('discord.js');
const { NodeProvider } = require('@alephium/web3')

const nodeProvider = new NodeProvider('https://node-alephium.ono.re/')

async function getWallet(addy) {
    const result = await nodeProvider.addresses.getAddressesAddressBalance(addy)
    console.log("User called getWallet.")
    return result.balanceHint
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('getWalletInfo')
		.setDescription('Spits out info related to a given wallet.')
    .addStringOption(option =>
      option.setName('address')
        .setDescription('your alephium address')),
	async execute(interaction) {
        const addy = interaction.options.getString('address')

        const alph = await getWallet(addy)

		await interaction.reply(`The wallet holds: ${alph} alph.`)
	},
};