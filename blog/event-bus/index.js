const express = require('express');
const { randomBytes } = require('crypto')
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const app = express();  

app.use(bodyParser.json());
app.use(cors());

app.post('/events', function (req, res) {
    const event = req.body;
//   res.send('POST request to the homepage')
    axios.post('http://localhost:4000/events',event);
    axios.post('http://localhost:4001/events',event);
    axios.post('http://localhost:4002/events',event);
    console.log(event);
    res.send({status: 'OK' });
})


app.listen(4005, ()=>{
    console.log('Listening on http://localhost:4005');
})