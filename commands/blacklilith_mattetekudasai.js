const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("blacklilith_mattetekudasai")
    .setDescription("待っててください ご主人様！"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/943501849519095808/1063429604330717204/blacklilith_mattetekudasai.jpg",
      ],
    });
  },
};
