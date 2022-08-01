const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("twinturbo-shout")
    .setDescription("twinturbo-shout"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://media.discordapp.net/attachments/630553822036623370/834075613643538452/twtb_uma210420.gif",
      ],
    });
  },
};
