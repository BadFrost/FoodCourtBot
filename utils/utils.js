'use strict'

const axios = require('axios');
const { token } = require('../server/config');

const deleteMessage = async (chatId, messageId) => {
    axios.post(`https://api.telegram.org/bot${token}/deleteMessage`, {
        chat_id: chatId,
        message_id: messageId
    })
    .catch(async (err) => {
        console.log(err)
    });
};

module.exports = { deleteMessage }