const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("arona_pikon")
    .setDescription("ッピョン！ (ピコン！)"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1064501835160895538/01-002.gif",
      ],
    });
  },
};
