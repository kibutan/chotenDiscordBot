const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("commando_shitaidakedesu")
    .setDescription("まだ誰か残っているか? 死体だけです。"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1061803528823263302/moviedrama-2019-08-23_03-21-00_672033.jpg",
      ],
    });
  },
};
