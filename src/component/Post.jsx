import React from "react";
import { Link } from "react-router-dom";

function Post({ id, title, body }) {
  return (
    <div style={{ margin: "1rem", padding: "1rem", background: "lightGrey" }}>
      <Link to={id.toString()}>
        <h1>Post: {id}</h1>
        {/* <h1>{title}</h1> */}
      </Link>
    </div>
  );
}

export default Post;
