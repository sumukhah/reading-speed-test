import React from "react";
import { Typography } from "antd";
import "./ComprehensionText.scss";
const { Title } = Typography;

export default function ComprehensionText() {
  return (
    <div className="app-intro-container">
      <Title level={3}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi iure sed
        at veniam ad.
      </Title>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quos!
        Perspiciatis quis ex velit minima, vero at tempore, aspernatur error
        quidem accusantium commodi sit hic alias, eum delectus placeat nostrum.
      </p>
    </div>
  );
}
