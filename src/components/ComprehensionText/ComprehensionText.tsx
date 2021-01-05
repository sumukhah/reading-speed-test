import React from "react";
import { Link } from "react-router-dom";
import "./ComprehensionText.scss";

export default function ComprehensionText() {
  return (
    <div className="app-intro-container">
      <h1>Reading Speed and Comprehension are proportional</h1>
      <p>
        <Link to="/">Speed reading</Link> will help you to improve your
        comprehension up to a point. By improving your reading speed, you will
        spend less time in sub-vocalization. If you master visualization while
        reading, you can dramatically improve reading speed and can become an
        expert.
      </p>
    </div>
  );
}
