const { SlashCommandBuilder } = require("@discordjs/builders");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kyouhayasumija_nainndana")
    .setDescription("今日は休みじゃないんだなそれが"),
  async execute(interaction) {
    await interaction.deferReply();
    await interaction.editReply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1078178885029601310/image0.jpg",
      ],
    });
  },
};
