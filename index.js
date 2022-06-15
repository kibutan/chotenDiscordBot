const Discord = require("discord.js");
const cron = require("node-cron");
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

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
  const date = new Date();
  if (isPing(message)) {
    message.reply("最高か:" + date).catch(console.error);
    message.react("👏").then(console.log).catch(console.error);
  }
  if (isPong(message)) {
    message
      .reply({ files: [new Discord.MessageAttachment("./pic/dance.gif")] })
      .catch(console.error);
    message.react("💃").then(console.log).catch(console.error);
  }
});

cron.schedule("* * * * *", () => {
  client.channels.cache
    .get("881408091986481162")
    .send(
      "ジェルばんは！\n" +
        "あなたのインターネット・エンジェル超てんちゃんだよ💖\n" +
        "出会い厨と指示厨以外は仲良くしてね‼️"
    );
});

client.login().catch(console.error);
