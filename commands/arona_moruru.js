const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("arona_moruru")
    .setDescription("モル？ル (知ら？ん)"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1064501834816958485/01-001.gif",
      ],
    });
  },
};
