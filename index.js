
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})




const Dlang = require("discordbot-script");
const script = require("discordbot-script");
const Discord = require("discord.js")
const Database = require("@replit/database")
const db = new Database()
db.set("key", "value").then(() => {});
db.get("key").then(value => {});
db.delete("key").then(() => {});
db.list().then(keys => {});
db.list("prefix").then(matches => {});
const bot = new script({
  token: process.env.token,
  prefix: ["$getServerVar[prefix]"]
})
bot.Variables({
  money: 500,
  afkmsg: "",
  afk: "off",
  work: "",
  pingsafk: 0,
  mute: "",
  cooldown: "5m",
  suggestchannel: " ",
  prefix: "!!",
  pollchannel: "",
  premium: "off",
  antilink: "off",
  xp: "0",
  level: "0",
  req: "50",
  warns: "0",
  bank: "0",
  bankreq: "0",
  snipeuser: "",
  snipemessage: "",
  snipeuserav: "",
  nicker: "",
  nickperson: "",
  tv: 0,
  cellphone: 0,
  fish: 0,
  fishingrod: 0,
  count: 0,
  countch: '',
  countlast: ''
})

bot.Status({
  0: {
    description: "ppl @ me | $serverCount servers",
    type: "WATCHING"
  }

},12000)



bot.MessageEvent()

bot.ExecutableCommand({
  name: "lost",
  code: `
  $setUserVar[money;$sub[$getUserVar[money];$message[1]]]
  $title[You lost]
  $description[You just lost the gambling! You lost $message[1]$]

  `
})
bot.ExecutableCommand({
  name: "won",
  code: `
  $title[You won]
  $description[You won a gambling game and won $message[1]$ !]
  $setUserVar[money;$sum[$getUserVar[money];$message[1]]]
  `

})

bot.MessageDeleteCommand({
  name: "$channelID[]",
  code: `
  $setServerVar[snipeuserav;$authorAvatar]
  $setServerVar[snipeuser;$username[]#$discriminator[]]
  $setServerVar[snipemessage;$message[]]
  $onlyIf[$message[]!=;]
  `
})
bot.onMessageDelete()

const fs = require('fs');
const {
    notDeepEqual
} = require("assert");
const {
    time
} = require("console");
const folders = fs.readdirSync("./commands/")

for (const files of folders) {
    const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

    for (const commands of folder) {
        const command = require(`./commands/${files}/${commands}`)
        bot.Command({
            name: command.name,
            aliases: command.aliases,
            description: command.description,
            api: command.api,
            code: command.code,
        })
    }
}
bot.AwaitedCommand({
  name: "uber",
  code: `
  You searched **Uber** and got **$random[10;200]**$
  $setUserVar[money;$sum[$getUserVar[money];$random[10;200]]]
  $cooldown[10m;]
  `
})
bot.AwaitedCommand({
  name: "dumpster",
  code: `
  You searched **Dumpster** and got **$random[10;200]**$
  $setUserVar[money;$sum[$getUserVar[money];$random[10;200]]]
  $cooldown[10m;]
  `
})
bot.AwaitedCommand({
  name: "hospital",
  code: `
  You searched **Hospital** and got **$random[10;200]**$
  $setUserVar[money;$sum[$getUserVar[money];$random[10;200]]]
  $cooldown[10m;]
  `
})
bot.SpaceCommand({
  name: "afk",
  code: `
  $username[$mentioned[1]] is AFK: $getVar[afkmsg;$mentioned[1]]
  $setVar[pingsafk;$sum[$getVar[pingsafk];1];$mentioned[1]]
  $onlyIf[$getVar[afk;$mentioned[1]]==on;]
  $onlyIf[$getVar[afk;$authorID]==off;]
  `
})
bot.SpaceCommand({
  name: "aafk",
  code: `
  $setVar[pingsafk;0;$authorID]
  $title[Welcome Back!]
  $description[$username[], You got $getVar[pingsafk;$authorID] pings while you were AFK]
  $setVar[afk;off;$authorID]
  $onlyIf[$getVar[afk;$authorID]==on;]
  `
})
bot.JoinedCommand({
name: "765284321590116363",
code: `
$giveRole[$authorID;765285585572986960]
$username[] Just Joined! Have fun!
`
})
bot.onJoined()

