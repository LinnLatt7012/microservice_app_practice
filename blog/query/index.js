const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { default: axios } = require('axios');
const app = express();  
const port= process.env.PORT || 4002
app.use(bodyParser.json());
app.use(cors());
const eventsHandler = (type,data)=>{
    if(type == 'PostCreated'){
        posts[data.id]  = {...data,comments:[]}
    }
    if(type == 'CommentCreated'){
        const { id, content, postId,status} =data
        const comments = posts[postId].comments || []
        comments.push({id,content,status})
        posts[postId].comments = comments;
        console.log('res',comments);
    }if(type=='CommentUpdated'){
        const { id, content, postId,status} =data;
        let comments = posts[postId].comments || []
        const comment = comments.find(comment=>comment.id==id)
        comment.status=status
        comment.content=content
    }
}

const posts= {}
app.post('/events', (req, res) =>{
    const {type, data}= req.body;
    
    eventsHandler(type,data);

    res.send({status: 'OK' });
})

app.get('/posts',(req, res) =>{
    res.status(201).send(posts)
})
app.listen(port, async()=>{
    console.log('Listening on http://localhost:4002');

    const res = await axios.get('http://event-bus-srv:4005/events');
    console.log(res.data);
    for (let event of res.data) {
        console.log('Processing event:',event.type);
        const {type,data} = event;
        eventsHandler(type,data);
    }
})