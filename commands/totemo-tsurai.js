const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("totemo_tsurai")
    .setDescription("とても つらい"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1041329448978485318/db61b49d.jpg",
      ],
    });
  },
};
