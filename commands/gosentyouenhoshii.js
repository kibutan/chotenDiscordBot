const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("gosentyouenhoshii")
    .setDescription("5000兆円欲しい!"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1070995155127119933/0.png",
      ],
    });
  },
};
