const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ultrafastparrot")
    .setDescription("party or die"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cultofthepartyparrot.com/parrots/hd/ultrafastparrot.gif",
      ],
    });
  },
};
