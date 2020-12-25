import React from "react";
import { Card, Divider, Button } from "antd";
import { ROOT } from "../../helpers/index";
import { Progress } from "antd";
import S from "string";

import "./ResultDisplay.scss";

interface Props {
  character: string;
  wpm: number;
  betterThan: number;
  readAgain: () => void;
}

export default function ResultDisplay(props: Props) {
  return (
    <div className="result-display-container">
      <Card
        hoverable
        cover={
          <img
            // style={{ width: 200 }}
            alt="example"
            src={`${ROOT}/images/` + props.character + `.gif`}
          />
        }
        className="result-card"
      >
        <div style={{ display: "inline", float: "left" }}>
          <h3>Your speed is</h3>
          <h1>{props.wpm} WPM</h1>
        </div>

        <div style={{ display: "inline", float: "right" }}>
          <h3>You are a</h3>
          <h2>{S(props.character).humanize().s}</h2>
        </div>
        <Divider />
        <Button
          onClick={props.readAgain}
          type="primary"
          className="read-again-button"
        >
          Read again
        </Button>
      </Card>
      <div className="progress-display">
        <Progress percent={20} type="circle" />
        <h3>You are better than {props.betterThan}% of our readers</h3>
      </div>
    </div>
  );
}
