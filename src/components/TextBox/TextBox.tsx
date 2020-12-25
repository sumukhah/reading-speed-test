import React from "react";
import { Input, Button, Tooltip } from "antd";
import { FullscreenOutlined } from "@ant-design/icons";
import { textStyle } from "../../helpers/types";
import "./TextBox.scss";

const { TextArea } = Input;

interface TextBoxProps {
  fontStyle: textStyle;
  toggleFullScreen: () => void;
  toggleReadingMode: () => void;
  onTextContentChange: (content: string) => void;
  value: string;
  readingMode: boolean;
}

const TextBox: React.FC<TextBoxProps> = ({
  fontStyle,
  toggleFullScreen,
  readingMode,
  ...props
}) => {
  return (
    <div className="text-box">
      {!readingMode ? (
        <TextArea
          placeholder="Add your own Text or select a Topic and press Start"
          style={fontStyle}
          onChange={({ target: { value } }) => props.onTextContentChange(value)}
          value={props.value}
        />
      ) : (
        <div style={fontStyle} className="textContainerBox">
          <p>{props.value}</p>
          <Button
            type="primary"
            className="read-toggle-button"
            size="large"
            onClick={props.toggleReadingMode}
          >
            Done
          </Button>
        </div>
      )}
      {!readingMode && (
        <Button
          type="primary"
          className="read-toggle-button start-button"
          size="large"
          onClick={props.toggleReadingMode}
        >
          Start Test
        </Button>
      )}
      <Tooltip title="Full Screen" className="fullscreen-toggle-button">
        <Button
          type="text"
          icon={<FullscreenOutlined color="black" />}
          onClick={toggleFullScreen}
          style={{ backgroundColor: "white" }}
        />
      </Tooltip>
    </div>
  );
};

export default TextBox;
