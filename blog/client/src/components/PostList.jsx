import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

function PostList() {
    const [posts, setPosts] = useState({});
    const fechPosts = async ()=>{
        axios.get("http://localhost:4000/posts")
      .then(res =>{
        setPosts(res.data)
        // console.log(res.data);
      })
    }
    useEffect(() => {
      fechPosts();
    }, []);
    
  return <div className='d-flex flex-row flex-wrap justify-content-between'>
      {Object.values(posts).map((post, index) => 
        <div key={post.id} className="card" style={{width:'30%', height: "max-content", marginBottom:'20px'}}>
            <div className="card-body">
                <h3 className='card-title'>{post.title}</h3> 
                <CommentCreate postId={post.id}/>
                <hr />
                <CommentList  postId={post.id}/>
            </div>
                 
        </div>
      )}
  </div>;
}

export default PostList;
