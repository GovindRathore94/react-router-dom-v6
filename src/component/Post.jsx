import React from "react";
import { Link } from "react-router-dom";

function Post({ id, title, body }) {
  return (
    <div
      style={{
        background: "lightGrey",
        textAlign: "center",
        width: "500px",
        borderRadius: "10px",
        margin: "10px auto",
        padding: "0.5rem",
      }}>
      <Link
        style={{ textDecoration: "none", color: "blue" }}
        to={id.toString()}>
        <p>Post: {id}</p>
        <h4>{title}</h4>
      </Link>
    </div>
  );
}

export default Post;
