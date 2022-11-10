const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("yuuka_whistle")
    .setDescription("信じられません！最低です！"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/630553822036623370/1033448730852081704/yuk_blue221022.gif",
      ],
    });
  },
};
