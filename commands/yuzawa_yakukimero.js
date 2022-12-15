const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("yuzawa_yakukimero")
    .setDescription('みんな！！ "麻薬(ヤク)"キメろォォ！！ '),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1052894223164264518/Eo29aSXVgAIWHuX.jpg",
      ],
    });
  },
};
