const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("coool-jan")
    .setDescription("ドエレ――― Cooolじゃん…?"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1038281168937820160/B2So88uCMAEadmZ.jpeg",
      ],
    });
  },
};
