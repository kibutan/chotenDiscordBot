const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("shiroko_fire")
    .setDescription("銀行を襲う。"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/630553822036623370/907630559474364426/srk_blue211109.gif",
      ],
    });
  },
};
