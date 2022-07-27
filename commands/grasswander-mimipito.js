const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("grasswander-mimipito")
    .setDescription("grasswander-mimipito"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://livedoor.blogimg.jp/peko_peko3-d5o03taj/imgs/e/7/e724554f.gif",
      ],
    });
  },
};
