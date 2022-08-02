const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sweeptosho_yadayada")
    .setDescription("sweeptosho_yadayada"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/1001495468628516894/1004039189219786932/99607378.gif",
      ],
    });
  },
};
