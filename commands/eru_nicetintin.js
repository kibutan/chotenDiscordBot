const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("eru_nicetintin")
    .setDescription("ナイスちんちん！"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1058732599431942245/kairi_stamp01omake.png",
      ],
    });
  },
};
