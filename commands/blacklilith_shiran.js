const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("blacklilith_shiran")
    .setDescription("しらん"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1050409541688369172/LastOrigin_02.png",
      ],
    });
  },
};
