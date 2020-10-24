'use strict'

const bot = require('./server/server');
const { deleteMessage } = require('./utils/utils');
const { start } = require('./controllers/commands');
const { showCategories, main, drinks, back } = require('./controllers/callbackQueries');

bot.hears(/^\/start/, async ctx => {
    let msg = await ctx.update.message;
    await deleteMessage(msg.chat.id, msg.message_id);
    start(msg);
});

bot.on('callback_query', async ctx => {
    let query = await ctx.update.callback_query;
    console.log(query)
    switch (query.data) {
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
            drinks(query)
            break;
    };
});
