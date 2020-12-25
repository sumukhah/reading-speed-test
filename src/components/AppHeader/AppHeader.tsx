import React from "react";
import { Button } from "antd";

import "./AppHeader.scss";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <div className="header-container">
      <div className="app-logo">App Logo</div>
      <div>
        <Button className="button" type="link">
          <Link to="/">Home</Link>
        </Button>
        <Button className="button" type="link">
          <Link to="/stats">Statistics</Link>
        </Button>
      </div>
    </div>
  );
};

export default AppHeader;
