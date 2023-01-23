const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("chousou_orehaoniichandazo")
    .setDescription("どけ!!! 俺はお兄ちゃんだぞ!!!"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1067055851409510410/E2AClMNUcAgM2Rd.jpg",
      ],
    });
  },
};
