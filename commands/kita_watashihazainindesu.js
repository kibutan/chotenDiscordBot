const { SlashCommandBuilder } = require("@discordjs/builders");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kita_watashihazainindesu")
    .setDescription("私は罪人です"),
  async execute(interaction) {
    await interaction.deferReply();
    await wait(10000);
    await interaction.editReply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1061449263843913858/bocchi-the-rock-kita-ikuyo.gif",
      ],
    });
  },
};
