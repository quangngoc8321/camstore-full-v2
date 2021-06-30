
import React from "react";
import { Avatar, Typography, Space, List } from "antd";

const { Title } = Typography;
const CustomerOrdersListItem = ({item}) => {
  const {shippingDetails, orderItems, totalPrice} = item

    return (
      <List.Item style={{ border: "1px solid #eaeaea", padding: "1rem" }}>
      <Title level={5}>Order Id: </Title>
      <p>{item._id}</p>
      <Title level={5}>Shipping Details: </Title>
      <p>Name: {shippingDetails.name}</p>
      <p>Email: {shippingDetails.email}</p>
      <p>Address: {shippingDetails.address}</p>
      <Title level={5}>Items: </Title>
      <Space direction="vertical">
          {orderItems.map(order => (
             <Space align="baseline">
             <Avatar
               src={order.product.image.url}
               shape="square"
               size="large"
             />
             <p>{order.product.name} - quantity: {order.quantity} - ${order.product.price} /each</p>
           </Space>
          ))}
       
      </Space>

      <Title level={5}>Total: </Title>
      <p>${totalPrice}</p>
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
