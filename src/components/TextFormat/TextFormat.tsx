import React from "react";
import { Select, Tooltip, Button, InputNumber } from "antd";
import { BoldOutlined } from "@ant-design/icons";
import { availableTopics, availableFontFamily } from "../../helpers";
import S from "string";

import "./TextFormat.scss";
const { Option } = Select;

interface TextFormatProps {
  setFontFamily: (font: string) => void;
  setFontSize: (size: number) => void;
  setTopic: (topic: string) => void;
  setIsBold: () => void;
  setIsFullScreen: () => void;
  defaultTopic: string;
  defaultSize: number;
  defaultFontFamily: string;
}

const TextFormat: React.FC<TextFormatProps> = (props) => {
  return (
    <div className="text-format-form">
      <div>
        <Select
          defaultValue={props.defaultFontFamily}
          className="font-select-dropdown"
          onChange={(value) => props.setFontFamily(value)}
        >
          {availableFontFamily.map((family) => {
            return (
              <Option value={family} key={family}>
                {S(family).humanize().s}
              </Option>
            );
          })}
        </Select>
        <InputNumber
          min={10}
          max={30}
          defaultValue={props.defaultSize}
          className="font-size"
          onChange={(value) => {
            props.setFontSize(value as number);
          }}
        />
        <Select
          defaultValue={props.defaultTopic}
          className="topic-select-dropdown"
          onChange={(val) => props.setTopic(val)}
        >
          {Object.keys(availableTopics).map((topic) => {
            return (
              <Option value={topic} key={topic}>
                {S(topic).humanize().s}
              </Option>
            );
          })}
          {/* <Option value="Random">Random</Option>
          <Option value="Articles">Articles</Option>
          <Option value="News">News</Option>
          <Option value="Technology">Technology</Option>
          <Option value="Sports">Sports</Option>
          <Option value="Bible">Bible</Option>
          <Option value="Quran">Quran</Option>
          <Option value="Geetha">Bhagavath Geetha</Option> */}
        </Select>
      </div>
      <div>
        <Tooltip title="Bold">
          <Button
            onClick={props.setIsBold}
            // style={{ fontWeight: "bold" }}
            icon={<BoldOutlined />}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default TextFormat;
