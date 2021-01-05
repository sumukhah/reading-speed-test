import React from "react";
import { Typography } from "antd";
import "./AppIntroduction.scss";

export default function AppIntroduction() {
  return (
    <div className="app-intro-container">
      <h1>Pick up a topic and check your Reading Speed for free.</h1>
      <p className="intro-p">
        Speed reading is the process of rapidly absorbing the meaning of a
        context rather than identifying individual words. Speed Reading became
        so important to gain knowledge in the current scenario. The average
        reading speed of most adults is around 200 to 250 words per minute. If
        You cross this range you will have an advantage over others to get
        knowledge with less time. We provide a free tool to test your reading
        speed online. Pick a topic or paste a text you want to read. You can
        choose any fonts with font size, and you can read in a full-screen mode.
      </p>
    </div>
  );
}
