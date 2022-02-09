const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();  

app.use(bodyParser.json());
app.use(cors());

const posts= {}
app.post('/events', (req, res) =>{
    const {type, data}= req.body;
    
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
        console.log('reached');
        const { id, content, postId,status} =data;
        let comments = posts[postId].comments || []
        const comment = comments.find(comment=>comment.id==id)
        comment.status=status
        comment.content=content
        console.log('res',comments);
        // posts[postId].comments = comments;
        // console.log("res",comments);
    }
    res.send({status: 'OK' });
})

app.get('/posts',(req, res) =>{
    res.status(201).send(posts)
})
app.listen(4002, ()=>{
    console.log('Listening on http://localhost:4002');
})