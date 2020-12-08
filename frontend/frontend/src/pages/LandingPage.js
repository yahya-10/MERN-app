import React from "react";
import { Link } from "react-router-dom";

import vector from "./vector4.png";

const LandingPage = () => {
  return (
    <div className="landing-wrapper">
      <div className="text-wrapper">
        <div className="text-header-wrapper">
          <p className="text-header font__p p__size">Welcome in</p>
          <span>Study Overseas </span>
        </div>

        <div className="text-section font__p p__size">
          It is new forum about achieving success
          <br />
          If You are looking for answers on questions like:
          <ul>
            <li>What scholarships am I eligible for?</li>
            <li>When can I start applying for study abroad courses?</li>
            <li>What is the process of applying to a university?</li>
            <li>What is the cost of studying abroad?</li>
          </ul>
          <div className="text-button-wrapper">
            <Link to="/register">Register in</Link>
          </div>
        </div>
      </div>
      <div className="image-wrapper">
        <img src={vector} className="landing-image" alt="" />
      </div>
    </div>
  );
};

export default LandingPage;
