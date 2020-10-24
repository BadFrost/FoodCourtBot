# FoodCourtBot
Simple Telegram BOT example on Node.js + [Telegraf](https://telegraf.js.org/#/) lib
## Requirements
Node.js version: v12.16.1
MongoDB version: v4.2.5
## Install and start
1. ```npm install nodemon -g```
2. In root dir ```npm init```
3. In root dir ```npm i```
4. Create ```config.js``` is ```server``` dir:
    ```code
    module.exports = {
        token: 'COPY.YOUR.BOT.TOKEN.HERE',
        dburl: 'mongodb://localhost:27017/'
    }
    ```
5. Add "start" script to ```package.json```:
    ```code
    "scripts": {
        "start": "nodemon bot.js",
        "test": "echo \"Error: no test specified\" && exit 1"
    }
    ```
6. ```npm start```