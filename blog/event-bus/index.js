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
<<<<<<< HEAD
    await axios.post('http://posts:4000/events',event);
    await axios.post('http://comments:4001/events',event);
    await axios.post('http://query:4002/events',event);
    await axios.post('http://moderation:4003/events',event);
=======
    await axios.post('http://localhost:4000/events',event);
    await axios.post('http://localhost:4001/events',event);
    await axios.post('http://localhost:4002/events',event);
    await axios.post('http://localhost:4003/events',event);
>>>>>>> with_kubernetes
    // console.log(event);
    
    res.send({status: 'OK' });
})

app.get('/events',(req,res)=>{
    res.send(events);
})

app.listen(port, ()=>{
    console.log('listen on http://localhost:',port);
})