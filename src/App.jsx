import axios from "axios";
import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Comment } from "./Components/Comment";
const commentData = {
  id: "001",
  author: "albert",
  body: "Whats the status?",
  timestamp: "Sun Aug 02 2020 18:08:45 GMT+0530",
  points: "2",
  replies: [
    {
      id: "003",
      author: "haren",
      body: "Wrote the test suites, waiting for approval?",
      timestamp: "Sun Aug 02 2020 18:12:45 GMT+0530",
      points: "3",
      replies: [
        {
          id: "004",
          author: "albert",
          body: "Thanks for the update!",
          timestamp: "Sun Aug 02 2020 18:15:45 GMT+0530",
          points: "8",
        },
      ],
    },
    {
      id: "002",
      author: "Nrupul",
      body: "looking forward for the demo!",
      timestamp: "Sun Aug 02 2020 18:10:45 GMT+0530",
      points: "2",
    },
  ],
};

function App() {
  const [show, setShow] = useState(false);
  function handleChange() {
    show == true ? setShow(false) : setShow(true);
  }
  console.log(show);
  return (
    <div className="maindiv">
      <div className="flexbox">
        <p>{commentData.author}</p>
        <p>{commentData.points} points</p>
        <p>{commentData.timestamp}</p>
      </div>
      <h4>{commentData.body}</h4>
      <div className="flexbox">
        <button onClick={handleChange}>Reply</button>
        <button>Give Award</button>
        <button>Share</button>
        <button>Report</button>
        <button>Save</button>
      </div>
      {show &&
        commentData.replies.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
    </div>
  );
}

export default App;
