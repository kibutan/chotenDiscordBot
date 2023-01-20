const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kyaru_yabaiwayo")
    .setDescription("ヤバイわよ!!"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1065981089350434907/yabaiv.gif",
      ],
    });
  },
};
