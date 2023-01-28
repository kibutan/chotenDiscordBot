const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("oruga_naniyattendamika")
    .setDescription("何やってんだ ミカ～・"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/1066922904131997797/1068017107759022132/IMG_8936.jpg",
      ],
    });
  },
};
