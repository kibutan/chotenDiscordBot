const { SlashCommandBuilder } = require("@discordjs/builders");
const { request } = require("undici");
async function getJSONResponse(body) {
  let fullBody = "";

  for await (const data of body) {
    fullBody += data.toString();
  }
  return JSON.parse(fullBody);
}

module.exports = {
  data: new SlashCommandBuilder().setName("fox").setDescription("random fox"),
  async execute(interaction) {
    const foxResult = await request("https://randomfox.ca/floof/");
    const res = await getJSONResponse(foxResult.body);
    const { image } = res;
    await interaction.reply({ files: [image] });
  },
};
