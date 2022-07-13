const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("shonbori_rudolf")
    .setDescription("shonbori_rudolf"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/834044144162308120/996772563118194708/00_luna_HQ.gif",
      ],
    });
  },
};
