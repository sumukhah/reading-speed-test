import React from "react";
import { Layout } from "antd";
import "./App.scss";
import "antd/dist/antd.css";
import { Row, Col, Divider } from "antd";

import AppHeader from "./components/AppHeader/AppHeader";
import Footer from "./components/Footer/Footer";
import AppIntro from "./components/AppIntroduction/AppIntroduction";
import ReadContainer from "./container/ReadContainer/ReadContainer";

function App() {
  console.log("hi");
  return (
    <div className="App">
      <AppHeader />

      <Row className="app-body">
        <Col flex={2}>1 / 6</Col>
        <Col flex="5 500px">
          <AppIntro />
          <ReadContainer />
        </Col>
        <Col flex={2}>1 / 6</Col>
      </Row>

      <Footer />
    </div>
  );
}

export default App;
