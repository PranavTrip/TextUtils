import React from "react";
import { useState } from "react";

export default function TextBox(props) {
  const [text, setText] = useState("");
  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const deleteAll=()=>{
      setText("");
  }
  return (
    <>
      <h3 className="text-center mt-4">{props.heading}</h3>
      <div className="my-5 container">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          placeholder="Enter text here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <div className="my-5 container text-center">
        <button className="btn btn-primary mx-3" onClick={upperCase}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-3" onClick={lowerCase}>Convert to LowerCase</button>
        <button className="btn btn-danger mx-3" onClick={deleteAll}>Clear All</button>
      </div>
      <div className="container">
          <p><b>Word Count: </b>{text.length==0?0:text.split(" ").length}</p>
          <p><b>Character Count: </b>{text.length}</p>
          <p><b>Estimated time to read: </b>{0.008*text.length}</p>
          <p id="textToRead">{text}</p>
      </div>

    </>
  );
}
