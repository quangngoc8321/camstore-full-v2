import React from "react";
import {  Typography } from "antd";
import ListContainer from "../common/ListContainer";
const { Title } = Typography;
const CustomerOrders = () => {
  return (
    <div className="custom-box">
      <Title level={2}>Customer Orders</Title>
      <ListContainer path="/orders/customer-orders" type="customerOrders" />
    </div>
  );
};

export default CustomerOrders;
