const express = require('express');
const { randomBytes } = require('crypto')
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');
const cors = require('cors');
const port= process.env.PORT || 4001

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
        id, content, status:'pending'
  })
  commentsByPostId[pid] =comment;
  await axios.post('http://event-bus:4005/events',{
    type:'CommentCreated',
    data:{
      id,content,postId:pid,status:'pending'
    }   
  })
  res.status(201).send(comment)
})  

app.post('/events', async (req, res) => {
  console.log('Event recieved from comments ', req.body.type);
  const {type, data}= req.body;
    if(type == 'CommentModerated'){
      console.log('reached');
      const { id, content, postId,status} =data;
      let comments = commentsByPostId[postId] || []
      const comment = comments.find(comment=>comment.id==id)
      comment.status =status;
      setTimeout(async ()=>{await axios.post('http://event-bus:4005/events',{
        type:'CommentUpdated',
        data:{
          id, content, postId,status
        }   
      })
      }, 5000);
    }

  res.status(201).send('Ok')
})

app.listen(port, ()=>{
  console.log('listen on http://localhost:',port);
})