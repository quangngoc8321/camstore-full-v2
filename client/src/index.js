import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Row, Col } from "antd";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
   <Row justify="center" align="middle">
      <Col xs={24} sm={24} md={24} lg={20} xl={16}>
        <App />
      </Col>
    </Row>
  </React.StrictMode>,
  document.getElementById("root")
);
