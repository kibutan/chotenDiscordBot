const { SlashCommandBuilder } = require("@discordjs/builders");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lycoris_recoil_op_kick")
    .setDescription("リコリス・リコイルOP"),
  async execute(interaction) {
    await interaction.deferReply();
    await wait(10000);
    await interaction.editReply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1051443032785965066/lycoris-recoil-kick.gif",
      ],
    });
  },
};
