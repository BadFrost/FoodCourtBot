'use strict'

const MongoClient = require('mongodb').MongoClient;
const { dburl } = require('./config');

let _db;

module.exports = {
    connectToServer: async (callback) => {
        MongoClient.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true }, async (err, client) => {
            _db  = client.db('foodCourt');
            return callback(err);
        });
    },
    getDb: () => {
        return _db;
    }
};