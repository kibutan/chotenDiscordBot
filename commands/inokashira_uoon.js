const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("inokashira_uoon")
    .setDescription("うおォン 俺はまるで人間火力発電所だ"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1051845318968365087/CjgnsN0UgAEGGBv.jpg",
      ],
    });
  },
};
