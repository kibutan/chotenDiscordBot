const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("gekirinnnifureta")
    .setDescription("だが それが逆に妹の夫の逆鱗に触れた！"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1046779897256882236/20170401122248.jpg",
      ],
    });
  },
};
