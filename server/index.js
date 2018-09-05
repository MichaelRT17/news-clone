require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , ctrl = require('./controller');

const {
    SERVER_PORT
} = process.env;

const app = express();

app.use(bodyParser.json());

app.get('/api/getArticles', ctrl.getArticles);

app.listen(SERVER_PORT, () => {
    console.log(`Yo yo yo from port: 4444`)
})