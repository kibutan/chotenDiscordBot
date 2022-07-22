const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dropkick")
    .setDescription("Goldship's dropkick"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1000015131922673794/dropkick.gif",
      ],
    });
  },
};
