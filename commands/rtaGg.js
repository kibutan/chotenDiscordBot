const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder().setName("rtagg").setDescription("Good Game!"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://media.discordapp.net/attachments/881408091986481162/1008344406719479808/rtaGg.png",
      ],
    });
  },
};
