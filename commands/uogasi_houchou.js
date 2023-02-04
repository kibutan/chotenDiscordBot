const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("uogasi_houchou")
    .setDescription("包丁"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1071301720635875398/EZOdYPfU0AA89dD.jpg",
      ],
    });
  },
};
