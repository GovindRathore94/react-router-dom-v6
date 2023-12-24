import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  const url = "https://jsonplaceholder.typicode.com/posts";

  async function fetchPosts() {
    const res = await fetch(`${url}/${id}`);
    const data = await res.json();
    console.log(data);
    setPost(data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      {post && (
        <div
          style={{
            background: "lightblue",
            textAlign: "center",
            width: "500px",
            height: "250px",
            borderRadius: "10px",
            margin: "0 auto",
            padding: "1rem",
          }}>
          <p>Post: {post.id}</p>
          <h3>Title: {post.title}</h3>
          <p>Title: {post.body}</p>
        </div>
      )}
    </>
  );
}

export default PostDetails;
