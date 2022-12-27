const { SlashCommandBuilder } = require("@discordjs/builders");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pipimi_oyudayokore")
    .setDescription("お湯だよこれ…"),
  async execute(interaction) {
    await interaction.deferReply();
    await wait(10000);
    await interaction.editReply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1057255296868831242/b6a58f074ad21ae0.gif",
      ],
    });
  },
};
