const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("1d6")
    .setDescription("6面サイコロ1個を振ります"),
  async execute(interaction) {
    const random = Math.floor(Math.random() * 5) + 1;
    console.log(random);
    await interaction.reply({
      description: random,
    });
  },
};
