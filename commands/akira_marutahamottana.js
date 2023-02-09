const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("akira_marutahamottana")
    .setDescription("みんな丸太は持ったな!! 行くぞォ!!"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/1066922904131997797/1073234035410743317/Z.png",
      ],
    });
  },
};
