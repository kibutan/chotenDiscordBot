const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sensei_otonanocard")
    .setDescription(
      "うわーーーーーーーー 大人のカードが！！！！ 破裂するーーーーーーー"
    ),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/1066922904131997797/1085053621990862948/0B371166-9ACF-490C-A532-740E6757DACE.jpg",
      ],
    });
  },
};
