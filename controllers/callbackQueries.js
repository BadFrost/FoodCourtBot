'use strict'

const fs = require('fs');
const axios = require('axios');
const { token } = require('../server/config');
const { getDb } = require('../server/mongo');
const messages = JSON.parse(fs.readFileSync('utils/messages.json', 'utf8'));

const plus = async query => {
    let db = getDb();
    let order = await db.collection('orders').findOne({ userId: query.from.id });
    let i;
    switch (order.currentItem) {
        case 'borsch':
            i = order.order.findIndex(x => x.name === 'Борщ');
            if (order.order[i].count < 10) {
                await db.collection('orders').findOneAndUpdate(
                    { userId: query.from.id }, 
                    { $inc: { "order.$[x].count": 1, "order.$[x].price": 30 } }, 
                    { arrayFilters: [{"x.name": 'Борщ'}], upsert: true }
                );
                axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
                    chat_id: query.from.id,
                    message_id: query.message.message_id,
                    text: messages.count,
                    disable_web_page_preview: true,
                    parse_mode: 'HTML',
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                            [{ text: '◀', callback_data: '-' }, { text: `${order.order[i].count + 1}`, callback_data: 'count' }, { text: '▶', callback_data: '+' }],
                            [{ text: 'ОК', callback_data: 'confirm' }, { text: 'Назад', callback_data: 'back' }]
                        ]
                    })
                })
                .catch(err => {
                    console.log(err)
                });
            }
            break;
        case 'burger':
            i = order.order.findIndex(x => x.name === 'Бургер');
            if (order.order[i].count < 10) {
                await db.collection('orders').findOneAndUpdate(
                    { userId: query.from.id }, 
                    { $inc: { "order.$[x].count": 1, "order.$[x].price": 50 } }, 
                    { arrayFilters: [{"x.name": 'Бургер'}], upsert: true }
                );
                axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
                    chat_id: query.from.id,
                    message_id: query.message.message_id,
                    text: messages.count,
                    disable_web_page_preview: true,
                    parse_mode: 'HTML',
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                            [{ text: '◀', callback_data: '-' }, { text: `${order.order[i].count + 1}`, callback_data: 'count' }, { text: '▶', callback_data: '+' }],
                            [{ text: 'ОК', callback_data: 'confirm' }, { text: 'Назад', callback_data: 'back' }]
                        ]
                    })
                })
                .catch(err => {
                    console.log(err)
                });
            }
            break;
        case 'pizza':
            i = order.order.findIndex(x => x.name === 'Пицца');
            if (order.order[i].count < 10) {
                await db.collection('orders').findOneAndUpdate(
                    { userId: query.from.id }, 
                    { $inc: { "order.$[x].count": 1, "order.$[x].price": 100 } }, 
                    { arrayFilters: [{"x.name": 'Пицца'}], upsert: true }
                );
                axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
                    chat_id: query.from.id,
                    message_id: query.message.message_id,
                    text: messages.count,
                    disable_web_page_preview: true,
                    parse_mode: 'HTML',
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                            [{ text: '◀', callback_data: '-' }, { text: `${order.order[i].count + 1}`, callback_data: 'count' }, { text: '▶', callback_data: '+' }],
                            [{ text: 'ОК', callback_data: 'confirm' }, { text: 'Назад', callback_data: 'back' }]
                        ]
                    })
                })
                .catch(err => {
                    console.log(err)
                });
            }
            break;
        case 'kebab':
            i = order.order.findIndex(x => x.name === 'Шашлык');
            if (order.order[i].count < 10) {
                await db.collection('orders').findOneAndUpdate(
                    { userId: query.from.id }, 
                    { $inc: { "order.$[x].count": 1, "order.$[x].price": 120 } }, 
                    { arrayFilters: [{"x.name": 'Шашлык'}], upsert: true }
                );
                axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
                    chat_id: query.from.id,
                    message_id: query.message.message_id,
                    text: messages.count,
                    disable_web_page_preview: true,
                    parse_mode: 'HTML',
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                            [{ text: '◀', callback_data: '-' }, { text: `${order.order[i].count + 1}`, callback_data: 'count' }, { text: '▶', callback_data: '+' }],
                            [{ text: 'ОК', callback_data: 'confirm' }, { text: 'Назад', callback_data: 'back' }]
                        ]
                    })
                })
                .catch(err => {
                    console.log(err)
                });
            }
            break;
        case 'cola':
            i = order.order.findIndex(x => x.name === 'Кола');
            if (order.order[i].count < 10) {
                await db.collection('orders').findOneAndUpdate(
                    { userId: query.from.id }, 
                    { $inc: { "order.$[x].count": 1, "order.$[x].price": 15 } }, 
                    { arrayFilters: [{"x.name": 'Кола'}], upsert: true }
                );
                axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
                    chat_id: query.from.id,
                    message_id: query.message.message_id,
                    text: messages.count,
                    disable_web_page_preview: true,
                    parse_mode: 'HTML',
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                            [{ text: '◀', callback_data: '-' }, { text: `${order.order[i].count + 1}`, callback_data: 'count' }, { text: '▶', callback_data: '+' }],
                            [{ text: 'ОК', callback_data: 'confirm' }, { text: 'Назад', callback_data: 'back' }]
                        ]
                    })
                })
                .catch(err => {
                    console.log(err)
                });
            }
            break;
        case 'coffee':
            i = order.order.findIndex(x => x.name === 'Кофе');
            if (order.order[i].count < 10) {
                await db.collection('orders').findOneAndUpdate(
                    { userId: query.from.id }, 
                    { $inc: { "order.$[x].count": 1, "order.$[x].price": 35 } }, 
                    { arrayFilters: [{"x.name": 'Кофе'}], upsert: true }
                );
                axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
                    chat_id: query.from.id,
                    message_id: query.message.message_id,
                    text: messages.count,
                    disable_web_page_preview: true,
                    parse_mode: 'HTML',
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                            [{ text: '◀', callback_data: '-' }, { text: `${order.order[i].count + 1}`, callback_data: 'count' }, { text: '▶', callback_data: '+' }],
                            [{ text: 'ОК', callback_data: 'confirm' }, { text: 'Назад', callback_data: 'back' }]
                        ]
                    })
                })
                .catch(err => {
                    console.log(err)
                });
            }
            break;
        case 'tea':
            i = order.order.findIndex(x => x.name === 'Чай');
            if (order.order[i].count < 10) {
                await db.collection('orders').findOneAndUpdate(
                    { userId: query.from.id }, 
                    { $inc: { "order.$[x].count": 1, "order.$[x].price": 10 } }, 
                    { arrayFilters: [{"x.name": 'Чай'}], upsert: true }
                );
                axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
                    chat_id: query.from.id,
                    message_id: query.message.message_id,
                    text: messages.count,
                    disable_web_page_preview: true,
                    parse_mode: 'HTML',
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                            [{ text: '◀', callback_data: '-' }, { text: `${order.order[i].count + 1}`, callback_data: 'count' }, { text: '▶', callback_data: '+' }],
                            [{ text: 'ОК', callback_data: 'confirm' }, { text: 'Назад', callback_data: 'back' }]
                        ]
                    })
                })
                .catch(err => {
                    console.log(err)
                });
            }
        break;
    };
};

