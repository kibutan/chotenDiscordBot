const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("molcar_back")
    .setDescription("Molcar back"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1040914355467853834/Untitled_GIF_gifmagazine.gif",
      ],
    });
  },
};
