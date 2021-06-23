import React from "react";
import {  Typography } from "antd";
import ListContainer from "../common/ListContainer";

const { Title } = Typography;
const MyOrders = () => {
  return (
    <div className="custom-box">
      <Title level={2}>My Orders</Title>
      <ListContainer path="/orders/my-orders" type="myOrders"/>
    </div>
  );
};

export default MyOrders;
