const Discord = require("discord.js");
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

const isPing = (msg) => {
  if (/ping/gi.test(msg.content)) return true;
  return false;
};

const isPic = (msg) => {
  if (/Pic/gi.test(msg.content)) return true;
  return false;
};

client.on("ready", (client) => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
  // if (message.content === "ping") {
  // message.reply("最高か").catch(console.error);
  // }
  if (isPing(message)) {
    message.reply("最高か").catch(console.error);
  } else if (isPic(message)) {
    message.send({ files: ["https://picsum.photos/200"] });
  }
});

client.login().catch(console.error);
