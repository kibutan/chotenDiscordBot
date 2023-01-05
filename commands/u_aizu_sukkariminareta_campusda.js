const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("u_aizu_sukkariminareta_campusda")
    .setDescription("すっかり見慣れたキャンパスだ。"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1060552478472540210/BPoPFyPCIAEd53n.png",
      ],
    });
  },
};
