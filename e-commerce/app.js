const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.log('server is running http://localhost:3000');
})

// GET RESPONSE ON HTTP //
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello API !');
})

app.listen(3000, ()=>{
    console.log('server is running http://localhost:3000');
})

// READING ENVIRONMENTAL VARIABLES //
const express = require('express');
const app = express();

require('dotenv/config');

const api = process.env.API_URL;

app.get('/', (req, res) => {
    res.send('hello API !');
})

app.listen(3000, ()=>{
    console.log(api);
    console.log('server is running http://localhost:3000');
})
