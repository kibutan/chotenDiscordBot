const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("meshi_sake_nero")
    .setDescription("メシ食って 酒 飲んで 寝てしまえ！――――以上！"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/872798316860153866/1086585528557785128/B0AC4E33-D601-4A53-8BDE-474D99FB61DF.jpg",
      ],
    });
  },
};
