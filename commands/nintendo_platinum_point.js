const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("nintendo_platinum_point")
    .setDescription("任天堂プラチナポイントをゲットする"),
  async execute(interaction) {
    // console.log(random);
    url_nintendo = "https://www.nintendo.co.jp/";
    url_mynintendo = "https://my.nintendo.com/";
    url_mynintendostore = "https://store-jp.nintendo.com/";

    await interaction.reply({
      content:
        url_nintendo + "\n\n" + url_mynintendo + "\n\n" + url_mynintendostore,
    });
  },
};
