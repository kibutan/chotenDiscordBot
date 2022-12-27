const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hiroyuki_deetanankanexeyo")
    .setDescription("データなんかねぇよ"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1056508385211732008/41087414.png",
      ],
    });
  },
};
