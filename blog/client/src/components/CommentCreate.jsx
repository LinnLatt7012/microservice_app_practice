import React, { useState } from 'react';
import axios from "axios";

function CommentCreate({postId}) {
    const [content, setContent] = useState("");
    const [error, setError] = useState("");

    const onSubmitHandler = async(event)=>{
        event.preventDefault()
        if(content ===""){
            setError('Content is needed added')
            return;
        }
        // console.log(title);
        setError('');
        await axios.post('http://localhost:4001/posts/'+postId+'/comments',{
            content
        }
        ).then(data=>console.log("coments", data))
        setContent('');
    }

  return <div>
      <form className='container' onSubmit={onSubmitHandler}>
          <div className='form-group'>
            <label htmlFor="content">Comment</label> 
            <input className='form-control-inline' name='content' value={content} onChange={e=>setContent(e.target.value)}/>
          </div>
          <span className='text-danger'>{error}</span>
          <button className='btn btn-primary '>
              Submit
          </button>
      </form>
  </div>;
}

export default CommentCreate;
