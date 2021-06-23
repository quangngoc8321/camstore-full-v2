import React, { useContext } from "react";
import { Row, Col, Form, Input, Button, Typography } from "antd";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

const { Title } = Typography;
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const LoginForm = () => {
  let query = useQuery();
  let redirect = query.get("redirect")

  const {login, loading} = useContext(AuthContext)
  return (
    <Row justify="center">
      <Col xs={24} xl={12} md={24} className="custom-box">
        <Row justify="center">
          <Col span={24}>
            <Title style={{ textAlign: "center" }} level={2}>
              Sign In
            </Title>
            <Form size="large" name="sign-in" onFinish={(values)=> login(values,redirect)}>
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item>
                <div
                  style={{
                    display: "flex",
                    direction: "column",
                    justifyContent: "center",
                  }}
                >
                  <Button id="btn" htmlType="submit" loading={loading}>
                    Sign In
                  </Button>
                </div>
                <p style={{ marginTop: "0.5rem", textAlign: "center" }}>
                  Don't have account 👉
                  <Link to="/register">
                  
                  <span>
                    <strong>Register Now!</strong>
                  </span>
                  </Link>
                </p>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default LoginForm;
