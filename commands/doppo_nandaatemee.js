const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("doppo_nandaatemee")
    .setDescription("なんだァ？てめェ……"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1063824459460526203/IMG_0409.jpg",
      ],
    });
  },
};
