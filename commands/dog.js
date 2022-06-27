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
  data: new SlashCommandBuilder().setName("dog").setDescription("random dog"),
  async execute(interaction) {
    const dogResult = await request("https://dog.ceo/api/breeds/image/random");
    const { message } = await getJSONResponse(dogResult.body);
    await interaction.reply({ files: [message] });
  },
};
