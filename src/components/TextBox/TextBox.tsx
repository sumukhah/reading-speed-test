import React from "react";
import { Input, Button, Tooltip } from "antd";
import { FullscreenOutlined } from "@ant-design/icons";
import { textStyle } from "../../helpers/types";
import "./TextBox.scss";

const { TextArea } = Input;

interface TextBoxProps {
  fontStyle: textStyle;
  toggleFullScreen: () => void;
}

const TextBox: React.FC<TextBoxProps> = ({ fontStyle, toggleFullScreen }) => {
  return (
    <div className="text-box">
      <TextArea
        placeholder="Add your own Text or select a Topic and press Start"
        style={fontStyle}
      />
      <Button type="primary" className="read-start-button" size="large">
        Start Test
      </Button>
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
