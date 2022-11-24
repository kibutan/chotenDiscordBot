const { SlashCommandBuilder } = require("@discordjs/builders");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("choten-cola-splash")
    .setDescription("超てんちゃんは毒霧をくりだした"),
  async execute(interaction) {
    await interaction.deferReply();
    await wait(10000);
    await interaction.editReply({
      files: [
        "https://media.tenor.com/nfbDCz5vlnwAAAAd/needy-streamer-overload-needy-girl-overdose.gif",
      ],
    });
  },
};
