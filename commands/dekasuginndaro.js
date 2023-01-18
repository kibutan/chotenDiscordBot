const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dekasuginndaro")
    .setDescription("デカ過ぎんだろ…"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/853957965866074162/1064108699481808986/IMG_2439.jpg",
      ],
    });
  },
};
