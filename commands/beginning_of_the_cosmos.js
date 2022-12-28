const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("beginning_of_the_cosmos")
    .setDescription("天地創世"),
  async execute(interaction) {
    await interaction.reply({
      content:
        "140符105飜 : 908溝6519穣5024𥝱3594垓8349京9283兆6857億6135万1700点",
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1057440119256260618/IMG_7994.jpg",
      ],
    });
  },
};
