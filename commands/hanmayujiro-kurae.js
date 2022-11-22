const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hanmayujiro-kurae")
    .setDescription("強くなりたければ 喰らえ!!!"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/853957965866074162/1044273748708175892/IMG_7862.jpg",
      ],
    });
  },
};
