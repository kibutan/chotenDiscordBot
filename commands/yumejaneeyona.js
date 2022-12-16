const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("yumejaneeyona")
    .setDescription('"幻想(ユメ)"じゃねぇよな…!?'),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1053252837188046848/Eh92gBBVkAIdIia.jpg",
      ],
    });
  },
};
