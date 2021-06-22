import React from "react";
import { Row, Col, Avatar, Typography, Space } from "antd";

const { Title } = Typography;

const Profile = () => {
  return (
    <Row justify="center" align="middle">
      <Col xs={24} xl={12} className="custom-box">
        <Space direction="vertical">
          <Title level={3}>Profile</Title>
          <Avatar
            size="large"
            src="https://lh3.googleusercontent.com/ogw/ADea4I4JEjM3mC6ibl3RQozMexPs1W8u2AKBrV6mgtwXmA=s32-c-mo"
          />

          <p>Name: Tu Tran</p>
          <p>Email: trandinhtu.dev@gmail.com</p>
          <p>Role: USER</p>
        </Space>
      </Col>
    </Row>
  );
};

export default Profile;
