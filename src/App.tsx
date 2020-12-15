import React from "react";
import { Layout } from "antd";
import "./App.css";
import "antd/dist/antd.css";

import AppHeader from "./components/AppHeader/AppHeader";
import Footer from "./components/Footer/Footer";
function App() {
  console.log("hi");
  return (
    <Layout className="App">
      <AppHeader />
      <Footer />
    </Layout>
  );
}

export default App;
