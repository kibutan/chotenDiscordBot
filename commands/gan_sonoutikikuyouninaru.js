const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("gan_sonoutikikuyouninaru")
    .setDescription("まだガンには効かないがそのうち効くようになる"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/1066922904131997797/1074893494264549417/IMG_8359.png",
      ],
    });
  },
};
