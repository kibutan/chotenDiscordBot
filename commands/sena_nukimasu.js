const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sena_nukimasu")
    .setDescription("抜きます"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/943501849519095808/1048202277325901934/IMG_0395.jpg",
      ],
    });
  },
};
