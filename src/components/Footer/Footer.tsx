import React from "react";
import { Layout } from "antd";
import "./Footer.scss";

export default function Footer() {
  return (
    <Layout.Footer className="footer-container" style={{ textAlign: "center" }}>
      <u>Sumukha Hegde</u>
      <span>
        , Reading Speed Test Software Copyright © 1996-2020, All Rights
        Reserved. Click
      </span>
      <a href="mailto:sumukha214@gmail.com?subject=Feedback on Speed read test software">
        here
      </a>
      <span>to Feedback</span>
    </Layout.Footer>
  );
}
