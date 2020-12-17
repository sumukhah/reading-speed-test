import React from "react";
import { Input, Button } from "antd";
import "./TextBox.scss";

const { TextArea } = Input;
export default function TextBox() {
  return (
    <div className="text-box">
      <TextArea
        rows={22}
        placeholder="Add your own Text or select a Topic and press Start"
      />
      <Button type="primary" className="read-start-button" size="large">
        Start Test
      </Button>
    </div>
  );
}
