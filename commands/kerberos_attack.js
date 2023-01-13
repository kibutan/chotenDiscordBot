const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kerberos_attack")
    .setDescription("があっ！ ああっ！"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1063073664909705247/2.gif",
      ],
    });
  },
};
