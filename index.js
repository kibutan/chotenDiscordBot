const Discord = require("discord.js");
const cron = require("node-cron");
// const dotenv = require("dotenv");
// dotenv.config();
const { SlashCommandBuilder } = require("@discordjs/builders");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

// Slash Command definition
const commands = [
  new SlashCommandBuilder().setName("doggy").setDescription("Random dog!"),
].map((command) => command.toJSON());

//for resisting commands.json
const rest = new REST({ version: "9" }).setToken(process.env.DISCORD_TOKEN);

// const dotenv = require("dotenv");
// dotenv.config();
const { request } = require("undici");

const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

const { MessageActionRow, MessageButton } = require("discord.js");

async function getJSONResponse(body) {
  let fullBody = "";
  for await (const data of body) {
    console.log("data" + data);
    fullBody += data.toString();
  }
  return JSON.parse(fullBody);
}
const isPing = (msg) => {
  if (/ping/gi.test(msg.content)) return true;
  return false;
};

const isPong = (msg) => {
  if (/pong/gi.test(msg.content)) return true;
  return false;
};

const row = new MessageActionRow().addComponents(
  new MessageButton()
    .setCustomId("primary")
    .setLabel("†昇天†")
    .setStyle("PRIMARY")
);

client.on("ready", (client) => {
  console.log(`Logged in as ${client.user.tag}!`);
  rest
    .put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      {
        body: commands,
      }
    )
    .then(() => console.log("Successfully registered application commands."))
    .catch(console.error);
});

client.on("messageCreate", (message) => {
  if (isPing(message)) {
    message
      .reply({ content: "最高か", components: [row] })
      .catch(console.error);
    message.react("👏").then(console.log).catch(console.error);
  }
  if (isPong(message)) {
    message
      .reply({ files: [new Discord.MessageAttachment("./pic/dance.gif")] })
      .catch(console.error);
    message.react("💃").then(console.log).catch(console.error);
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;
  await interaction.deferReply();

  if (interaction.customId === "primary") {
    await interaction.reply({ content: "†昇天†" });
  }
  if (commandName === "dog") {
    const dogResult = await request("https://dog.ceo/api/breeds/image/random");
    const { message } = await getJSONResponse(dogResult.body);
    console.log({ message });
    interaction.editReply({ files: [message] });
  }
});

cron.schedule("0 0 13 * * *", () => {
  client.channels.cache
    .get("881408091986481162")
    .send(
      "ジェルばんは！\n" +
        "あなたのインターネット・エンジェル超てんちゃんだよ💖\n" +
        "出会い厨と指示厨以外は仲良くしてね‼️"
    );
});

client.login().catch(console.error);
