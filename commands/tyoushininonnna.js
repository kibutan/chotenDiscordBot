const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("tyoushinonnna")
    .setDescription("tyoushinonnna"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://stickershop.line-scdn.net/stickershop/v1/sticker/61500351/android/sticker.png",
      ],
    });
  },
};
