const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("masa_rocketlauncher")
    .setDescription(
      "そしたら沢田のアニキが1人でその場所にいってなァ ロケットランチャーをぶっぱなしてその建物を木端みじんにしてもうたんじゃ"
    ),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1059638129981673582/EpmaVlMVgAEF_Eo.jpg",
      ],
    });
  },
};