const minus = async query => {
    let db = getDb();
    let order = await db.collection('orders').findOne({ userId: query.from.id });
    let i;
    switch (order.currentItem) {
        case 'borsch':
            i = order.order.findIndex(x => x.name === 'Борщ');
            if (order.order[i].count > 1) {
                await db.collection('orders').findOneAndUpdate(
                    { userId: query.from.id }, 
                    { $inc: { "order.$[x].count": -1, "order.$[x].price": -30 } }, 
                    { arrayFilters: [{"x.name": 'Борщ'}], upsert: true }
                );
                axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
                    chat_id: query.from.id,
                    message_id: query.message.message_id,
                    text: messages.count,
                    disable_web_page_preview: true,
                    parse_mode: 'HTML',
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                            [{ text: '◀', callback_data: '-' }, { text: `${order.order[i].count - 1}`, callback_data: 'count' }, { text: '▶', callback_data: '+' }],
                            [{ text: 'ОК', callback_data: 'confirm' }, { text: 'Назад', callback_data: 'back' }]
                        ]
                    })
                })
                .catch(err => {
                    console.log(err)
                });
            }
            break;
        case 'burger':
            i = order.order.findIndex(x => x.name === 'Бургер');
            if (order.order[i].count > 1) {
                await db.collection('orders').findOneAndUpdate(
                    { userId: query.from.id }, 
                    { $inc: { "order.$[x].count": -1, "order.$[x].price": -50 } }, 
                    { arrayFilters: [{"x.name": 'Бургер'}], upsert: true }
                );
                axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
                    chat_id: query.from.id,
                    message_id: query.message.message_id,
                    text: messages.count,
                    disable_web_page_preview: true,
                    parse_mode: 'HTML',
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                            [{ text: '◀', callback_data: '-' }, { text: `${order.order[i].count - 1}`, callback_data: 'count' }, { text: '▶', callback_data: '+' }],
                            [{ text: 'ОК', callback_data: 'confirm' }, { text: 'Назад', callback_data: 'back' }]
                        ]
                    })
                })
                .catch(err => {
                    console.log(err)
                });
            }
            break;
        case 'pizza':
            i = order.order.findIndex(x => x.name === 'Пицца');
            if (order.order[i].count > 1) {
                await db.collection('orders').findOneAndUpdate(
                    { userId: query.from.id }, 
                    { $inc: { "order.$[x].count": -1, "order.$[x].price": -100 } }, 
                    { arrayFilters: [{"x.name": 'Пицца'}], upsert: true }
                );
                axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
                    chat_id: query.from.id,
                    message_id: query.message.message_id,
                    text: messages.count,
                    disable_web_page_preview: true,
                    parse_mode: 'HTML',
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                            [{ text: '◀', callback_data: '-' }, { text: `${order.order[i].count - 1}`, callback_data: 'count' }, { text: '▶', callback_data: '+' }],
                            [{ text: 'ОК', callback_data: 'confirm' }, { text: 'Назад', callback_data: 'back' }]
                        ]
                    })
                })
                .catch(err => {
                    console.log(err)
                });
            }
            break;
        case 'kebab':
            i = order.order.findIndex(x => x.name === 'Шашлык');
            if (order.order[i].count > 1) {
                await db.collection('orders').findOneAndUpdate(
                    { userId: query.from.id }, 
                    { $inc: { "order.$[x].count": -1, "order.$[x].price": -120 } }, 
                    { arrayFilters: [{"x.name": 'Шашлык'}], upsert: true }
                );
                axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
                    chat_id: query.from.id,
                    message_id: query.message.message_id,
                    text: messages.count,
                    disable_web_page_preview: true,
                    parse_mode: 'HTML',
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                            [{ text: '◀', callback_data: '-' }, { text: `${order.order[i].count - 1}`, callback_data: 'count' }, { text: '▶', callback_data: '+' }],
                            [{ text: 'ОК', callback_data: 'confirm' }, { text: 'Назад', callback_data: 'back' }]
                        ]
                    })
                })
                .catch(err => {
                    console.log(err)
                });
            }
            break;
        case 'cola':
            i = order.order.findIndex(x => x.name === 'Кола');
            if (order.order[i].count > 1) {
                await db.collection('orders').findOneAndUpdate(
                    { userId: query.from.id }, 
                    { $inc: { "order.$[x].count": -1, "order.$[x].price": -15 } }, 
                    { arrayFilters: [{"x.name": 'Кола'}], upsert: true }
                );
                axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
                    chat_id: query.from.id,
                    message_id: query.message.message_id,
                    text: messages.count,
                    disable_web_page_preview: true,
                    parse_mode: 'HTML',
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                            [{ text: '◀', callback_data: '-' }, { text: `${order.order[i].count - 1}`, callback_data: 'count' }, { text: '▶', callback_data: '+' }],
                            [{ text: 'ОК', callback_data: 'confirm' }, { text: 'Назад', callback_data: 'back' }]
                        ]
                    })
                })
                .catch(err => {
                    console.log(err)
                });
            }
            break;
        case 'coffee':
            i = order.order.findIndex(x => x.name === 'Кофе');
            if (order.order[i].count > 1) {
                await db.collection('orders').findOneAndUpdate(
                    { userId: query.from.id }, 
                    { $inc: { "order.$[x].count": -1, "order.$[x].price": -35 } }, 
                    { arrayFilters: [{"x.name": 'Кофе'}], upsert: true }
                );
                axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
                    chat_id: query.from.id,
                    message_id: query.message.message_id,
                    text: messages.count,
                    disable_web_page_preview: true,
                    parse_mode: 'HTML',
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                            [{ text: '◀', callback_data: '-' }, { text: `${order.order[i].count - 1}`, callback_data: 'count' }, { text: '▶', callback_data: '+' }],
                            [{ text: 'ОК', callback_data: 'confirm' }, { text: 'Назад', callback_data: 'back' }]
                        ]
                    })
                })
                .catch(err => {
                    console.log(err)
                });
            }
            break;
        case 'tea':
            i = order.order.findIndex(x => x.name === 'Чай');
            if (order.order[i].count > 1) {
                await db.collection('orders').findOneAndUpdate(
                    { userId: query.from.id }, 
                    { $inc: { "order.$[x].count": -1, "order.$[x].price": -10 } }, 
                    { arrayFilters: [{"x.name": 'Чай'}], upsert: true }
                );
                axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
                    chat_id: query.from.id,
                    message_id: query.message.message_id,
                    text: messages.count,
                    disable_web_page_preview: true,
                    parse_mode: 'HTML',
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                            [{ text: '◀', callback_data: '-' }, { text: `${order.order[i].count - 1}`, callback_data: 'count' }, { text: '▶', callback_data: '+' }],
                            [{ text: 'ОК', callback_data: 'confirm' }, { text: 'Назад', callback_data: 'back' }]
                        ]
                    })
                })
                .catch(err => {
                    console.log(err)
                });
            }
            break;
    };
};

