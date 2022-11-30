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
    .setName("nemo_wants_to_fight")
    .setDescription("ポケモントレーナーの　ネモが　勝負を　しかけてきた！"),
  async execute(interaction) {
    const chatResult = await request(
      "https://sheets.googleapis.com/v4/spreadsheets/1cQYX5KMC2ABHxCRKkj3Sa84FkP9EJY-UNjQW8urrPSw/values/nemo?key=" +
        process.env.GOOGLE_API_KEY
    );
    const { values } = await getJSONResponse(chatResult.body);
    console.log(values.length);
    const random = Math.floor(Math.random() * (values.length - 1)) + 1;
    console.log(random);

    await interaction.reply({
      embeds: [
        {
          color: 0xe6b53,
          author: {
            name: "ネモ",
            icon_url:
              "https://cdn.discordapp.com/attachments/881408091986481162/1047506740641546321/Nemo_icon.jpg",
          },
          description: values[random][0],
        },
      ],
    });
  },
};
