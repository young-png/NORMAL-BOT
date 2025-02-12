const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUS5OiSBj8L3XFHnmJYERHrCIKiICCCm7MoYACSnkoT7HD/75B2xPdh53Z3ltFQWVlZeaXbyDLcYlWqAOTN3ApcAMr1C+r7oLABMzqMEQFGIAAVhBMQKmrR0uXA54mWLHjp5a0pvyrltit0oTx6r5IWk6G/mi9WL+CxwBcai/B/h8A5/qdvAu2LV73nbFs0k4to81teZSvuaruheuJmIUKklc6o7yCR48IcYGzSLrEKEUFTFaoMyEuvkd/o3VGdBlNc30xF9MChbLbONV+YW5TxohFgt9kU3vR+vzO/x59l2WPRZ6JMeRl14izMX+Yr5t0bo7PpmnSZ3NqKYvY3nGi+6Rf4ihDgRKgrMJV923duyXyMK/4WZJePUbkN2eDI2rOn41VJBzupLQ0eMHmtsoh+h7xWc6kVr2MKHV3T3JNqM+GgsjzRh62qybwsLH0h3d11tSn3VfiZvErK+f/o3s7w9yZcPybuPduJ8nx4BWtjZ2TsFfLIt35JoVVkzdlSbffo69Zl9rZmPxh2B2PdUQrtxvvLQ48tTQL3V3NE3V/MpcOe3LIT/qwqos/scQcJM1pMjs73chg56uTddgbay3PRXzab3hvW215TnLsktusZPlGu+zopN6DKW0IuhJ6zE4WOX2s09tgxLlKkZ+MOYra1/cXnVGnBGBCPQagQBEuqwJWOM/6PX48ADBoLOQXqHpXF2hXb+eyeOvK2n5hBVotSERo09DZzbbV+KIlG6nbotN6EfKvYAAuRe6jskSBjMsqL7o1KksYoRJM/v45ABm6VU/f+tsYagBCXJTVLqsvSQ6DX6b++gh9P6+zyuoyX+wXqAAT8nMbVRXOorKXsc5g4ce4QWIMqxJMQpiU6DEAAWqwj3o8YHMSPtBSbCUpY5MRe5c8Xt30lOM8e/4yItlwBKnghaI4/oUN2PELTzLwReDCseAHdBCwJBgA/DEy/ZnfOrif2p17FbRz4d/Us0EkUUKrJBpmxHMsntKjAgVgUhU1GgAP+uf6YudnlP0B94DTLsCJt7edsNyrtSWmlracucSt/YL7tBRM3j5rSsyDHu9gz2ZjlZmDAUjfE4j7l9MMy1McT5KkwAgT6q/yR9sLCS+XHxmqetwP0fsTAaogTkowAaJGUzFXzqTV6V4W5HI5laKpGE3Bp0m/wv5M04KVC5KV93wQWPzID5nKdeNtILJK1m30xozmx8O6DeKWkV7/BaRHOI6K1czCw/ZK+OXRgSoxUobVHbP8rkXaUL/vTN+T1sSWVazhfjncnVo9iBkt04yUr8rG5FY7/5jF7fnI0kJbD3NJnL72tz3D8vWyDRvdj7p+2oduNif8guKaEbqV+FBKFUUYJtuGztZrlvo8PooR3fFSXiUdQQiFowZxNzI15uLctNB2mdxbiqZ2L/3T5jmG7zWQfNQvfp+Qt49ohRi9t1kGe4v+y5yvKScfgy8YH/34u97dohknGDMqlJ1dYziyMD4slZ2zqUWVP8+9Ozul96e17Pr6DTwePwfgksAqzIsUTADMgiLHARiABJbV9HNQbZyisoLpBUyoMSMwY1rg6cc/8I0T9t0HAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ɲaruto",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "2348168000939",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "no",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE_MESSAGES || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'no',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});





