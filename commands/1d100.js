const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dice100")
    .setDescription("100面サイコロ1個を振ります"),
  async execute(interaction) {
    const random = Math.floor(Math.random() * 99) + 1;
    // console.log(random);
    await interaction.reply({ content: String(random) });
  },
};
