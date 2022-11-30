const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("nemo_shoubudayo")
    .setDescription("いやなら　わたしと　勝負だよ"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1047136925821182032/1-1032.jpg",
      ],
    });
  },
};