bot.ExecutableCommand({
  name: "help1",
  code: `
  $title[Moderation Commands]
  $description[\`tempban\`,\`tempmute\`,\`antilink\`,\`warn\`,\`warns\`,\`clearwarns\`]
  `
})
bot.ExecutableCommand({
  name: "help2",
  code: `
  $title[Fun Commands]
  $description[\`joke\`,\`meme\`,\`simp\`,\`coinflip\`]
  `
})
bot.ExecutableCommand({
  name: "help3",
  code: `
  $title[Economy Commands]
  $description[\`addmoney\`,\`balance\`,\`crime\`,\`leaderboard\`,\`search\`,\`work\`,\`beg\`, \`weekly\`,\`event\`]
  `
})

bot.ExecutableCommand({
  name: "help4",
  code: `
  $title[Image Commands]
  $description[\`captcha\`,\`blur\`,\`achievement\`,\`clyde\`,\`magik\`,\`rip\`,\`trash\`,\`tweet\`,\`youtube\`,\`calling\`,\`avatar\`,\`supreme\`,\`pornhub(fun image)\`,\`whodidit\`]
  `
})
bot.ExecutableCommand({
  name: "help5",
  code: `
  $title[Utility Commands]
  $description[\`afk\`,\`help\`,\`invite\`,\`lyrics\`,\`ping\`,\`say\`,\`serverinfo\`,\`support\`,\`userinfo\`,\`pollchannel\`,\`suggest\`,\`poll\`,\`setprefix\`,\`poll\`,\`suggestionchannel\`,\`nick\`]
  `
})
bot.ExecutableCommand({
  name: "help6",
  code: `
  $title[NSFW Commands]
  $description[\`bagguete\`,\`hentai\`,\`neko\`]
  `
})

bot.ReadyCommand({
  name: "765582369893384233",
  code:`
I am now online logged in with $username[$client[id]]#$discriminator[$client[id]]
`
})
bot.SpaceCommand({
  name: "antilink",
  code: `
  $deletecommand[1ms]
  $title[Link Warning]
  $description[Antilink just worked out nicely, deleted link of <@$authorID>]
  $onlyIfMessageContains[.gg;https;www;discord.gg;https://discord.com/invite;.com;.co;.net;.gle;.lol;.io;.org;.edu;.int;]
  $onlyIf[$authorID!=$ownerID;]
  $onlyIf[$getServerVar[antilink]==on;]
  `
})
bot.AwaitedCommand({
  name: "on",
  code: `
  $title[Success]
  $description[Turned on antilink protection]
  $setServerVar[antilink;on]
  `
})
bot.AwaitedCommand({
  name: "off",
  code: `
  $title[Success]
  $description[Turned off antilink protection]
  $setServerVar[antilink;off]
  `
})
bot.SpaceCommand({
  name: "botmention",
  code: `
  Hello, my actual prefix is $getServerVar[prefix]
  $onlyIfMessageContains[<@$client[id]>;<@!$client[id]>;]
  `
})
bot.ExecutableCommand({
  name: "removepc",
  code: `
  Successfully removed poll channel!
  $setServerVar[pollchannel;]
  $onlyPerms[manageserver;You do not have permission to do]
  `
})
bot.ExecutableCommand({
  name: "removesc",
  code: `
  Successfully removed suggestion channel!
  $setServerVar[suggestchannel;]
  $onlyPerms[manageserver;You do not have permission to do]
  `
})
bot.ExecutableCommand({
  name: "nsfw",
  code: `
  $description[This command can only be used in NSFW marked channels!]
  $image[https://i.imgur.com/oe4iK5i.gif]
  `
})
bot.ExecutableCommand({
  name: "fishingrod",
  code: `
  $title[Bought]
  $description[You bought $message[2] fishing poles and paid $multiply[2000;$message[2]]$]
  $setUserVar[fishingpole;$sum[$getUserVar[fishingpole];$message[2]]]
  $setUserVar[money;$sub[$getUserVar[money];$multiply[2000;$message[2]]]]
  $onlyIf[$getUserVar[money]>2000;{description:You need 2k$ to buy that!}]
  $onlyIf[$isNumber[$message[2]]==true;{description:Dont try to scam me, give me a valid number!}]
  `
})