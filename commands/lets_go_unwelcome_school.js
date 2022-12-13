const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lets_go_unwelcome_school")
    .setDescription("lets_go Unwelcome school"),
  async execute(interaction) {
    await interaction.reply({
      embeds: [
        {
          color: 0x63b3ed,
          title:
            "Let's Go!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
          url: "https://www.youtube.com/watch?v=MeIr__26dAw",
          author: {
            name: "ｽﾐﾜｹ",
          },
          thumbnail: {
            url: "https://cdn.discordapp.com/attachments/881408091986481162/1052190569549537370/image.png",
          },
        },
      ],
    });
  },
};
