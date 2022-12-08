const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lise_muchichimuchi")
    .setDescription("ヘッチュンヘプチュ。ヘッチュチュンヘッチュ。ムチチムチ？"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1050407756500320256/EdL4zPpU8AA-vv7_.png",
      ],
    });
  },
};
