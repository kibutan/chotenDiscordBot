const { SlashCommandBuilder } = require("@discordjs/builders");
const { request } = require("undici");
async function getJSONResponse(body) {
  let fullBody = "";

  for await (const data of body) {
    fullBody += data.toString();
  }
  return JSON.parse(fullBody);
}

const statusChange = {
  status: "ストレス",
  value: -1,
};

module.exports = {
  data: new SlashCommandBuilder().setName("cat").setDescription("random cat"),
  async execute(interaction) {
    const catResult = await request(
      "https://api.thecatapi.com/v1/images/search"
    );
    const res = await getJSONResponse(catResult.body);
    const { url } = res[0];
    await interaction.reply({ files: [url] });
    await axios.post(
      "https://script.google.com/macros/s/AKfycbwMZ8P5jt7O9rQJugO5IfQYLrSRWT04uviLI5o3lngVazr5EDjcnPOaoY2w_05m6Vct/exec",
      statusChange
    );
  },
};
