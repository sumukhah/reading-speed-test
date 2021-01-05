import React from "react";
import { Typography } from "antd";
import "./AppIntroTextBottom.scss";

export default function AppIntroTextBottom() {
  return (
    <div className="app-intro-container">
      <h2>How to use this?</h2>
      <p className="intro-p">
        Click on start after selecting a topic. Read from top to bottom. You can
        choose any font family which you prefer, and You can also choose any
        font size. After you read the entire content and click on Stop. We
        calculate your speed and display how many words you can read in a
        minutes
      </p>
    </div>
  );
}
