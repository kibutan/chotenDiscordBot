const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("matsuko_amazondekaimasu")
    .setDescription("今日 早速amazonで買います"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1066389686957908079/IMG_0239.JPG",
      ],
    });
  },
};
