const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("denji_sukininacchimau")
    .setDescription("マキマさん助けて 俺この娘好きになっちまう"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1073858761573273600/-2022-08-28-14.56.17.png",
      ],
    });
  },
};
