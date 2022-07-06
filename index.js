// ローカル開発用モジュール
// const dotenv = require("dotenv");
// dotenv.config();

// command/commandName.js 検索に使う
const fs = require("node:fs");
const path = require("node:path");

const {
  Client,
  Collection,
  Intents,
  MessageAttachment,
} = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const cron = require("node-cron");

// SlashCommand登録用モジュール
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const commandsArray = [];
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));
client.commands = new Collection();
for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  client.commands.set(command.data.name, command);
}

const { MessageActionRow, MessageButton } = require("discord.js");

const isPong = (msg) => {
  if (/pong/gi.test(msg.content)) return true;
  return false;
};

const isCmp = (msg) => {
  if (
    /^(((?:ち|チ|ﾁ)(?:○|ん|ン|ﾝ)(?:ぽ|ポ|ﾎﾟ|こ|コ|ｺ)))$|^((?:ち|チ|ﾁ)(?:○|ん|ン|ﾝ)(?:ち|チ|ﾁ)(?:○|ん|ン|ﾝ))$|^(chi[n|m]po)$/gi.test(
      msg.content
    )
  )
    return true;
  return false;
};

client.on("ready", (client) => {
  console.log(`Logged in as ${client.user.tag}!`);
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    commandsArray.push(command.data.toJSON());
  }
  const rest = new REST({ version: "9" }).setToken(process.env.DISCORD_TOKEN);
  rest
    .put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      {
        body: commandsArray,
      }
    )
    .then(() => console.log("Successfully registered application commands."))
    .catch(console.error);
});

client.on("messageCreate", (message) => {
  if (isPong(message)) {
    message
      .reply({ files: [new MessageAttachment("./pic/dance.gif")] })
      .catch(console.error);
    message.react("💃").then(console.log).catch(console.error);
  }
  if (isCmp(message)) {
    message.react("943508904292261918").then(console.log).catch(console.error);
  }
});

client.on("interactionCreate", async (interaction) => {
  if (interaction.customId === "primary") {
    await interaction.reply({ content: "†昇天†" });
  }
  if (!interaction.isCommand()) return;
  const command = client.commands.get(interaction.commandName);
  if (!command) return;
  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
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
