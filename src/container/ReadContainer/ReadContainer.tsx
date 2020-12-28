import React, { useState, useRef, useContext } from "react";
import { message } from "antd";
import axios from "axios";
import wpmContext from "../../context/wpmContext";
import { availableTopics } from "../../helpers/index";
import { useHistory } from "react-router-dom";
import Helmet from "react-helmet";

import "./ReadContainer.scss";
import { textStyle } from "../../helpers/types";
import TextBox from "../../components/TextBox/TextBox";
import TextFormat from "../../components/TextFormat/TextFormat";
import Timer from "../../components/Timer/Timer";

const INITIAL_TEXT_FORMAT: textStyle = {
  fontFamily: "arial",
  fontWeight: "normal",
  fontSize: 15,
};

export default function ReadContainer() {
  const { setWpm } = useContext(wpmContext);
  const history = useHistory();
  const [topic, setTopic] = useState<string>("random");
  const [textContent, setTextContent] = useState<string>("");
  const [textFormat, setTextFormat] = useState<textStyle>(INITIAL_TEXT_FORMAT);
  const textBoxRef = useRef<HTMLDivElement | null>(null);
  const [readingMode, setReadingMode] = useState<boolean>(false);

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

  const getTextContent = async () => {
    if (textContent.trim().length > 0) {
      if (textContent.split(" ").length < 60) {
        message.error("You must insert at least 60 words");
        return;
      }
      setReadingMode(true);
    } else {
      const url = availableTopics[topic];
      try {
        const response = await axios.get(url.api);
        const data = response.data.body;
        const randomArticle: string =
          data[Math.floor(Math.random() * data.length)].content;
        setTextContent(randomArticle);
        setReadingMode(true);
      } catch (e) {
        message.error(e.message);
      }
    }
  };

  const toggleReadingMode = () => {
    if (!readingMode) {
      getTextContent();
    } else {
      setReadingMode((readingMode) => !readingMode);
    }
    // setReadingMode(!readingMode);
  };

  const onTextContentChange = (value: string): void => {
    setTextContent(value);
  };

  const calculateWpm = (seconds: number): void => {
    const words: number = textContent.split(" ").length;
    const wpm: number = (60 * words) / seconds;
    setWpm(Math.floor(wpm));
    history.push("/stats");
  };

  return (
    <div className="read-box-container">
      <Helmet>
        <title>Test your reading speed</title>
        <meta
          name="description"
          content="Free online tool to check your reading ability. Reading speed is
          proportional to Comprehension at certain level. Check speed reading
          wpm.Check your average reading speed."
        />
      </Helmet>
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
        <TextBox
          fontStyle={textFormat}
          toggleFullScreen={toggleFullScreen}
          toggleReadingMode={toggleReadingMode}
          onTextContentChange={onTextContentChange}
          value={textContent}
          readingMode={readingMode}
        />
        <Timer calculateWpm={calculateWpm} readingMode={readingMode} />
      </div>
    </div>
  );
}
