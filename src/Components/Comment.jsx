import React, { useState } from "react";

export const Comment = ({ comment }) => {
  const nestedComments = (comment.replies || []).map((comment) => {
    return <Comment key={comment.id} comment={comment} type="child" />;
  });
  const [show, setShow] = useState(false);
  function handleChange() {
    show == true ? setShow(false) : setShow(true);
  }
  return (
    <div style={{ marginLeft: "50px", marginTop: "10px" }}>
      <div className="flexbox">
        <p>{comment.author}</p>
        <p>{comment.points} points</p>
        <p>{comment.timestamp}</p>
      </div>
      <h4>{comment.body}</h4>
      <div className="flexbox">
        <button onClick={handleChange}>Reply</button>
        <button>Give Award</button>
        <button>Share</button>
        <button>Report</button>
        <button>Save</button>
      </div>
      {show && nestedComments}
    </div>
  );
};
