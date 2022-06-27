const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton } = require("discord.js");
const row = new MessageActionRow().addComponents(
  new MessageButton()
    .setCustomId("primary")
    .setLabel("†昇天†")
    .setStyle("PRIMARY")
);
module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),

  async execute(interaction) {
    await interaction.reply({ content: "最高か", components: [row] });
  },
};
