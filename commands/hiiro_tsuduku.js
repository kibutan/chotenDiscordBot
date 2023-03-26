const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hiiro_tsuduku")
    .setDescription("つづく"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1089348522689699980/EHctBtxUEAAlLwa.jpeg",
      ],
    });
  },
};
