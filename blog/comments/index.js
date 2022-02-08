const express = require('express');
const { randomBytes } = require('crypto')
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors())

const commentsByPostId ={
}

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || [])
})
app.post('/posts/:pid/comments',async (req, res) => {
  const id = randomBytes(4).toString('hex')
  const { pid } = req.params;
  const {content }= req.body;
  const comment = commentsByPostId[pid] || []
  comment.push({
        id, content
  })
  commentsByPostId[pid] =comment;
  await axios.post('http://localhost:4005/events',{
    type:'CommentCreated',
    data:{
      id,content,postId:pid
    }   
  })
  res.status(201).send(comment)
})  

app.post('/events', function (req, res) {
  console.log('Event recieved from comments ', req.body.type);
  res.status(201).send('Ok')
})

app.listen(4001, ()=>{
    console.log('http://localhost:4001');
})