const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("shinichi_nanimokiteneeyo")
    .setDescription("なにも来てねえよ……"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/1007684956023173120/1061085600079425536/IMG_8842.jpg",
      ],
    });
  },
};