const confirm = async query => {
    axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
        chat_id: query.from.id,
        message_id: query.message.message_id,
        text: messages.confirm,
        disable_web_page_preview: true,
        parse_mode: 'HTML',
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: 'Посмотреть заказ', callback_data: 'viewOrder' }, { text: 'Заказать ещё', callback_data: 'back' }],
            ]
        })
    })
    .catch(err => {
        console.log(err)
    });
};

const viewOrder = async query => {
    let db = getDb();
    let order = await db.collection('orders').findOne({ userId: query.from.id });
    if (!order) {
        axios.post(`https://api.telegram.org/bot${token}/answerCallbackQuery`, {
            callback_query_id: query.id,
            text: 'Вы ещё ничего не заказали :(',
            show_alert: true
        })
        .catch(err => {
            console.log(err)
        });
    } else {
        await db.collection('users').updateOne({ userId: query.from.id }, {$set: { menuState: 2 }});
        let items = [];
        let sumAll = order.order.reduce((sum, current) => { return sum + current.price }, 0);
        console.log(sumAll)
        for (let i = 0; i < order.order.length; i++) {
            items.push(`\n${order.order[i].name}: ${order.order[i].count} / ${order.order[i].price} грн`);
        }
        axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
            chat_id: query.from.id,
            message_id: query.message.message_id,
            text: messages.viewOrder + `${items.join('')}` + `\n------------\nВсего: ${sumAll} грн`,
            disable_web_page_preview: true,
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{ text: 'Подтверждаю заказ', callback_data: 'ok' }],
                    [{ text: 'Заказать ещё', callback_data: 'back' }]
                ]
            })
        })
        .catch(err => {
            console.log(err)
        });
    };
};

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
                [{ text: 'Бургер, 50 грн', callback_data: 'burger' }, { text: 'Пицца, 100 грн', callback_data: 'pizza' }],
                [{ text: 'Борщ, 30 грн', callback_data: 'borsch' }, { text: 'Шашлык, 120 грн', callback_data: 'kebab' }],
                [{ text: 'Назад', callback_data: 'back' }]
            ]
        })
    })
    .catch(err => {
        console.log(err)
    });
};

