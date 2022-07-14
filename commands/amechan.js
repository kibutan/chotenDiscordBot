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

function isURL(string) {
  res = string.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi
  );
  return res !== null;
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName("amechan")
    .setDescription("あめちゃんからありがたい一言をもらいます"),
  async execute(interaction) {
    const chatResult = await request(
      "https://sheets.googleapis.com/v4/spreadsheets/1cQYX5KMC2ABHxCRKkj3Sa84FkP9EJY-UNjQW8urrPSw/values/amechan?key=" +
        process.env.GOOGLE_API_KEY
    );
    const { values } = await getJSONResponse(chatResult.body);
    console.log(values.length);
    const random = Math.floor(Math.random() * (values.length - 1)) + 1;
    console.log(random);
    if (isURL(values[random][0])) {
      await interaction.reply({
        embeds: [
          {
            color: 0xa52e4b,
            author: {
              name: "あめちゃん",
              icon_url:
                "https://cdn.discordapp.com/attachments/834044144162308120/996351313292054588/icon_poketter_ame_.png",
            },
            image: { url: values[random][0] },
          },
        ],
      });
    } else {
      await interaction.reply({
        embeds: [
          {
            color: 0xa52e4b,
            author: {
              name: "あめちゃん",
              icon_url:
                "https://cdn.discordapp.com/attachments/834044144162308120/996351313292054588/icon_poketter_ame_.png",
            },
            description: values[random][0],
          },
        ],
      });
    }
  },
};
