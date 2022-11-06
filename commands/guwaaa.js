const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("guwaaaaa")
    .setDescription("ぐわああああ――――ッ!!"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/1007684956023173120/1038617127768309780/CzoNXZHUkAACjN6.jpg",
      ],
    });
  },
};
