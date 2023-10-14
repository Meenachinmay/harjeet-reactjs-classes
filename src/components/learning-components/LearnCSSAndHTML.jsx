import React from "react";

import "./learning.css";

const LearnCSSAndHTML = () => {
  function showMyNameOnClick(name) {
    console.log(name);
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="__button_and_input_wrapper__">
        <img
          src="https://avatars.githubusercontent.com/u/16211217?v=4"
          alt="Profile image"
          width={"200px"}
          height={"200px"}
          className="__catImage__"
        />
        <button
          className="__button__"
          style={{}}
          onClick={() => showMyNameOnClick("chinmay")}
        >
          Click ME!
        </button>
        <input className="__input__" placeholder="Enter your email here..." />
      </div>
    </div>
  );
};

export default LearnCSSAndHTML;

// in JSX file the return section returns the UI part of the page.
// before the return section we can write javascript code which we can use in return section
