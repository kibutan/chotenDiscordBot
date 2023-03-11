const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dr_k_imanaradekimasu")
    .setDescription("いえ…… 今ならできます！(ｷﾞｭｯ"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1084105132272275536/IMG_8500.png",
      ],
    });
  },
};
