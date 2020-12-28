import React from "react";
import { Typography } from "antd";
import "./AppIntroduction.scss";

export default function AppIntroduction() {
  return (
    <div className="app-intro-container">
      <h1>Pick up a topic and check your Reading Speed for free.</h1>
      <p className="intro-p">
        Speed reading is the process of rapidly absorbing the meaning of a
        sentence, rather than identifying individual words. Reading Speed became
        so much important to gain knowledge in the current world. You will have
        an advantage over others to gain contextual knowledge with less time
        than others.
      </p>
    </div>
  );
}
