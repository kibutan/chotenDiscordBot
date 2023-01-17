const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kochiramonukaneba")
    .setDescription("此方も抜かねば… 無作法というもの…"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1063824282087600198/IMG_0408.jpg",
      ],
    });
  },
};
