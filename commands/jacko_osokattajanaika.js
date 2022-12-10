const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("jacko_osokattajanaika")
    .setDescription("遅かったじゃないか・・・"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1051047468890079242/Fjgf1JzaEAI9BvL_.jpeg",
      ],
    });
  },
};
