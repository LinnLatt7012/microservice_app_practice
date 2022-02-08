import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CommentList({postId,comments}) {
    //here used separate route for every comments
    // const [comments, setComments] = useState([]);
    // const fectComments= async()=>{
    //     await axios.get('http://localhost:4001/posts/'+postId+'/comments')
    //     .then(res=>setComments(res.data))
    // }
    // useEffect(() => {
    //     fectComments()
    // }, []);
    
  return <ul className='pl-0'>
      <dt>{comments.length}  Comments</dt>
      <dl>
      {comments.map(comment=>(
          <li key={comment.id} className="card-text ml-5 pl-0">{comment.content}</li>
      ))}</dl>

  </ul>;
}

export default CommentList;
