const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("harasayuri_dondondondon")
    .setDescription("どんどんどんどん推しが増えていく"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/848754279783071746/1053340138081620038/image0.jpg",
      ],
    });
  },
};
