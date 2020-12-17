import React, { useState } from "react";
import { Card } from "antd";
import "./ReadContainer.scss";

import TextBox from "../../components/TextBox/TextBox";
import TextFormat from "../../components/TextFormat/TextFormat";

export default function ReadContainer() {
  return (
    <div className="read-box-container">
      <TextFormat />

      <TextBox />
    </div>
  );
}
