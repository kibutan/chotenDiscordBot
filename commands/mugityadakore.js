const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("mugityadakore")
    .setDescription("ワーッハッハッハッハ！ グビグビグビグビ… ダン 麦茶だこれ"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1059296737577156718/2fa050ad48658b1d530837107db78b1e.jpg",
      ],
    });
  },
};
