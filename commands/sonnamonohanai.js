const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sonnamonohanai")
    .setDescription("そんなものはない"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1041703474833936405/07e40280ae9511e0.jpeg",
      ],
    });
  },
};