const burger = async query => {
    let db = getDb();
    let order = await db.collection('orders').findOne({ userId: query.from.id });
    if (!order) {
        await db.collection('users').updateOne({ userId: query.from.id }, {$set: { menuState: 4, item: 'burger' }});
        await db.collection('orders').insertOne({ userId: query.from.id, order: [{ name: 'Бургер', count: 1, price: 50 }], currentItem: 'burger' });
        axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
            chat_id: query.from.id,
            message_id: query.message.message_id,
            text: messages.count,
            disable_web_page_preview: true,
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{ text: '◀', callback_data: '-' }, { text: '1', callback_data: 'count' }, { text: '▶', callback_data: '+' }],
                    [{ text: 'ОК', callback_data: 'confirm' }, { text: 'Назад', callback_data: 'back' }]
                ]
            })
        })
        .catch(err => {
            console.log(err)
        });
    } else {
        let i = order.order.findIndex(x => x.name === 'Бургер');
        if (i !== -1) {
            axios.post(`https://api.telegram.org/bot${token}/answerCallbackQuery`, {
                callback_query_id: query.id,
                text: 'У вас в заказе уже есть бургер!',
                show_alert: true
            })
            .catch(err => {
                console.log(err)
            });
        } else {
            await db.collection('users').updateOne({ userId: query.from.id }, {$set: { menuState: 4, item: 'burger' }});
            await db.collection('orders').updateOne({ userId: query.from.id }, { $addToSet: { order: { name: 'Бургер', count: 1, price: 50 }}});
            await db.collection('orders').updateOne({ userId: query.from.id }, {$set: { currentItem: 'burger' } });
            axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
                chat_id: query.from.id,
                message_id: query.message.message_id,
                text: messages.count,
                disable_web_page_preview: true,
                parse_mode: 'HTML',
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        [{ text: '◀', callback_data: '-' }, { text: '1', callback_data: 'count' }, { text: '▶', callback_data: '+' }],
                        [{ text: 'ОК', callback_data: 'confirm' }, { text: 'Назад', callback_data: 'back' }]
                    ]
                })
            })
            .catch(err => {
                console.log(err)
            });
        };
    };
};

