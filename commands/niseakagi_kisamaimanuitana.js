const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("niseakagi_kisamaimanuitana")
    .setDescription("きさま 今抜いたな"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/943501849519095808/1063613702101807104/niseakagi_nuitana.jpg",
      ],
    });
  },
};
