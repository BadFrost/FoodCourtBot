'use strict'

const fs = require('fs');
const axios = require('axios');
const { token } = require('../server/config');
const { getDb } = require('../server/mongo');
const messages = JSON.parse(fs.readFileSync('utils/messages.json', 'utf8'));

const showCategories = async query => {
    let db = getDb();
    await db.collection('users').updateOne({ userId: query.from.id }, {$set: { menuState: 1 }});
    axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
        chat_id: query.from.id,
        message_id: query.message.message_id,
        text: messages.categories,
        disable_web_page_preview: true,
        parse_mode: 'HTML',
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: 'Основное', callback_data: 'main' }, { text: 'Напитки', callback_data: 'drinks' }],
                [{ text: 'Назад', callback_data: 'back' }]
            ]
        })
    })
    .catch(err => {
        console.log(err)
    });
};

const main = async query => {
    let db = getDb();
    await db.collection('users').updateOne({ userId: query.from.id }, {$set: { menuState: 2, category: 'main' }});
    axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
        chat_id: query.from.id,
        message_id: query.message.message_id,
        text: messages.main,
        disable_web_page_preview: true,
        parse_mode: 'HTML',
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: 'Бургер', callback_data: 'burger' }, { text: 'Пицца', callback_data: 'pizza' }],
                [{ text: 'Борщ', callback_data: 'borsch' }, { text: 'Шашлык', callback_data: 'kebab' }],
                [{ text: 'Блюдо Дня', callback_data: 'daily' }],
                [{ text: 'Назад', callback_data: 'back' }]
            ]
        })
    })
    .catch(err => {
        console.log(err)
    });
};

const drinks = async query => {
    let db = getDb();
    await db.collection('users').updateOne({ userId: query.from.id }, {$set: { menuState: 2, category: 'drinks' }});
    axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
        chat_id: query.from.id,
        message_id: query.message.message_id,
        text: messages.drinks,
        disable_web_page_preview: true,
        parse_mode: 'HTML',
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: 'Кола', callback_data: 'cola' }, { text: 'Кофе', callback_data: 'coffee' }],
                [{ text: 'Чай', callback_data: 'tea' }, { text: 'Соки', callback_data: 'jucies' }],
                [{ text: 'Минералка', callback_data: 'water' }],
                [{ text: 'Назад', callback_data: 'back' }]
            ]
        })
    })
    .catch(err => {
        console.log(err)
    });
};

const back = async query => {
    let db = getDb();
    let user = await db.collection('users').findOne({ userId: query.from.id });
    switch (user.menuState) {
        case 1:
            await db.collection('users').updateOne({ userId: query.from.id }, {$set: {name: query.from.first_name, menuState: 0 } });
            axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
                chat_id: query.from.id,
                message_id: query.message.message_id,
                text: messages.start.replace(/\$link/g, `<a href="tg://user?id=${query.from.id}">${query.from.first_name}</a>`),
                disable_web_page_preview: true,
                parse_mode: 'HTML',
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        [{text: 'Меню', callback_data: 'menu'}]
                    ]
                })
            })
            .catch(err => {
                console.log(err)
            });
            break;
        case 2:
            await db.collection('users').updateOne({ userId: query.from.id }, { $set: { name: query.from.first_name, menuState: 1 }, $unset: { category: 1 }});
            axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
                chat_id: query.from.id,
                message_id: query.message.message_id,
                text: messages.categories,
                disable_web_page_preview: true,
                parse_mode: 'HTML',
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        [{ text: 'Основное', callback_data: 'main' }, { text: 'Напитки', callback_data: 'drinks' }],
                        [{ text: 'Назад', callback_data: 'back' }]
                    ]
                })
            })
            .catch(err => {
                console.log(err)
            });
            break;
    };
};

module.exports = { showCategories, main, drinks, back }
