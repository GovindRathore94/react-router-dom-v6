import { useState, useEffect } from "react";
import Post from "../component/Post";

function Posts() {
  const [posts, setPosts] = useState(null);

  const endPoint = "https://jsonplaceholder.typicode.com/posts";

  async function fetchPosts() {
    const res = await fetch(endPoint);
    const data = await res.json();
    setPosts(data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div>
        {posts &&
          posts.map((post) => {
            return (
              <Post
                key={post.id}
                title={post.title}
                id={post.id}
                body={post.body}
              />
            );
          })}
      </div>
    </>
  );
}

export default Posts;