const pizza = async query => {
    let db = getDb();
    let order = await db.collection('orders').findOne({ userId: query.from.id });
    if (!order) {
        await db.collection('users').updateOne({ userId: query.from.id }, {$set: { menuState: 4, item: 'pizza' }});
        await db.collection('orders').insertOne({ userId: query.from.id, order: [{ name: 'Пицца', count: 1, price: 100 }], currentItem: 'pizza' });
        axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
            chat_id: query.from.id,
            message_id: query.message.message_id,
            text: messages.count,
            disable_web_page_preview: true,
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{ text: '◀', callback_data: '-' }, { text: '1', callback_data: 'count' }, { text: '▶', callback_data: '+' }],
                    [{ text: 'ОК', callback_data: 'confirm' }, { text: 'Назад', callback_data: 'back' }]
                ]
            })
        })
        .catch(err => {
            console.log(err)
        });
    } else {
        let i = order.order.findIndex(x => x.name === 'Пицца');
        console.log(i)
        if (i !== -1) {
            axios.post(`https://api.telegram.org/bot${token}/answerCallbackQuery`, {
                callback_query_id: query.id,
                text: 'У вас в заказе уже есть пицца!',
                show_alert: true
            })
            .catch(err => {
                console.log(err)
            });
        } else {
            await db.collection('users').updateOne({ userId: query.from.id }, {$set: { menuState: 4, item: 'pizza' }});
            await db.collection('orders').updateOne({ userId: query.from.id }, { $addToSet: { order: { name: 'Пицца', count: 1, price: 100 }}});
            await db.collection('orders').updateOne({ userId: query.from.id }, {$set: { currentItem: 'pizza' } });
            axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
                chat_id: query.from.id,
                message_id: query.message.message_id,
                text: messages.count,
                disable_web_page_preview: true,
                parse_mode: 'HTML',
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        [{ text: '◀', callback_data: '-' }, { text: '1', callback_data: 'count' }, { text: '▶', callback_data: '+' }],
                        [{ text: 'ОК', callback_data: 'confirm' }, { text: 'Назад', callback_data: 'back' }]
                    ]
                })
            })
            .catch(err => {
                console.log(err)
            });
        };
    };
};

const borsch = async query => {
    let db = getDb();
    let order = await db.collection('orders').findOne({ userId: query.from.id });
    if (!order) {
        await db.collection('users').updateOne({ userId: query.from.id }, {$set: { menuState: 4, item: 'borsch' }});
        await db.collection('orders').insertOne({ userId: query.from.id, order: [{ name: 'Борщ', count: 1, price: 30 }], currentItem: 'borsch' });
        axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
            chat_id: query.from.id,
            message_id: query.message.message_id,
            text: messages.count,
            disable_web_page_preview: true,
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{ text: '◀', callback_data: '-' }, { text: '1', callback_data: 'count' }, { text: '▶', callback_data: '+' }],
                    [{ text: 'ОК', callback_data: 'confirm' }, { text: 'Назад', callback_data: 'back' }]
                ]
            })
        })
        .catch(err => {
            console.log(err)
        });
    } else {
        let i = order.order.findIndex(x => x.name === 'Борщ');
        if (i !== -1) {
            axios.post(`https://api.telegram.org/bot${token}/answerCallbackQuery`, {
                callback_query_id: query.id,
                text: 'У вас в заказе уже есть борщ!',
                show_alert: true
            })
            .catch(err => {
                console.log(err)
            });
        } else {
            await db.collection('users').updateOne({ userId: query.from.id }, {$set: { menuState: 4, item: 'borsch' }});
            await db.collection('orders').updateOne({ userId: query.from.id }, { $addToSet: { order: { name: 'Борщ', count: 1, price: 30 }}});
            await db.collection('orders').updateOne({ userId: query.from.id }, {$set: { currentItem: 'borsch' } });
            axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
                chat_id: query.from.id,
                message_id: query.message.message_id,
                text: messages.count,
                disable_web_page_preview: true,
                parse_mode: 'HTML',
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        [{ text: '◀', callback_data: '-' }, { text: '1', callback_data: 'count' }, { text: '▶', callback_data: '+' }],
                        [{ text: 'ОК', callback_data: 'confirm' }, { text: 'Назад', callback_data: 'back' }]
                    ]
                })
            })
            .catch(err => {
                console.log(err)
            });
        };
    };
};

