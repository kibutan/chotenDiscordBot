const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("gubinee-drinkingwhiskey")
    .setDescription("Gubinee drinking whiskey"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://img.gifmagazine.net/gifmagazine/images/3072149/180.gif?15452892491545528940",
      ],
    });
  },
};
