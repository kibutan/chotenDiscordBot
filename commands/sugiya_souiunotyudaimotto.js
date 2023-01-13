const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sugiya_souiunotyudaimotto")
    .setDescription("ちょうだい ちょうだい そういうのちょうだい もっと"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1062345065881677865/r1280x720l.png",
      ],
    });
  },
};
