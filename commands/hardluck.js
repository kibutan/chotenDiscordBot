const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hardluck")
    .setDescription(
      "事故る奴は‥‥ 不運(ハードラック)と踊(ダンス)っちまったんだよ‥‥"
    ),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1037689227334393916/unknown.png",
      ],
    });
  },
};
