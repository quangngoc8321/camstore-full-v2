
import React from "react";
import { Avatar, Typography, Space, List,Button } from "antd";
import axios from "axios";
import stripePromise from "../../helpers/stripeConfig";

const { Title } = Typography;
const MyOrdersListItem = ({item}) => {
  const handleOnClick = async () => {
    const token = localStorage.getItem("token"); 
    const option = {
      url: "/api/v1/orders/stripe",
      method: "put",
      data: {
        orderId: item._id
      },
      headers: {
          'Authorization': 'Bearer ' + token
      }
  };
  const response =  await axios(option);   
     // Get Stripe.js instance
  const stripe = await stripePromise;

  await stripe.redirectToCheckout({
    sessionId: response.data.id,
  });

  }
    const {shippingDetails, orderItems, isPaid, totalPrice} = item
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
        {isPaid ?  <strong
          style={{
            background: "#95de64",
            padding: ".2rem .5rem",
            color: "white",
          }}
        >
          &#10004; Paid
        </strong> : ( <Button
          id="btn"
          onClick={handleOnClick}
        >
          &#9785; Unpaid &rarr; Proccess to paid
        </Button>)}
       
      </List.Item>
    )
}

export default MyOrdersListItem
