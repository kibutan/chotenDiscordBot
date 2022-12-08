const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("retukaio_kuunda")
    .setDescription("刃牙「アンタさ　ほんっ…と優しいのな」"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1050408157446418453/retsukaio.jpg",
      ],
    });
  },
};
