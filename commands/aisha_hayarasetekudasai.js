const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("aisha_hayarasetekudasai")
    .setDescription("流行らせてください…"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/943501849519095808/1087355937003687947/rast_origin_hayarasetekudasai_2.png",
      ],
    });
  },
};
