const { SlashCommandBuilder } = require("@discordjs/builders");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("mejiroardan_dance_umatok")
    .setDescription("mejiroardan_dance_umatok"),
  async execute(interaction) {
    await interaction.deferReply();
    await wait(10000);
    await interaction.editReply({
      files: [
        "https://discord.com/channels/848754279783071744/881408091986481162",
      ],
    });
  },
};
