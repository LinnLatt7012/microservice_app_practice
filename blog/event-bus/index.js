const express = require('express');
const { randomBytes } = require('crypto')
const bodyParser = require('body-parser');
// const cors = require('cors');
const axios = require('axios');
const app = express();  
const port= process.env.PORT || 4005
app.use(bodyParser.json());
// app.use(cors());
const events=[];
app.post('/events', async (req, res) =>{
    const event = req.body;

    events.push(event);
    await axios.post('http://posts-srv:4000/events',event);
    await axios.post('http://comments-srv:4001/events',event);
    await axios.post('http://query-srv:4002/events',event);
    await axios.post('http://moderation-srv:4003/events',event);
    // console.log(event);
    
    res.send({status: 'OK' });
})

app.get('/events',(req,res)=>{
    res.send(events);
})

app.listen(port, ()=>{
    console.log('listen on http://localhost:',port);
})