import React from "react";
import {
  PoweroffOutlined,
  BarsOutlined,
  UserOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { Menu, Dropdown, Avatar } from "antd";
import { Link } from "react-router-dom";

const AdminNav = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/profile">
        <strong>
          <UserOutlined /> Profile
        </strong>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
      <Link to="/admin/customer-orders">
        <strong>
          <SolutionOutlined /> Customer Orders
        </strong>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
      <Link to="/admin/products">
        <strong>
          <BarsOutlined /> Products
        </strong>
        </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <strong>
          <PoweroffOutlined /> Log Out
        </strong>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>
      <Avatar
        src="https://lh3.googleusercontent.com/ogw/ADea4I4JEjM3mC6ibl3RQozMexPs1W8u2AKBrV6mgtwXmA=s32-c-mo"
      />
    </Dropdown>
  );
};

export default AdminNav;
