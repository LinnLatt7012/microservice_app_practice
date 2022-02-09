const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');

app.use(bodyParser.json());


app.post('/events', async (req, res) =>{
    const {type, data}= req.body;
    if(type == 'CommentCreated'){
        const { id, content, postId} =data
        const status = content.includes('orange') ? 'rejected':'approved'
            await axios.post('http://localhost:4005/events',{
                type:'CommentModerated',
                data:{
                id,content,postId,status
                }   
            })
    }
    res.status(201).send('OK')
})

app.listen(4003,()=>{
    console.log('Listening on http://localhost:4003');
})