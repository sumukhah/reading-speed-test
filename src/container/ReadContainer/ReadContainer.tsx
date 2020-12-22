import React, { useState, useRef, useEffect } from "react";
import { message } from "antd";

import "./ReadContainer.scss";

import { textStyle } from "../../helpers/types";
import TextBox from "../../components/TextBox/TextBox";
import TextFormat from "../../components/TextFormat/TextFormat";

export default function ReadContainer() {
  const [fontSize, setFontSize] = useState(15);
  const [fontFamily, setFontFamily] = useState("arial");
  const [topic, setTopic] = useState("Random");
  const [isBold, setIsBold] = useState(false);
  const textBoxRef = useRef<HTMLDivElement | null>(null);

  const fontStyle: textStyle = {
    fontFamily,
    fontSize,
    isBold,
  };

  const toggleFullScreen = () => {
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

  return (
    <div className="read-box-container">
      <TextFormat
        setFontSize={setFontSize}
        setFontFamily={setFontFamily}
        setTopic={setTopic}
        setIsBold={() => setIsBold(!isBold)}
        setIsFullScreen={toggleFullScreen}
        defaultTopic={topic}
        defaultSize={fontSize}
        defaultFontFamily={fontFamily}
      />
      <div ref={textBoxRef} className="text-box-ref">
        <TextBox fontStyle={fontStyle} toggleFullScreen={toggleFullScreen} />
      </div>
    </div>
  );
}
