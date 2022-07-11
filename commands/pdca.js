const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder().setName("pdca").setDescription("pdca cycle"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://cdn.discordapp.com/attachments/834044144162308120/996026573398487120/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f35343234302f39366332303531352d363362392d643439632d663464322d3436396161623864613236622e676966.gif",
      ],
    });
  },
};
