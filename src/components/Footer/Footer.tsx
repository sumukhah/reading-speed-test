import React from "react";
import { Layout } from "antd";
import "./Footer.scss";

export default function Footer() {
  return (
    <Layout.Footer className="footer-container" style={{ textAlign: "center" }}>
      <span>
        <a href="https://readingspeedtest.tech">Reading Speed Test </a>
        Software Copyright ©2020, All Rights Reserved. Click
      </span>
      <a href="mailto:sumukha214@gmail.com?subject=Feedback on Speed read test software">
        here
      </a>
      <span>to Feedback</span>
    </Layout.Footer>
  );
}
