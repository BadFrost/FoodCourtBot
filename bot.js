'use strict'

const bot = require('./server/server');
const { deleteMessage } = require('./utils/utils');
const { start } = require('./controllers/commands');
const { plus, minus, confirm, viewOrder, showCategories, main, burger, pizza, borsch, kebab, drinks, cola, coffee, tea, juice, water, back, ok } = require('./controllers/callbackQueries');

bot.hears(/^\/start/, async ctx => {
    let msg = await ctx.update.message;
    await deleteMessage(msg.chat.id, msg.message_id);
    start(msg);
});

bot.on('callback_query', async ctx => {
    let query = await ctx.update.callback_query;
    console.log(query)
    switch (query.data) {
        case '+':
            plus(query);
            break;
        case '-':
            minus(query);
            break;
        case 'confirm':
            confirm(query);
            break;
        case 'viewOrder':
            viewOrder(query);
            break;
        case 'menu':
            showCategories(query);
            break;
        case 'back':
            back(query);
            break;
        case 'main':
            main(query);
            break;
        case 'drinks':
            drinks(query);
            break;
        case 'burger':
            burger(query);
            break;
        case 'pizza':
            pizza(query);
            break;
        case 'borsch':
            borsch(query);
            break;
        case 'kebab':
            kebab(query);
            break;
        case 'ok':
            ok(query);
            break;
        case 'cola':
            cola(query);
            break;
        case 'coffee':
            coffee(query);
            break;
        case 'tea':
            tea(query);
            break;
        case 'juice':
            juice(query);
            break;
        case 'water':
            water(query);
            break;
    };
});
