const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rta_thinking")
    .setDescription("Now Thinking..."),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1048944688566112297/FjId16qVQAIKjwO.png",
      ],
    });
  },
};
