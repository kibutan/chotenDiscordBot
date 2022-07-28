const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("riceshower-training")
    .setDescription("riceshower-training"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/1001495468628516894/1002208807461605486/93855781.gif",
      ],
    });
  },
};
