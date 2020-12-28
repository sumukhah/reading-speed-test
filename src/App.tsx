import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import AppHeader from "./components/AppHeader/AppHeader";
import Footer from "./components/Footer/Footer";
import AppIntro from "./components/AppIntroduction/AppIntroduction";
import ReadContainer from "./container/ReadContainer/ReadContainer";
import StatisticsContainer from "./container/StatisticsContainer/StatisticsContainer";
import wpmContext from "./context/wpmContext";
import AdblockDetect from "./components/AdblockDetect/AdblockDetect";
import VerticalBannerAd from "./components/VerticalBannerAds/VerticalBannerAds";
import SquareBannerAd from "./components/SquareBannerAd/SquareBannerAd";
import "./App.scss";
import ReactGA from "react-ga";

function App() {
  const [wpm, setWpm] = useState<number>(0);
  useEffect(() => {
    ReactGA.initialize("UA-186125804-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <AppHeader />
      <AdblockDetect />
      <wpmContext.Provider value={{ wpm, setWpm }}>
        <Switch>
          <Route path="/stats">
            <AppBody>
              <StatisticsContainer />
            </AppBody>
          </Route>
          <Route path="/">
            <AppBody>
              <AppIntro />
              <ReadContainer />
            </AppBody>
          </Route>
        </Switch>
      </wpmContext.Provider>
      <Footer />
    </Router>
  );
}

const AppBody = (props: { children: JSX.Element[] | JSX.Element }) => {
  return (
    <div className="App">
      <Row className="app-body">
        <Col flex={2} style={{ minHeight: "90vh" }}>
          <SquareBannerAd />
        </Col>
        <Col flex="5 500px" style={{ minHeight: "90vh" }}>
          {props.children}
        </Col>
        <Col flex={2} style={{ minHeight: "90vh" }}>
          <VerticalBannerAd />
        </Col>
      </Row>
    </div>
  );
};

export default App;
