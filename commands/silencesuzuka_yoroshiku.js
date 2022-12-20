const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("silencesuzuka_yoroshiku")
    .setDescription("夜露死苦…"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1054729021591654440/IMG_7969.png",
      ],
    });
  },
};
