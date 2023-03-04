const { SlashCommandBuilder } = require("@discordjs/builders");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("goldship_swimsuit_win")
    .setDescription("goldship_swimsuit_win"),
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