const kebab = async query => {
    let db = getDb();
    let order = await db.collection('orders').findOne({ userId: query.from.id });
    if (!order) {
        await db.collection('users').updateOne({ userId: query.from.id }, {$set: { menuState: 4, item: 'kebab' }});
        await db.collection('orders').insertOne({ userId: query.from.id, order: [{ name: 'Шашлык', count: 1, price: 120 }], currentItem: 'kebab' });
        axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
            chat_id: query.from.id,
            message_id: query.message.message_id,
            text: messages.count,
            disable_web_page_preview: true,
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{ text: '◀', callback_data: '-' }, { text: '1', callback_data: 'count' }, { text: '▶', callback_data: '+' }],
                    [{ text: 'ОК', callback_data: 'confirm' }, { text: 'Назад', callback_data: 'back' }]
                ]
            })
        })
        .catch(err => {
            console.log(err)
        });
    } else {
        let i = order.order.findIndex(x => x.name === 'Шашлык');
        if (i !== -1) {
            axios.post(`https://api.telegram.org/bot${token}/answerCallbackQuery`, {
                callback_query_id: query.id,
                text: 'У вас в заказе уже есть шашлык!',
                show_alert: true
            })
            .catch(err => {
                console.log(err)
            });
        } else {
            await db.collection('users').updateOne({ userId: query.from.id }, {$set: { menuState: 4, item: 'kebab' }});
            await db.collection('orders').updateOne({ userId: query.from.id }, { $addToSet: { order: { name: 'Шашлык', count: 1, price: 120 }}});
            await db.collection('orders').updateOne({ userId: query.from.id }, {$set: { currentItem: 'kebab' } });
            axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
                chat_id: query.from.id,
                message_id: query.message.message_id,
                text: messages.count,
                disable_web_page_preview: true,
                parse_mode: 'HTML',
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        [{ text: '◀', callback_data: '-' }, { text: '1', callback_data: 'count' }, { text: '▶', callback_data: '+' }],
                        [{ text: 'ОК', callback_data: 'confirm' }, { text: 'Назад', callback_data: 'back' }]
                    ]
                })
            })
            .catch(err => {
                console.log(err)
            });
        };
    };
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
                [{ text: 'Кола, 15 грн', callback_data: 'cola' }, { text: 'Кофе, 35 грн', callback_data: 'coffee' }],
                [{ text: 'Чай, 10 грн', callback_data: 'tea' }, { text: 'Соки, 15 грн', callback_data: 'jucies' }],
                [{ text: 'Минералка, 10 грн', callback_data: 'water' }],
                [{ text: 'Назад', callback_data: 'back' }]
            ]
        })
    })
    .catch(err => {
        console.log(err)
    });
};

