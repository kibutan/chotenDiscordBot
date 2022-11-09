const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("nikke_rapi")
    .setDescription("火力集中…！"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/986208932831825950/1038658412059299840/1667667018613.png",
      ],
    });
  },
};
