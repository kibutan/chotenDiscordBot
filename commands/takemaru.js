const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("takemaru")
    .setDescription("待ったたぜェ！この瞬間(とき)をよォ！"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/853957965866074162/1036881989648781322/E-ygXdvVEAEO5Nv.jpeg",
      ],
    });
  },
};