const cola = async query => {
    let db = getDb();
    let order = await db.collection('orders').findOne({ userId: query.from.id });
    if (!order) {
        await db.collection('users').updateOne({ userId: query.from.id }, {$set: { menuState: 4, item: 'cola' }});
        await db.collection('orders').insertOne({ userId: query.from.id, order: [{ name: 'Кола', count: 1, price: 15 }], currentItem: 'cola' });
        axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
            chat_id: query.from.id,
            message_id: query.message.message_id,
            text: messages.count,
            disable_web_page_preview: true,
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{ text: '◀', callback_data: '-' }, { text: '1', callback_data: 'count' }, { text: '▶', callback_data: '+' }],
                    [{ text: 'ОК', callback_data: 'confirm' }, { text: 'Назад', callback_data: 'back' }]
                ]
            })
        })
        .catch(err => {
            console.log(err)
        });
    } else {
        let i = order.order.findIndex(x => x.name === 'Кола');
        if (i !== -1) {
            axios.post(`https://api.telegram.org/bot${token}/answerCallbackQuery`, {
                callback_query_id: query.id,
                text: 'У вас в заказе уже есть кола!',
                show_alert: true
            })
            .catch(err => {
                console.log(err)
            });
        } else {
            await db.collection('users').updateOne({ userId: query.from.id }, {$set: { menuState: 4, item: 'cola' }});
            await db.collection('orders').updateOne({ userId: query.from.id }, { $addToSet: { order: { name: 'Кола', count: 1, price: 15 }}});
            await db.collection('orders').updateOne({ userId: query.from.id }, {$set: { currentItem: 'cola' } });
            axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
                chat_id: query.from.id,
                message_id: query.message.message_id,
                text: messages.count,
                disable_web_page_preview: true,
                parse_mode: 'HTML',
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        [{ text: '◀', callback_data: '-' }, { text: '1', callback_data: 'count' }, { text: '▶', callback_data: '+' }],
                        [{ text: 'ОК', callback_data: 'confirm' }, { text: 'Назад', callback_data: 'back' }]
                    ]
                })
            })
            .catch(err => {
                console.log(err)
            });
        };
    };
};

const coffee = async query => {
    let db = getDb();
    let order = await db.collection('orders').findOne({ userId: query.from.id });
    if (!order) {
        await db.collection('users').updateOne({ userId: query.from.id }, {$set: { menuState: 4, item: 'coffee' }});
        await db.collection('orders').insertOne({ userId: query.from.id, order: [{ name: 'Кофе', count: 1, price: 35 }], currentItem: 'coffee' });
        axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
            chat_id: query.from.id,
            message_id: query.message.message_id,
            text: messages.count,
            disable_web_page_preview: true,
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{ text: '◀', callback_data: '-' }, { text: '1', callback_data: 'count' }, { text: '▶', callback_data: '+' }],
                    [{ text: 'ОК', callback_data: 'confirm' }, { text: 'Назад', callback_data: 'back' }]
                ]
            })
        })
        .catch(err => {
            console.log(err)
        });
    } else {
        let i = order.order.findIndex(x => x.name === 'Кофе');
        if (i !== -1) {
            axios.post(`https://api.telegram.org/bot${token}/answerCallbackQuery`, {
                callback_query_id: query.id,
                text: 'У вас в заказе уже есть кофе!',
                show_alert: true
            })
            .catch(err => {
                console.log(err)
            });
        } else {
            await db.collection('users').updateOne({ userId: query.from.id }, {$set: { menuState: 4, item: 'coffee' }});
            await db.collection('orders').updateOne({ userId: query.from.id }, { $addToSet: { order: { name: 'Кофе', count: 1, price: 35 }}});
            await db.collection('orders').updateOne({ userId: query.from.id }, {$set: { currentItem: 'coffee' } });
            axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
                chat_id: query.from.id,
                message_id: query.message.message_id,
                text: messages.count,
                disable_web_page_preview: true,
                parse_mode: 'HTML',
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        [{ text: '◀', callback_data: '-' }, { text: '1', callback_data: 'count' }, { text: '▶', callback_data: '+' }],
                        [{ text: 'ОК', callback_data: 'confirm' }, { text: 'Назад', callback_data: 'back' }]
                    ]
                })
            })
            .catch(err => {
                console.log(err)
            });
        };
    };
};

