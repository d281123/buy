///Ubah Nama Bot dan Owner Semuanya Di Control.json
///Walau Ke enc Watermark Tetap bisa kalian ubah di control.json
//Reupload kasih Link channel Saya untuk menghargai Creator dan Tim
const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const deff = new WAConnection()
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const spin = require('spinnies')
const util = require('util')
const CFonts = require('cfonts');
var figlet = require('figlet')
const hour_now = moment().format('HH:mm:ss')
const term = require('terminal-kit').terminal
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")

const fetch = require('node-fetch')
const { color, bgcolor, DEFFlog } = require('./lib/color')
const { exec } = require('child_process')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, info, close } = require('./lib/yntkts')
const { start, success } = require('./lib/functionss')
const waiting = (id, text) => {
    spins.add(id, { text: text })
}
spc1 = '         '
spc2 = '\n                           '
spc3 = '                   '
spc4 = '               '
const control = JSON.parse(fs.readFileSync('./control.json'))
baterai = 'unknown'
NamaOwner = `${control.NamaOwner}`
NamaBot = `${control.NamaBot}`
NomorOwner = `${control.NomorOwner}`

charging = 'unknown'
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}
require('./deff.js')
nocache('./deff.js', module => console.log(`${module} is now updated!`))
//button nya

const ftroli = { key: { fromMe: false, "participant": "0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us" }, "message": { orderMessage: { itemCount: 10, status: 200, thumbnail: fs.readFileSync(`./foto/deff.jpg`), surface: 200, message: `【RUSHBOTZ】`, orderTitle: 'Dhani', sellerJid: '0@s.whatsapp.net' } }, contextInfo: { "forwardingScore": 999, "isForwarded": true }, sendEphemeral: true }
const spinner = {
    "interval": 0.00000003,
    "frames": [
        "-",
        "|",
        "/",
        






    ]
}
let globalSpinner;


const getGlobalSpinner = (disableSpins = false) => {
    if (!globalSpinner) globalSpinner = new spin({ color: 'cyan', succeedColor: 'red', spinner, disableSpins });
    return globalSpinner;
}

spins = getGlobalSpinner(false)


