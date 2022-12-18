const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("yajima_wakattenyo")
    .setDescription('……言うな "理解(わか)"ってんよ…!!!'),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1053282636535189564/yajima_wakattenyo.png",
      ],
    });
  },
};
