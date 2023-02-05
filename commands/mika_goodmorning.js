const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("mika_goodmorning")
    .setDescription("目覚めるミカ"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1071669699508715591/104724336_1.gif",
      ],
    });
  },
};
