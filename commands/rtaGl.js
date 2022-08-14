const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder().setName("rtagl").setDescription("Good Luck!"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://media.discordapp.net/attachments/881408091986481162/1008344406329397258/rtaGl.png",
      ],
    });
  },
};
