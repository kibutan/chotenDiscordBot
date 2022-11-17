const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("nicorobin-ikitai")
    .setDescription("生ぎたいっ!!!"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/848754279783071746/1042605742869459075/images_27.jpg",
      ],
    });
  },
};
