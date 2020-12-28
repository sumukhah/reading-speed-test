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
            <Link to="/">App Logo</Link>
          </h2>
        </Button>
      </div>
      <div>
        <Button className="button" type="link">
          <h2>
            <Link to="/">Home</Link>
          </h2>
        </Button>
        <Button className="button" type="link">
          <h2>
            <Link to="/stats">Statistics</Link>
          </h2>
        </Button>
      </div>
    </div>
  );
};

export default AppHeader;
