const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kyouhayasumija")
    .setDescription("今日は休みじゃ グフフ"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1078128154243248260/71193aecf59ed8757820ffa28e703d69.png",
      ],
    });
  },
};
