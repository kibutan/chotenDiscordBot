const { SlashCommandBuilder } = require("@discordjs/builders");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pipimi_hellshakeyano")
    .setDescription("あぁ、ごめん ヘルシェイク矢野のこと考えてた"),
  async execute(interaction) {
    await interaction.deferReply();
    await wait(10000);
    await interaction.editReply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1060181481252716605/pop-team-epic-hellshake.gif",
      ],
    });
  },
};
