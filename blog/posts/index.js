const express = require('express');
const { randomBytes } = require('crypto')
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port= process.env.PORT || 3000

app.use(bodyParser.json());
app.use(cors());
const posts ={
}

app.get('/posts', (req, res) => {
  res.send(posts)
})

app.post('/posts', async(req, res) => {
  const id = randomBytes(4).toString('hex')
  const { title } = req.body;
  posts[id]  = {
        id, title
  }
  await axios.post('http://localhost:4005/events',{
    type:'PostCreated',
    data:{
      id,title
    }   
  })
  res.status(201).send(posts[id])
})  

app.post('/events', function (req, res) {
  console.log("Event recieved from post ", req.body.type);
  res.status(201).send('OK')
})

app.listen(port, ()=>{
    console.log('listen on http://localhost:',port);
})