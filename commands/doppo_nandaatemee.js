const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("doppo_nandaatemee")
    .setDescription("なんだぁ てめぇ(工事中)"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/943501849519095808/1063613764567568414/doppo_nukerebaiinndayo.jpg",
      ],
    });
  },
};
