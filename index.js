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

const row = new MessageActionRow().addComponents(
  new MessageButton()
    .setCustomId("primary")
    .setLabel("†昇天†")
    .setStyle("PRIMARY")
);

client.on("ready", (client) => {
  console.log(`Logged in as ${client.user.tag}!`);
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

cron.schedule("0 0 13 * * *", () => {
  client.channels.cache.get("881408091986481162").send({
    content:
      "ジェルばんは！\n" +
      "あなたのインターネット・エンジェル超てんちゃんだよ💖\n" +
      "出会い厨と指示厨以外は仲良くしてね‼️",
    components: [row],
  });
});

client.login().catch(console.error);
