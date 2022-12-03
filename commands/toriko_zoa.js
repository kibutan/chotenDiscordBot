const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("toriko_zoa")
    .setDescription("ぞあっ"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1048461835818508338/zowa.jpg",
      ],
    });
  },
};
