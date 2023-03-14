const { SlashCommandBuilder } = require("@discordjs/builders");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("futokuneette")
    .setDescription("女の子足太いよ 太くない 太ぇって!!! 太くねぇって!!!!"),
  async execute(interaction) {
    await interaction.deferReply();
    await interaction.editReply({
      files: [
        "https://cdn.discordapp.com/attachments/1066922904131997797/1084675654689239071/IMG_8532.jpg",
      ],
    });
  },
};
