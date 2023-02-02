const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sugimoto_yariyagatta")
    .setDescription("やりやがった!! マジかよあの野郎ッ やりやがったッ!!"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1070629992611979274/image.png",
      ],
    });
  },
};
