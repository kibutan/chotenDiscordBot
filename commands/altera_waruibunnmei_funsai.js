const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("altera_waruibunnmei_funsai")
    .setDescription("やはりガチャは悪い文明!! 粉砕する!!"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/909657618346278992/1071085605452251197/nt_171121fgoline04.jpg",
      ],
    });
  },
};
