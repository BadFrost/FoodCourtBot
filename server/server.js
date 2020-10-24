'use strict'

const telegraf = require('telegraf');
const extIP = require('external-ip');
const { token } = require('./config');
const { connectToServer } = require('./mongo');
const bot = new telegraf(token);
 
let getIP = extIP({
    replace: true,
    services: ['https://ipinfo.io/ip', 'http://ifconfig.co/x-real-ip', 'http://ifconfig.io/ip'],
    timeout: 600,
    getIP: 'parallel',
    userAgent: 'Chrome 15.0.874 / Mac OS X 10.8.1'
});

bot.telegram.deleteWebhook().then(() => {
    connectToServer(err => {
        if (err) {
            console.log(err);
            return
        } else {
            console.log('DB Connected!');
            getIP((err, ip) => {
                if (err) throw err
                bot.telegram.setWebhook(...[ip, null, 6000]);
                console.log(`Bot running on local machine!\nIP: ${ip}`);
                bot.launch();
            });
        };
    });
});

module.exports = bot