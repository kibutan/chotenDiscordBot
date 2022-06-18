const fs = require("node:fs");
const path = require("node:path");
const Discord = require("discord.js");
const cron = require("node-cron");
const dotenv = require("dotenv");
dotenv.config();

const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

client.commands = new Discord.Collection();
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  console.log("file", file);
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  client.commands.set(command.data.name, command);
}

const isPing = (msg) => {
  if (/ping/gi.test(msg.content)) return true;
  return false;
};

const isPong = (msg) => {
  if (/pong/gi.test(msg.content)) return true;
  return false;
};

client.on("ready", (client) => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
  if (isPing(message)) {
    message.reply("最高か").catch(console.error);
    message.react("👏").then(console.log).catch(console.error);
  }
  if (isPong(message)) {
    message
      .reply({ files: [new Discord.MessageAttachment("./pic/dance.gif")] })
      .catch(console.error);
    message.react("💃").then(console.log).catch(console.error);
  }
});

// UTC13時 = 日本時間22時
cron.schedule("0 0 13 * * *", () => {
  client.channels.cache
    .get(process.env.BOT_CHANNEL_ID)
    .send(
      "ジェルばんは！\n" +
        "あなたのインターネット・エンジェル超てんちゃんだよ💖\n" +
        "出会い厨と指示厨以外は仲良くしてね‼️"
    );
});

// client.login() は引数がなければ(HEROKUのCofig varsに登録してある)DISCORD_TOKENを使用します
client.login().catch(console.error);
//Ref.) https://qiita.com/InkoHX/items/590b5f15426a6e813e92#:~:text=DISCORD_TOKEN%E3%81%8C%E3%82%AD%E3%83%BC%E3%81%A8%E3%81%AA%E3%82%8B%E3%82%8F%E3%81%91%E3%81%A7%E3%81%99%E3%81%8C%E3%80%81Discord.js%E3%81%AFClient%23login%E3%81%8C%E5%AE%9F%E8%A1%8C%E3%81%95%E3%82%8C%E3%81%9F%E9%9A%9B%E3%81%AB%E3%80%81%E5%BC%95%E6%95%B0%E3%81%AB%E4%BD%95%E3%82%82%E3%81%AA%E3%81%91%E3%82%8C%E3%81%B0DISCORD_TOKEN%E3%81%AB%E7%99%BB%E9%8C%B2%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%83%88%E3%83%BC%E3%82%AF%E3%83%B3%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%82%88%E3%81%86%E3%81%A8%E3%81%97%E3%81%BE%E3%81%99%E3%80%82
