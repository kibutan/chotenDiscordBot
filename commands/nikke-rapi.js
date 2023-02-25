const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("mattekuretamae")
    .setDescription(
      "待ってくれたまえ 言葉の洪水をワッと いっきにあびせかけるのは！"
    ),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/848755299513925674/1077957499019345980/IMG_0478.png",
      ],
    });
  },
};
