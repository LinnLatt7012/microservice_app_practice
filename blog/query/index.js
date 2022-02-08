const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();  

app.use(bodyParser.json());
app.use(cors());

const posts= {}
app.post('/events', (req, res) =>{
    const {type, data}= req.body;
    console.log('reached');
    if(type == 'PostCreated'){
        posts[data.id]  = {...data,comments:[]}
    }
    if(type == 'CommentCreated'){
        const comment = posts[data.postId].comments || []
        comment.push({id:data.id,content:data.content})
        posts[data.postId].comments = comment;
    }
    console.log("res",posts);
    res.send({status: 'OK' });
})

app.get('/posts',(req, res) =>{
    res.status(201).send(posts)
})
app.listen(4002, ()=>{
    console.log('Listening on http://localhost:4002');
})