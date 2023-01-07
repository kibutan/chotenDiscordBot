const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bocchi_planets")
    .setDescription("bocchi_planets"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1061193558733893702/bocchi-the-rock-bocchi.gif",
      ],
    });
  },
};
