const express = require('express');
const { randomBytes } = require('crypto')
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors())

const commentsByPostId ={
}

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || [])
})
app.post('/posts/:pid/comments', (req, res) => {
  const id = randomBytes(4).toString('hex')
  const { pid } = req.params;
  const {content }= req.body;
  const comment = commentsByPostId[pid] || []
  comment.push({
        id, content
  })

  commentsByPostId[pid] =comment;

  res.status(201).send(comment)
})  

app.listen(4001, ()=>{
    console.log('http://localhost:4001');
})