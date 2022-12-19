const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kerberos_pyonte")
    .setDescription("ピョンテ!"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1054365340143992852/75888271_p0_master1200.jpg",
      ],
    });
  },
};
