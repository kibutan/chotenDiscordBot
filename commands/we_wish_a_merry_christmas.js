const { SlashCommandBuilder } = require("@discordjs/builders");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("we_wish_a_merry_christmas")
    .setDescription("ウィーウィッシュアメリクリスマスアンドハッピーヌーヤー！"),
  async execute(interaction) {
    await interaction.deferReply();
    // await wait(10000);
    await interaction.editReply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1056358291078381598/Screen_Shot_2015-12-25_at_1.18.12_PM.jpg",
      ],
    });
  },
};
