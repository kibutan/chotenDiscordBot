const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kill-the-clue")
    .setDescription("kill-the-clue"),
  async execute(interaction) {
    await interaction.reply({
      files: ["https://c.tenor.com/jhE8NBhENzQAAAAC/among-us-mungus.gif"],
    });
  },
};
