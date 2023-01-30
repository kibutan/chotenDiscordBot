const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pooh_tegami")
    .setDescription("プーさんと手紙"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/1007684956023173120/1067421541681352704/IMG_8112.jpg",
      ],
    });
  },
};
