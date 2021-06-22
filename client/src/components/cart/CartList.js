import React from "react";
import { List, Space} from "antd";
import { Link } from "react-router-dom";
import { Select } from "antd";
const { Option } = Select;

const CartList = () => {
  const cartItems = [{}, {}, {}];
  return (
    <List
      grid={{
        column: 1,
        xs: 1,
        sm: 1,
        md: 1,
      }}
      itemLayout="horizontal"
      dataSource={cartItems}
      pagination={{
          pageSize: 4,
          total: 8,
      }}
      renderItem={(item) => (
        <List.Item>
          <Space
            style={{
              justifyContent: "space-between",
              display: "flex",
              border: "1px solid #eee",
              padding: "0.5rem",
            }}
          >
            <div>
              <Link to={`/products/abc`}>
                <img
                  src="https://res.cloudinary.com/dkalgpanl/image/upload/v1624252412/cameraStore/product/wcpctfq4piqwgqqcarvx.jpg"
                  alt="cart"
                  width="100"
                />
                <br />
              </Link>
              <Link to={`/products/abc`} style={{ textTransform: "uppercase", color:"black" }}>
                <strong>RICOHFLEX MILLION TLR 22 ($1000)</strong>
              </Link>
            </div>
            <div>
              <p>Quantity</p>
              <Select value={1} style={{ width: 120, margin: "0 5px 10px 0" }}>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
              </Select>
              <strong style={{borderRadius:"2px",padding: ".4rem .5rem",cursor:"pointer", background:"#d9d9d9"}}>Remove</strong>
            </div>
          </Space>
        </List.Item>
      )}
    />
  );
};

export default CartList;
