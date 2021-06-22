import React from "react";
import { Row, Col, Form, Input, Button, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const LoginForm = () => {
  return (
    <Row justify="center">
      <Col xs={24} xl={12} md={24} className="custom-box">
        <Row justify="center">
          <Col span={24}>
            <Title style={{ textAlign: "center" }} level={2}>
              Sign In
            </Title>
            <Form size="large" name="sign-in" initialValues={{}}>
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
                  <Button id="btn" htmlType="submit">
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
