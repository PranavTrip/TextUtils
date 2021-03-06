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
  const deleteAll = () => {
    setText("");
  };
  return (
    <>
      <h3
        className="text-center mt-4"
        style={{ color: props.mode == "dark" ? "#fff" : "black" }}
      >
        {props.heading}
      </h3>
      <div className="my-5 container">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          placeholder="Enter text here"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          style={{
            backgroundColor: props.mode === "dark" ? "#36454F" : "#fff",
            color: props.mode == "dark" ? "#fff" : "black",
          }}
        ></textarea>
      </div>
      <div className="my-5 container text-center">
        <button className="btn btn-primary mx-3" onClick={upperCase}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-3" onClick={lowerCase}>
          Convert to LowerCase
        </button>
        <button className="btn btn-danger mx-3" onClick={deleteAll}>
          Clear All
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode == "dark" ? "#fff" : "black" }}
      >
        <p>
          <b>Word Count: </b>
          {text.length == 0 ? 0 : text.split(" ").length}
        </p>
        <p>
          <b>Character Count: </b>
          {text.length}
        </p>
        <p>
          <b>Estimated time to read: </b>
          {text.length > 0 ? 0.008 * text.split(" ").length : 0} Minutes
        </p>
        <h3 className="text-center">Preview</h3>
        <p
          id="textToRead"
          style={{ color: props.mode == "dark" ? "#fff" : "black" }}
        >
          {text}
        </p>
      </div>
    </>
  );
}
