const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("miochan_douiukotodayo")
    .setDescription("どういうことだよ！"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/1007684956023173120/1067648418941513838/IMG_8121.jpg",
      ],
    });
  },
};