const starts = async (deff = new WAConnection()) => {
    CFonts.say(`DEFF-V2`, {
        font: 'chrome',
        align: 'center',
        gradient: ['red', 'magenta']
      })
    deff.logger.level = 'warn'
    
    console.log(color(`${spc2}                      [ • CREATOR BOT RUSHBOTZ • ]` ,'cyan'))
console.log(color(`${spc4}                       < ================================================== >`, 'purple'))
console.log(color(`${spc3}                    [•]`, 'aqua'), color(`Hai         : OWNER RUSH`, 'yellow'))
console.log(color(`${spc3}                    [•]`, 'aqua'), color(`Bot Version : 2.1.2`, 'yellow'))
console.log(color(`${spc3}                    [•]`, 'aqua'), color(`Status      : Online!`, 'yellow'))
console.log(color(`${spc3}                    [•]`, 'aqua'), color(`Owner       : DHANI`, 'yellow'))
console.log(color(`${spc4}                       < ================================================== >`, 'purple'))



    deff.browserDescription = ['CONNECT TO RUSHBOTZ', 'Aliho', '5.4.4']

    deff.on('qr', () => {
        console.log(color('[', 'yellow'), color('!', 'red'), color(']', 'yellow'), color(' Scan bang'))
    })

    fs.existsSync('./deffqr.json') && deff.loadAuthInfo('./deffqr.json')
    deff.on('connecting', () => {
        start('2', 'Connecting...')
    })
    deff.on('open', () => {
        success('2', 'CONNECT')
       
        setTimeout(() => {
        }, 1000)
    })
    await deff.connect({ timeoutMs: 30 * 1000 })
    fs.writeFileSync('./deffqr.json', JSON.stringify(deff.base64EncodedAuthInfo(), null, '\t'))
    buttonss = [
        { buttonId: `.tes`, buttonText: { displayText: 'ok' }, type: 1 },
    ]

    buttonMessagee = {
        contentText: `BOT TELAH AKTIF ©RUSHBOTZ`,
        footerText: `©${control.watermark2}`,
        buttons: buttonss,
        headerType: 1
    }
    deff.sendMessage(`${control.NomorOwner}@s.whatsapp.net`, buttonMessagee, MessageType.buttonsMessage, {
        caption: '[ • BOTWEA • ]',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,

        },
        quoted: ftroli, sendEphemeral: true
    })

    deff.on('ws-close', () => {
        console.log(color('Koneksi terputus, mencoba menghubungkan kembali..'))
    })

    // Mengkoneksi ulang
    deff.on('close', async ({ reason, isReconnecting }) => {
        console.log(color('Terputus, Alasan :' + reason + '\nMencoba mengkoneksi ulang :' + isReconnecting))
        if (!isReconnecting) {
            console.log(color('Connect To Phone Rejected and Shutting Down.'))
        }
    })

    // Baterai

    deff.on('CB:action,,battery', json => {

        global.batteryLevelStr = json[2][0][1].value

        global.batterylevel = parseInt(batteryLevelStr)

        baterai = batterylevel

        if (json[2][0][1].live == 'true') charging = true

        if (json[2][0][1].live == 'false') charging = false

        console.log(json[2][0][1])

        console.log('Baterai lu : ' + batterylevel + '%')

    })

    global.batrei = global.batrei ? global.batrei : []

    deff.on('CB:action,,battery', json => {

        const batteryLevelStr = json[2][0][1].value

        const batterylevel = parseInt(batteryLevelStr)

        global.batrei.push(batterylevel)

    })

    deff.on('chat-update', async (message) => {
        require('./deff.js')(deff, message)
        ownerNumber = [`${control.NomorOwner}@s.whatsapp.net`, `${control.NomorOwner}@s.whatsapp.net`, `${control.NomorOwner}@s.whatsapp.net`]
        dtod = `${control.NomorOwner}@s.whatsapp.net`
        otod = `${control.NomorOwner}@s.whatsapp.net`
    })
    waiting('Connected', '')
    deff.on('group-participants-update', async (anu) => {
        mem = anu.participants[0]
        const mdata = await deff.groupMetadata(anu.jid)
        try {
            console.log(anu)
            if (anu.action == 'add') {
                const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
                if (!welkom.includes(mdata.id)) return
                fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {}) }, message: { "contactMessage": { "displayName": `${mdata.subject}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:2;deff;;;\nFN:deff\nitem1.TEL;waid=6283112170548:6283112170548\nitem1.X-ABLabel:Mobile\nEND:VCARD` } } }
                num = anu.participants[0]
                try {
                    ppimg = await deff.getProfilePicture(`${num.split('@')[0]}@c.us`)
                } catch {
                    ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                } 
                try{
                pp_grup = await deff.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            memeg = mdata.participants.length
            	num = anu.participants[0]
                let v = deff.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                let buff = await getBuffer(`https://api.lolhuman.xyz/api/base/welcome?apikey=${control.lolkey}&img1=${ppimg}&img2=${pp_grup}&background=https://telegra.ph/file/1e0b139d6e3b3fe43505b.jpg&username=${encodeURI(anu_user)}&member=${memeg}&groupname= ${encodeURI(mdata.subject)}`)
                masuk = `Halo @${num.split('@')[0]}\nSelamat Datang Di ${mdata.subject}`
                gbutsan = [{ buttonId: 'SERAH', buttonText: { displayText: '👋Welcome' }, type: 1 }]
                mhan = await deff.prepareMessage(mdata.id, buff, MessageType.image, { thumbnail: buff })
                  const buttonMessages = {
                    imageMessage: mhan.message.imageMessage,
                    contentText: `${masuk}`,
                    footerText: `Welcome  Information`,
                    buttons: gbutsan,
                    headerType: 4
                }
                deff.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, { thumbnail: fs.readFileSync('./foto/deff.jpg'), "contextInfo": { mentionedJid: [num] }, caption: 'Tes', quoted: ftroli })
            } else if (anu.action == 'remove') {
                const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
                if (!welkom.includes(mdata.id)) return
                fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {}) }, message: { "contactMessage": { "displayName": `${mdata.subject}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:2;deff;;;\nFN:D H A N I\nitem1.TEL;waid=6283112170548:6283112170548\nitem1.X-ABLabel:Mobile\nEND:VCARD` } } }
                num = anu.participants[0]
                try {
                    ppimg = await deff.getProfilePicture(`${num.split('@')[0]}@c.us`)
                } catch {
                    ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
                try{
                    pp_grup = await deff.getProfilePicture(anu.jid)
                    } catch (e) {
                    pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
                }
                memeg = mdata.participants.length
            	num = anu.participants[0]
                let v = deff.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                let buff = await getBuffer(`https://api.lolhuman.xyz/api/base/leave?apikey=Deffbotz&img1=${ppimg}&img2=${pp_grup}&background=https://telegra.ph/file/1e0b139d6e3b3fe43505b.jpg&username=${encodeURI(anu_user)}&member=${memeg}&groupname= ${encodeURI(mdata.subject)}`)
                keluar = `Selamat tinggal @${num.split('@')[0]}\nSemoga tenang disana`
                gbutsan = [{ buttonId: 'SERAH', buttonText: { displayText: '👋Byee' }, type: 1 }]
                mhan = await deff.prepareMessage(mdata.id, buff, MessageType.image, { thumbnail: buff })
                const buttonMessages = {
                    imageMessage: mhan.message.imageMessage,
                    contentText: `${keluar}`,
                    footerText: `Leave Information`,
                    buttons: gbutsan,
                    headerType: 4
                }
                deff.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, { thumbnail: fs.readFileSync('./foto/deff.jpg'), "contextInfo": { mentionedJid: [num] }, caption: 'Tes', quoted: ftroli})
            } else if (anu.action == 'promote') {
                fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {}) }, message: { "contactMessage": { "displayName": `${mdata.subject}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:2;deff;;;\nFN:deff\nitem1.TEL;waid=6283112170548:6283112170548\nitem1.X-ABLabel:Mobile\nEND:VCARD` } } }
                shp = '◦➛'
                var thu = await deff.getStatus(anu.participants[0], MessageType.text)
                num = anu.participants[0]
                teks = `*P R O M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}\n\nDon't break the rules!`
                deff.sendMessage(mdata.id, teks, MessageType.text, { contextInfo: { "mentionedJid": [num] }, quoted: fkontakk })
                console.log(DEFFlog('|TRM|'), DEFFlog(`Promote Member ${num.split('@')[0]} In ${mdata.subject}`, 'cyan'))
            }
            else if (anu.action == 'demote') {
                fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {}) }, message: { "contactMessage": { "displayName": `${mdata.subject}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:2;deff;;;\nFN:deff\nitem1.TEL;waid=6283112170548:6283112170548\nitem1.X-ABLabel:Mobile\nEND:VCARD` } } }
                shp = '◦➛'
                thu = await deff.getStatus(anu.participants[0], MessageType.text)
                num = anu.participants[0]
                teks = `*D E M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}`
                deff.sendMessage(mdata.id, teks, MessageType.text, { contextInfo: { "mentionedJid": [num] }, quoted: fkontakk })
                console.log(DEFFlog('|TRM|'), DEFFlog(`Demote Admin ${num.split('@')[0]} In ${mdata.subject}`, 'cyan'))
            }
        } catch (e) {
            console.log('Error : %s', DEFFlog(e, 'red'))
        }
    })

    deff.on('group-update', async (anu) => {
        const metdata = await deff.groupMetadata(anu.jid)
        const fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {}) }, message: { "contactMessage": { "displayName": `${metdata.subject}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:2;deff;;;\nFN:deff\nitem1.TEL;waid=6283112170548:6283112170548\nitem1.X-ABLabel:Mobile\nEND:VCARD` } } }
        if (anu.announce == 'false') {
            teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
            deff.sendMessage(metdata.id, teks, MessageType.text, { quoted: fkontakk })
            console.log(DEFFlog('|INFO|'), DEFFlog(`Group Opened In ${metdata.subject}`, 'cyan'))
        }
        else if (anu.announce == 'true') {
            teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
            deff.sendMessage(metdata.id, teks, MessageType.text, { quoted: fkontakk })
            console.log(DEFFlog('|INFO|'), DEFFlog(`Group Closed In ${metdata.subject}`, 'cyan'))
        }
        else if (!anu.desc == '') {
            tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
            teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
            deff.sendMessage(metdata.id, teks, MessageType.text, { contextInfo: { "mentionedJid": [tag] }, quoted: fkontakk })
            console.log(DEFFlog('|INFO|'), DEFFlog(`Group Description Change In ${metdata.subject}`, 'cyan'))
        }
        else if (anu.restrict == 'false') {
            teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
            deff.sendMessage(metdata.id, teks, MessageType.text, { quoted: fkontakk })
            console.log(DEFFlog('|INFO|'), DEFFlog(`Group Setting Change In ${metdata.subject}`, 'cyan'))
        }
        else if (anu.restrict == 'true') {
            teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
            deff.sendMessage(metdata.id, teks, MessageType.text, { quoted: fkontakk })
            console.log(DEFFlog('|INFO|'), DEFFlog(`Group Setting Change In ${metdata.subject}`, 'cyan'))
        }
    })

    deff.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `${NamaOwner}` + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + `${NomorOwner}` + ':+' + `${NomorOwner}` + '\n' + 'END:VCARD'
        deff.sendMessage(callerId, "\`\`\`[ ! ] CALL DETECTED [ ! ]\`\`\`\n\n\`\`\`Anda Di Block Karena Telepon Bot , Silahkan Hubungi Developer Bot Untuk Membuka Block\`\`\`", MessageType.text)
        deff.sendMessage(callerId, { displayname: `${NamaOwner}`, vcard: vcard }, MessageType.contact, { contextInfo: { externalAdReply: { title: `Developer ${NamaBot}`, body: "", previewType: "PHOTO", thumbnail: fs.readFileSync('./foto/deff.jpg'), sourceUrl: `https://wa.me/6283112170548?text=Assalamualaikum` } } })
        await sleep(5000)
        await deff.blockUser(callerId, "add")
    })
}

console.clear()
var progressBar, progress = 0;
function doProgress() {
    progress += Math.random() / 10;
    progressBar.update(progress);

    if (progress >= 1) {
        setTimeout(function () {
            console.clear(),
            exec(`screenfetch -A Deepin`, (error, stdout, stderr) => {
                console.log(stdout), console.log(bgDEFFlog('https://github.com/D1602', 'cyan'))
            })
        }, 200);
    }
    else {
        setTimeout(doProgress, 100 + Math.random() * 400);
    }
}

function nocache(module, cb = () => { }) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
starts()