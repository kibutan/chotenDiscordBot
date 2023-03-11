const { SlashCommandBuilder } = require("@discordjs/builders");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hitonokokorotokanainka")
    .setDescription("人の心とかないんか？"),
  async execute(interaction) {
    await interaction.deferReply();
    await interaction.editReply({
      files: [
        "https://cdn.discordapp.com/attachments/1066922904131997797/1084142149269991434/IMG_9915.jpg",
      ],
    });
  },
};
