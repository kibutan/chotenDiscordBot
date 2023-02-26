const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("washiranihasukuenumonoja")
    .setDescription("わしらには救えぬものじゃ"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1079224442569367712/d3276abe26fb4fb8ce7d9cf7c7c77f73_600.jpg",
      ],
    });
  },
};
