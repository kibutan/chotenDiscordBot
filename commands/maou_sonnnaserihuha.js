const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("maou_sonnnaserihuha")
    .setDescription("ふぇ…? そ…そんな台詞は台本にはないですよ…?"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/943501849519095808/1109247826275348560/daihonnihanaidesuyo.jpg",
      ],
    });
  },
};
