import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardTitle, CardBody, CardContainer, CardCommentText } from "../Posts/styles";



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
    <Card>
      {post ? (
        <CardContainer>
          <CardTitle>{post.title}</CardTitle>
          <CardBody>{post.body}</CardBody>
        </CardContainer>
      ) : (
        <p>Loading post...</p>
      )}

      <h3>Comments:</h3>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id}>
            <CardCommentText>{comment.body}</CardCommentText>
          </div>
        ))
      ) : (
        <CardCommentText>No comments yet.</CardCommentText>
      )}
    </Card>
  );
}

export default SinglePost;
