const Discord = require("discord.js");
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

const isPing = (msg) => {
  if (/ping/.test(msg.content)) return true;
};

client.on("ready", (client) => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
  // if (message.content === "ping") {
  // message.reply("最高か").catch(console.error);
  // }
  if (isPing(msg.content)) {
    message.reply("最高か").catch(console.error);
  }
});

client.login().catch(console.error);
