import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function SinglePost({ match }) {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/` + params.id)
      .then((res) => res.json())
      .then((data) => setPost(data))
    }, [params.id]);

  return (
    <div>
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading post...</p>
      )}

      <h3>Comments:</h3>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.body}</p>
          </div>
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
}

export default SinglePost;
