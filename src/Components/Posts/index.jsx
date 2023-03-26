import React, { useEffect, useState } from "react";
import { ButtonComment, Card, CardBody, CardComment, CardCommentText, CardContainer, CardTitle } from "./styles";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [selectedPostComments, setSelectedPostComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" )
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const handleClick = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((res) => res.json())
      .then((data) => setSelectedPostComments(data));

    setSelectedPostId(postId);
  };

  const handleHideComments = () => {
    setSelectedPostId(null);
    setSelectedPostComments([]);
  };

  return (
    <Card>
      {posts.map((post) => (
        <CardContainer key={post.id}>
          <CardTitle>{post.title}</CardTitle>
          <CardBody>{post.body}</CardBody>
          {post.id === selectedPostId ? (
            <>
              <ButtonComment onClick={handleHideComments}>Fechar Comentários</ButtonComment>
              {selectedPostComments.map((comment) => (
                <CardComment key={comment.id}>
                  <CardCommentText>{comment.body}</CardCommentText>
                </CardComment>
              ))}
              <Comments postId={post.id} />
            </>
          ) : (
            <ButtonComment onClick={() => handleClick(post.id)}>Mostrar Comentários</ButtonComment>
          )}
        </CardContainer>
      ))}
    </Card>
  );
}

function Comments({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/[ID]/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [postId]);

  return (
    <>
      {comments.length > 0 &&
        comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.body}</p>
          </div>
        ))}
    </>
  );
}

export default Posts;
