import React from "react";
import { Button } from "antd";

import "./AppHeader.scss";

const AppHeader = () => {
  return (
    <div className="header-container">
      <div className="app-logo">App Logo</div>
      <div>
        <Button className="button" type="link">
          Guide
        </Button>
        <Button className="button" type="link">
          Statistics
        </Button>
        <Button className="button" type="link">
          About Us
        </Button>
      </div>
    </div>
  );
};

export default AppHeader;
