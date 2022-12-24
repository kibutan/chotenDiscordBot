const { SlashCommandBuilder } = require("@discordjs/builders");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pipimi_iikakudo")
    .setDescription("いい角度"),
  async execute(interaction) {
    await interaction.deferReply();
    await wait(10000);
    await interaction.editReply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1056116496931246152/ACbu_official-1604416182940930048-_--_--_2--30_1.gif",
      ],
    });
  },
};
