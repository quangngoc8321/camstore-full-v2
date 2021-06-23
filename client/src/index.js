import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Row, Col } from "antd";
import App from "./App";
import AuthContextProvider from "./components/context/AuthContextProvider";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider} from "react-query";
import MyQueryContextProvider from "./components/context/MyQueryContextProvider";

const queryClient = new QueryClient()

ReactDOM.render(
  <Router>
  <AuthContextProvider>
    <MyQueryContextProvider>
   <Row justify="center" align="middle">
      <Col xs={24} sm={24} md={24} lg={20} xl={16}>
      <QueryClientProvider client={queryClient}>
              <App />
         </QueryClientProvider>
      </Col>
    </Row>
    </MyQueryContextProvider>
    </AuthContextProvider>
    </Router>
  ,
  document.getElementById("root")
);
