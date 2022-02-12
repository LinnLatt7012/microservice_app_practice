import React, { useState } from 'react';
import axios from "axios";

function PostCreate() {
    const [title, setTitle] = useState("");
    const [error, setError] = useState("");

    const onSubmitHandler = async(event)=>{
        event.preventDefault()
        if(title ===""){
            setError('Title is needed added')
            return;
        }
        // console.log(title);
        setError('');
        await axios.post('http://posts:4000/posts',{
            title
        }
        ).then(data=>console.log("posts", data))
        setTitle('');
    }

  return <div>
      <form className='container' onSubmit={onSubmitHandler}>
          <div className='form-group'>
            <label htmlFor="title">Title</label> <span className='text-danger'>{error}</span>
            <input className='form-control w-25' name='title' value={title} onChange={e=>setTitle(e.target.value)}/>
          </div>
          <button className='btn btn-primary'>
              Submit
          </button>
      </form>
  </div>;
}

export default PostCreate;
