const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("uranai")
    .setDescription("金運みくじ"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/1007684956023173120/1059083330043252756/IMG_8731.jpg",
      ],
    });
  },
};
