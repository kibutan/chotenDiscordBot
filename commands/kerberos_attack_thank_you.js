const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kerberos_attack_thank_you")
    .setDescription("ありがとうございます！ ありがとうございます！"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1063073837580820560/su4052380.jpg.png",
      ],
    });
  },
};
