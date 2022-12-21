const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hitsuyoudattamono")
    .setDescription("顧客が本当に必要だったもの"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/881408091986481162/1054729021591654440/IMG_7969.png",
      ],
    });
  },
};
