const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("parrot")
    .setDescription("party or die"),
  async execute(interaction) {
    await interaction.reply({
      files: ["https://cultofthepartyparrot.com/parrots/hd/parrot.gif"],
    });
  },
};
