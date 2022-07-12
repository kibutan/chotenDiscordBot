const { SlashCommandBuilder } = require("@discordjs/builders");
const { request } = require("undici");
// const dotenv = require("dotenv");
// dotenv.config();

async function getJSONResponse(body) {
  let fullBody = "";

  for await (const data of body) {
    fullBody += data.toString();
  }
  return JSON.parse(fullBody);
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName("wakka")
    .setDescription("ワッカさんからありがたい一言をもらいます"),
  async execute(interaction) {
    const chatResult = await request(
      "https://sheets.googleapis.com/v4/spreadsheets/1cQYX5KMC2ABHxCRKkj3Sa84FkP9EJY-UNjQW8urrPSw/values/wakka?key=" +
        process.env.GOOGLE_API_KEY
    );
    const { values } = await getJSONResponse(chatResult.body);
    console.log(values.length);
    const random = Math.floor(Math.random() * (values.length - 1)) + 1;
    console.log(random);

    await interaction.reply({
      embeds: [
        {
          color: 0x0099ff,
          author: {
            name: "ワッカ",
            icon_url:
              "https://cdn.discordapp.com/attachments/834044144162308120/996347837124198460/show_1.png",
          },
          description: values[random][0],
        },
      ],
    });
  },
};
