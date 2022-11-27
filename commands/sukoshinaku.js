const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sukoshinaku")
    .setDescription("少し 泣く。"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1046247349846032414/BOeAbZcCEAEZOpj.jpg",
      ],
    });
  },
};
