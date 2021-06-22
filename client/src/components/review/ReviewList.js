import React from "react";
import { Rate, Col, Typography, Space, List, Avatar, Tooltip } from "antd";
import { UserOutlined } from "@ant-design/icons";


const { Title } = Typography;
const ReviewList = () => {
  const reviews = [
    {
      user: {
        name: "tutran",
      },
      ratingPoint: 4.5,
      content:"amazing product"
    },
    {
        user: {
          name: "tutran",
        },
        ratingPoint: 4.5,
        content:"amazing product"
      },
      {
        user: {
          name: "tutran",
        },
        ratingPoint: 4,
        content:"amazing product"
      },
      {
        user: {
          name: "tutran",
        },
        ratingPoint: 3,
        content:"amazing product"
      },
  ];
  return (
    <Col xl={13} xs={24} style={{ marginBottom: "2rem" }}>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Title level={4}>🏆 Customer Reviews</Title>
        <List
          pagination={{
            total: 4,
            pageSize: 2,
          }}
          itemLayout="horizontal"
          dataSource={reviews}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <>
                    <Tooltip title={item.user.name}>
                      <Avatar
                        style={{ backgroundColor: "#87d068" }}
                        icon={<UserOutlined />}
                      />
                    </Tooltip>
                  </>
                }
                title={
                  <p
                    style={{
                      wordWrap: "break-word",
                      wordBreak: "break-word",
                      whiteSpace: "normal",
                      textAlign: "start",
                    }}
                  >
                    <strong>{item.content}</strong> <br />2 minute ago
                  </p>
                }
                description={
                  <div>
                    <Rate allowHalf value={item.ratingPoint} disabled /> (
                    {item.ratingPoint})
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </Space>
    </Col>
  );
};

export default ReviewList;
