const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("inkling")
    .setDescription("inkling line stamp"),
  async execute(interaction) {
    await interaction.reply({
      files: ["https://c.tenor.com/xdDuzHtGWvkAAAAC/splatoon-inkling.gif"],
    });
  },
};
