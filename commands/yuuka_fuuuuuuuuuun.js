const { SlashCommandBuilder } = require("@discordjs/builders");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("yuuka_fuuuuuuuuuun")
    .setDescription("… ふ～～～～～～～ん"),
  async execute(interaction) {
    await interaction.deferReply();
    await interaction.editReply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1070284869265002516/9acf3825bda98ca3.jpg",
      ],
    });
  },
};
