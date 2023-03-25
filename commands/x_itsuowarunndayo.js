const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("x_ituowarunndayo")
    .setDescription(
      "いつ終わる!! いつ終わるんだよ!! いつ闘いがおわるんだよーっ!!"
    ),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/1066922904131997797/1088354317322424430/IMG_9995.jpg",
      ],
    });
  },
};
