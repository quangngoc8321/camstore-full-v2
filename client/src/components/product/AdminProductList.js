import React from "react";
import {
  Row,
  Col,
  Button,
  Space,
  Popconfirm,
  List,
  Avatar,
  Typography,
} from "antd";

import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Title } = Typography;
const AdminProductList = () => {
  const products = [{}, {}, {}, {}, {}];
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
      <List
        grid={{
          gutter: { xs: 10, sm: 10, md: 10, lg: 20, xl: 20 },
          column: 1,
          xs: 1,
          sm: 2,
          md: 3,
        }}
        pagination={{
          total: 12,
          pageSize: 8,
        }}
        itemLayout="horizontal"
        dataSource={products}
        renderItem={(item) => (
          <List.Item style={{ border: "1px solid #eaeaea", padding: "1rem" }}>
            <Row justify="space-between" align="middle">
              <Col xs={24} xl={20}>
                <Space style={{ margin: "1rem 0" }}>
                  <Avatar
                    src="https://res.cloudinary.com/dkalgpanl/image/upload/v1624054990/cameraStore/product/xp5ysj0lxtpq5p5o4hnd.jpg"
                    shape="square"
                    size="large"
                  />
                  <strong>RICOHFLEX MILLION TLR 22 ($2,500 )</strong>
                </Space>
              </Col>
              <Col>
              <Link to="/admin/products/update/abc"> 
                <Button style={{ marginRight: "5px" }} type="ghost">
                  <strong>Update</strong>
                </Button>
                </Link>
                <Popconfirm
                  placement="top"
                  title={<strong>Are you sure to delete this product?</strong>}
                  // onConfirm={()=> mutation.mutate(item)}
                  okText={<strong>Yes</strong>}
                  cancelText={<strong>No</strong>}
                >
                  <Button id="btn">
                    <strong>Delete</strong>
                  </Button>
                </Popconfirm>
              </Col>
            </Row>
          </List.Item>
        )}
      />
    </div>
  );
};

export default AdminProductList;
