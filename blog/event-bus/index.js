const express = require('express');
const { randomBytes } = require('crypto')
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const app = express();  

app.use(bodyParser.json());
app.use(cors());

app.post('/events', async (req, res) =>{
    const event = req.body;
    await axios.post('http://localhost:4000/events',event);
    await axios.post('http://localhost:4001/events',event);
    await axios.post('http://localhost:4002/events',event);
    await axios.post('http://localhost:4003/events',event);
    // console.log(event);
    res.send({status: 'OK' });
})

app.listen(4005, ()=>{
    console.log('Listening on http://localhost:4005');
})