const tea = async query => {
    let db = getDb();
    let order = await db.collection('orders').findOne({ userId: query.from.id });
    if (!order) {
        await db.collection('users').updateOne({ userId: query.from.id }, {$set: { menuState: 4, item: 'tea' }});
        await db.collection('orders').insertOne({ userId: query.from.id, order: [{ name: 'Чай', count: 1, price: 10 }], currentItem: 'tea' });
        axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
            chat_id: query.from.id,
            message_id: query.message.message_id,
            text: messages.count,
            disable_web_page_preview: true,
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{ text: '◀', callback_data: '-' }, { text: '1', callback_data: 'count' }, { text: '▶', callback_data: '+' }],
                    [{ text: 'ОК', callback_data: 'confirm' }, { text: 'Назад', callback_data: 'back' }]
                ]
            })
        })
        .catch(err => {
            console.log(err)
        });
    } else {
        let i = order.order.findIndex(x => x.name === 'Чай');
        if (i !== -1) {
            axios.post(`https://api.telegram.org/bot${token}/answerCallbackQuery`, {
                callback_query_id: query.id,
                text: 'У вас в заказе уже есть чай!',
                show_alert: true
            })
            .catch(err => {
                console.log(err)
            });
        } else {
            await db.collection('users').updateOne({ userId: query.from.id }, {$set: { menuState: 4, item: 'tea' }});
            await db.collection('orders').updateOne({ userId: query.from.id }, { $addToSet: { order: { name: 'Чай', count: 1, price: 10 }}});
            await db.collection('orders').updateOne({ userId: query.from.id }, {$set: { currentItem: 'tea' } });
            axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
                chat_id: query.from.id,
                message_id: query.message.message_id,
                text: messages.count,
                disable_web_page_preview: true,
                parse_mode: 'HTML',
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        [{ text: '◀', callback_data: '-' }, { text: '1', callback_data: 'count' }, { text: '▶', callback_data: '+' }],
                        [{ text: 'ОК', callback_data: 'confirm' }, { text: 'Назад', callback_data: 'back' }]
                    ]
                })
            })
            .catch(err => {
                console.log(err)
            });
        };
    };
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
                        [{text: 'Мой заказ', callback_data: 'viewOrder'}],
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
        case 3:
            switch (user.category) {
                case 'main':
                    await db.collection('users').updateOne({ userId: query.from.id }, { $set: { name: query.from.first_name, menuState: 2 }, $unset: { item: 1 }});
                    axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
                        chat_id: query.from.id,
                        message_id: query.message.message_id,
                        text: messages.main,
                        disable_web_page_preview: true,
                        parse_mode: 'HTML',
                        reply_markup: JSON.stringify({
                            inline_keyboard: [
                                [{ text: 'Бургер, 50 грн', callback_data: 'burger' }, { text: 'Пицца, 100 грн', callback_data: 'pizza' }],
                                [{ text: 'Борщ, 30 грн', callback_data: 'borsch' }, { text: 'Шашлык, 120 грн', callback_data: 'kebab' }],
                                [{ text: 'Назад', callback_data: 'back' }]
                            ]
                        })
                    })
                    .catch(err => {
                        console.log(err)
                    });
                    break;
                case 'drinks':
                    break;
            };
            break;
        case 4:
            switch (user.category) {
                case 'main':
                    await db.collection('users').updateOne({ userId: query.from.id }, { $set: { name: query.from.first_name, menuState: 2 }, $unset: { item: 1 }});
                    axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
                        chat_id: query.from.id,
                        message_id: query.message.message_id,
                        text: messages.main,
                        disable_web_page_preview: true,
                        parse_mode: 'HTML',
                        reply_markup: JSON.stringify({
                            inline_keyboard: [
                                [{ text: 'Бургер, 50 грн', callback_data: 'burger' }, { text: 'Пицца, 100 грн', callback_data: 'pizza' }],
                                [{ text: 'Борщ, 30 грн', callback_data: 'borsch' }, { text: 'Шашлык, 120 грн', callback_data: 'kebab' }],
                                [{ text: 'Назад', callback_data: 'back' }]
                            ]
                        })
                    })
                    .catch(err => {
                        console.log(err)
                    });
                    break;
                case 'drinks':
                    break;
            };
            break;
    };
};

const ok = async query => {
    let db = getDb();
    await db.collection('orders').deleteOne({ userId: query.from.id });
    await db.collection('users').updateOne({ userId: query.from.id }, {$set: {name: query.from.first_name, menuState: 1 } });
    axios.post(`https://api.telegram.org/bot${token}/editMessageText`, {
        chat_id: query.from.id,
        message_id: query.message.message_id,
        text: messages.ok,
        disable_web_page_preview: true,
        parse_mode: 'HTML',
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Отлично!', callback_data: 'back'}]
            ]
        })
    })
    .catch(err => {
        console.log(err)
    });
};

module.exports = {
    plus,
    minus,
    confirm,
    viewOrder,
    showCategories, 
    main,
    burger,
    pizza,
    borsch,
    kebab,
    drinks,
    cola,
    coffee,
    tea,
    back,
    ok
}
