const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("omega_shabai")
    .setDescription("虚無(シャバ)い…"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1053282635893461052/omega_syabai.png",
      ],
    });
  },
};
