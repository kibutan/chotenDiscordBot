const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hitsuyoudattamono")
    .setDescription("顧客が本当に必要だったもの"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1055122634817409024/project_comedy_l.jpg",
      ],
    });
  },
};
