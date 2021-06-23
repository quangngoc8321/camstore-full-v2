
import React from "react";
import { Avatar, Typography, Space, List } from "antd";

const { Title } = Typography;
const CustomerOrdersListItem = () => {
    return (
        <List.Item style={{ border: "1px solid #eaeaea", padding: "1rem" }}>
        <Title level={5}>Order Id: </Title>
        <p>0320e9423423409d</p>
        <Title level={5}>Shipping Details: </Title>
        <p>Name: Tu Tran</p>
        <p>Email: trandinhtu.dev@gmail.com</p>
        <p>Address: 26 Benglight Cresent</p>
        <Title level={5}>Items: </Title>
        <Space direction="vertical">
          <Space align="baseline">
            <Avatar
              src="https://res.cloudinary.com/dkalgpanl/image/upload/v1624054990/cameraStore/product/xp5ysj0lxtpq5p5o4hnd.jpg"
              shape="square"
              size="large"
            />
            <p>RICOHFLEX MILLION TLR 22</p>
          </Space>
          <Space align="baseline">
            <Avatar
              src="https://res.cloudinary.com/dkalgpanl/image/upload/v1624054990/cameraStore/product/xp5ysj0lxtpq5p5o4hnd.jpg"
              shape="square"
              size="large"
            />
            <p>RICOHFLEX MILLION TLR 22</p>
          </Space>
        </Space>

        <Title level={5}>Total: </Title>
        <p>$2,500</p>
        <Title level={5}>Payment Status: </Title>
        <strong
          style={{
            background: "#95de64",
            padding: ".2rem .5rem",
            color: "white",
          }}
        >
          &#10004; Paid
        </strong>
      </List.Item>
    )
}

export default CustomerOrdersListItem
