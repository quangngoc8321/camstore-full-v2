import React from "react";
import {
  Button,
  Space,
  Typography,
} from "antd";

import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ListContainer from "../common/ListContainer";
const { Title } = Typography;
const AdminProductList = () => {
  return (
    <div className="custom-box">
      <Space align="center" wrap style={{ marginBottom: "2rem" }}>
        <Title style={{ margin: "0" }} level={2}>
          Manage Products
        </Title>
        <Link to="/admin/products/create">
        <Button id="btn">
          Add New Product <PlusOutlined />
        </Button>
        </Link>    
        
      </Space>
      <ListContainer />
    </div>
  );
};

export default AdminProductList;
