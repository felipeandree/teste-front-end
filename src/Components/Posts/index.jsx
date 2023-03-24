import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle } from "./styles";


function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => setPosts(data));
  }, [])

    return (
      <Card>
        {posts.map(post => (
          <div key={post.id}>
            <CardTitle>{post.title}</CardTitle>
            <CardBody>{post.body}</CardBody>
          </div>
        ))}
      </Card>
    );
 }

export default Posts;