const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("choten-internet-yamero")
    .setDescription("インターネットやめろ"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1044979659860889630/FgAAgYCUYAYP_tX.jpg",
      ],
    });
  },
};
