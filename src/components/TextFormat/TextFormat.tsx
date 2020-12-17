import React from "react";
import { Select, Tooltip, Button, InputNumber } from "antd";
import { FullscreenOutlined, BoldOutlined } from "@ant-design/icons";

import "./TextFormat.scss";
const { Option } = Select;

export default function TextFormat() {
  return (
    <div className="text-format-form">
      <div>
        <Select defaultValue="Ariel" className="font-select-dropdown">
          <Option value="ariel">Ariel</Option>
          <Option value="roboto">Roboto</Option>
        </Select>
        <InputNumber
          min={10}
          max={30}
          defaultValue={20}
          className="font-size"
        />
        <Select defaultValue="Random" className="topic-select-dropdown">
          <Option value="Random">Random</Option>
          <Option value="Articles">Articles</Option>
          <Option value="News">News</Option>
          <Option value="Technology">Technology</Option>
          <Option value="Sports">Sports</Option>
          <Option value="Bible">Bible</Option>
          <Option value="Quran">Quran</Option>
          <Option value="Geetha">Bhagavath Geetha</Option>
        </Select>
      </div>
      <div>
        <Tooltip title="Bold">
          <Button
            // style={{ fontWeight: "bold" }}
            icon={<BoldOutlined />}
          />
        </Tooltip>
        <Tooltip title="Full Screen">
          <Button icon={<FullscreenOutlined />} />
        </Tooltip>
      </div>
    </div>
  );
}
