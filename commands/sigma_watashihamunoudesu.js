const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sigma_watashihamunoudesu")
    .setDescription("私…は…無能です 私は……! 無能です!!!"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1053282635486601226/siguma_watasihamunodesu.png",
      ],
    });
  },
};
