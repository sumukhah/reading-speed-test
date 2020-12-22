import React, { useState, useRef, useEffect } from "react";
import { message } from "antd";

import "./ReadContainer.scss";

import { textStyle } from "../../helpers/types";
import TextBox from "../../components/TextBox/TextBox";
import TextFormat from "../../components/TextFormat/TextFormat";

export default function ReadContainer() {
  // const [fontSize, setFontSize] = useState(15);
  // const [fontFamily, setFontFamily] = useState("arial");
  const [topic, setTopic] = useState("Random");
  // const [isBold, setIsBold] = useState(false);
  const [textFormat, setTextFormat] = useState<textStyle>({
    fontFamily: "arial",
    fontWeight: "normal",
    fontSize: 15,
  });
  const textBoxRef = useRef<HTMLDivElement | null>(null);

  const toggleFullScreen = (): void => {
    if (document.fullscreenEnabled) {
      if (!document.fullscreenElement) {
        textBoxRef.current?.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    } else {
      message.error("Full screen mode is not supported in this browser");
    }
  };

  const toggleFontWeight = (): void => {
    setTextFormat({
      ...textFormat,
      fontWeight: textFormat.fontWeight === "normal" ? "bold" : "normal",
    });
  };

  const setFontFamily = (family: string): void => {
    setTextFormat({ ...textFormat, fontFamily: family });
  };

  const setFontSize = (size: number): void => {
    setTextFormat({ ...textFormat, fontSize: size });
  };

  return (
    <div className="read-box-container">
      <TextFormat
        setFontSize={setFontSize}
        setFontFamily={setFontFamily}
        setIsBold={toggleFontWeight}
        setTopic={setTopic}
        setIsFullScreen={toggleFullScreen}
        defaultTopic={topic}
        defaultSize={textFormat.fontSize}
        defaultFontFamily={textFormat.fontFamily}
      />
      <div ref={textBoxRef} className="text-box-ref">
        <TextBox fontStyle={textFormat} toggleFullScreen={toggleFullScreen} />
      </div>
    </div>
  );
}
