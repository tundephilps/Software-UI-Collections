import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section id="introbody">
      <div class="sp-container">
        <div class="sp-content">
          <div class="sp-globe"></div>
          <h2 class="frame-1">WELCOME</h2>
          <h2 class="frame-2">TO MY COLLECTION</h2>
          <h2 class="frame-3">OF SOFTWARE USER INTERFACES</h2>
          <h2 class="frame-4">TEST IT!</h2>
          <h2 class="frame-5">
            <span>FEEL,</span>
            <span>VISUALIZE,</span>
            <span>EXPERIENCE.</span>
          </h2>
          <Link to="/Sliders" class="sp-circle-link">
            Dive In <br /> By Tunde Philps
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;
