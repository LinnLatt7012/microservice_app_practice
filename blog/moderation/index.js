const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');
const port= process.env.PORT || 4003
app.use(bodyParser.json());


app.post('/events', async (req, res) =>{
    const {type, data}= req.body;
    if(type == 'CommentCreated'){
        const { id, content, postId} =data
        const status = content.includes('orange')||content.includes('fuck') ? 'rejected':'approved'
        setTimeout(async ()=>{
            await axios.post('http://event-bus-srv:4005/events',{
                type:'CommentModerated',
                data:{
                id,content,postId,status
                }   
            })
        },3000)
    }
    res.status(201).send('OK')
})

app.listen(port, ()=>{
    console.log('listen on http://localhost:',port);
})