const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.autoblockmorroco = false //auto block 212 (true to on, false to off)
global.autokickmorroco = false //auto kick 212 (true to on, false to off) 
global.antispam = false //auto kick spammer (true to on, false to off)


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['17245423663'] //ur owner number
global.ownernomer = "17245423663" //ur owner number2
global.ownername = "𝕋𝕆𝔾𝔼 𝕀ℕ𝕌𝕄𝔸𝕂𝕀" //ur owner name
global.ytname = "YT: Kira" //ur yt chanel name
global.socialm = "GitHub: toge123456" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = "𝙶𝙾𝙹𝙾 𝚂𝙰𝚃𝙾𝚁𝚄"
global.ownernumber = '17245423663'
global.ownername = '𝕋𝕆𝔾𝔼 𝕀ℕ𝕌𝕄𝔸𝕂𝕀'
global.ownerNumber = ["17245423663@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@DGXeon"
global.websitex = "https://youtu.be/L_SIk59QeAU"
global.wagc = "https://chat.whatsapp.com/CL0rq2IZaUC14T748pthdQ"
global.themeemoji = '👅'
global.wm = "𝕋𝕆𝔾𝔼 𝕀ℕ𝕌𝕄𝔸𝕂𝕀"
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD6' //script link
global.packname = "𝕋𝕆𝔾𝔼 𝕀ℕ𝕌𝕄𝔸𝕂𝕀"
global.author = "𝙶𝙾𝙹𝙾 𝚂𝙰𝚃𝙾𝚁𝚄"
global.creator = "172454236-3@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.defaultpp = 'https://telegra.ph/file/dbfc64a3a69ea0afbde4d.jpg' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Here you go!', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
