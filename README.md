# FoodCourtBot
Simple Telegram BOT example on [Node.js](https://nodejs.org/uk/) + [Telegraf](https://telegraf.js.org/#/) lib
## Requirements
Node.js version: v12.16.1
MongoDB version: v4.2.5
## Install and start
1. Install [MongoDB](https://docs.mongodb.com/manual/administration/install-community/)
2. ```npm install nodemon -g```
3. In root dir ```npm init```
4. In root dir ```npm i```
5. Create ```config.js``` is ```server``` dir:
    ```code
    module.exports = {
        token: 'COPY.YOUR.BOT.TOKEN.HERE',
        dburl: 'mongodb://localhost:27017/'
    }
    ```
6. Add "start" script to ```package.json```:
    ```code
    "scripts": {
        "start": "nodemon bot.js",
        "test": "echo \"Error: no test specified\" && exit 1"
    }
    ```
7. ```npm start```