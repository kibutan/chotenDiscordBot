// https://github.com/discordjs/guide/blob/main/code-samples/creating-your-bot/command-handling/deploy-commands.js
// 上記+dotenvでClient ID、GUILD ID読み込み

const fs = require("node:fs");
const path = require("node:path");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const dotenv = require("dotenv");
dotenv.config();

const commands = [];
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  console.log(file);
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  commands.push(command.data.toJSON());
}
const rest = new REST({ version: "9" }).setToken(process.env.TOKEN);

console.log(process.env.TOKEN + process.env.CLIENT_ID + process.env.GUILD_ID);

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
