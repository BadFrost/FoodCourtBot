'use strict'

const fs = require('fs');
const axios = require('axios');
const { token } = require('../server/config');
const { getDb } = require('../server/mongo');
const messages = JSON.parse(fs.readFileSync('utils/messages.json', 'utf8'));

let writeUser = async msg => {
    let db = getDb();
    let user = await db.collection('users').findOne({ userId: msg.from.id });
    if (!user) {
        await db.collection('users').insertOne({ userId: msg.from.id, name: msg.from.first_name, menuState: 0 });
    } else {
        await db.collection('users').updateOne({ userId: msg.from.id }, {$set: {name: msg.from.first_name, menuState: 0 } });
    };
};

const start = async msg => {
    await writeUser(msg);
    axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: msg.chat.id,
        text: messages.start.replace(/\$link/g, `<a href="tg://user?id=${msg.from.id}">${msg.from.first_name}</a>`),
        disable_web_page_preview: true,
        parse_mode: 'HTML',
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Мой заказ', callback_data: 'viewOrder'}],
                [{text: 'Меню', callback_data: 'menu'}]
            ]
        })
    })
    .catch(err => {
        console.log(err)
    });
};

module.exports = { start }