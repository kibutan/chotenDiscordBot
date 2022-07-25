const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("nadeshiko-eating-shingenmochi")
    .setDescription("nadeshiko eating shingenmochi"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/630553822036623370/831897913315557406/spcw_uma210414.gif",
      ],
    });
  },
};
