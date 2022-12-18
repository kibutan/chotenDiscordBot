const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("oretatinoougon")
    .setDescription('帰ってくる… オレ達の"黄金時代(オウゴン)"が帰ってくる!!'),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1053282636224798720/oretatinoougon.png",
      ],
    });
  },
};
