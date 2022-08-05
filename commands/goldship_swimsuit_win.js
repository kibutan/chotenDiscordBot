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
        "https://media.discordapp.net/attachments/1001495468628516894/1005111591110463548/output.gif?width=357&height=676",
      ],
    });
  },
};
