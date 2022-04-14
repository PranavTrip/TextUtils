import React, { useState } from "react";

function About() {
  // State to switch between modes
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [style, setStyle] = useState({
    backgroundColor: "black",
    color: "white",
  });
  const toggleModes = () => {
    if (style.color === "black") {
      setStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setBtnText("Enable Light Mode");
    
    } else {
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
      
    }
  };
  return (
    <>
      <div className="container my-5" style={style}>
        <h3 className="my-heading">This is the about container</h3>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item" style={style}>
            <h2 class="accordion-header" id="headingOne" style={style}>
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={style}
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
        <button
          className="btn btn-dark my-3 mx-auto text-center"
          onClick={toggleModes}
        >
          {btnText}
        </button>
      </div>
    </>
  );
}

export default About;
