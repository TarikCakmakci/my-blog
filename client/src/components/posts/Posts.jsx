import Post from "../../components/post/Post"
import "./posts.css"
import React from 'react';
export default function posts( { posts}) {
    return (
        <div className="posts">
           {posts.map((p)=>(
               <Post post={p} />
           ))}
        </div>
    )
}
