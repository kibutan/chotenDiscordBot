const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("nadeshiko-eating-shingenmochi")
    .setDescription("nadeshiko eating shingenmochi"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://img.gifmagazine.net/gifmagazine/images/3071828/180.gif?15452884071545528940",
      ],
    });
  },
};
