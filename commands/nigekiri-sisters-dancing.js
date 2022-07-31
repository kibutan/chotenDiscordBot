const { SlashCommandBuilder } = require("@discordjs/builders");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("nigekiri-sisters-dancing")
    .setDescription("nigekiri-sisters-dancing"),
  async execute(interaction) {
    await interaction.deferReply();
    await wait(10000);
    await interaction.editReply({
      files: [
        "https://c.tenor.com/CQb1Eg5eq2kAAAAd/%E3%82%A6%E3%83%9E%E5%A8%98-uma-musume.gif",
      ],
    });
  },
};
