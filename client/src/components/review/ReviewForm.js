import React from "react";
import { Rate, Col, Typography, Button, Space } from "antd";
import { Input } from "antd";

const { Title } = Typography;
const { TextArea } = Input;

const ReviewForm = () => {
  return (
    <Col xl={10} xs={24}>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Title level={4}>Write your review</Title>
        <div>
          Select Rating Point:
          <Rate allowHalf />
          (0 / 5 stars)
        </div>
        <TextArea
          rows={4}
          placeholder="Your review goes here..."
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
        <Button id="btn">Post Review</Button>
      </Space>
    </Col>
  );
};

export default ReviewForm;
