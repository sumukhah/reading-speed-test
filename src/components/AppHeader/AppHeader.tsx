import React from "react";
import { Button } from "antd";

import "./AppHeader.scss";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <div className="header-container">
      <div className="app-logo">
        <Button className="button" type="link">
          <h2>
            <Link to="/">Reading speed test</Link>
          </h2>
        </Button>
      </div>
      <div className="navs-href">
        <Link to="/">Home</Link>
        <Link to="/stats">Statistics</Link>
        <Link to="/guide">Guide</Link>
      </div>
    </div>
  );
};

export default AppHeader;
