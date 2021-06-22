import React from "react";
import { UserOutlined, SolutionOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import { Avatar } from "antd";
import { Link } from "react-router-dom";
const UserNav = () => {
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
      <Link to="/my-orders">
        <strong>
          <SolutionOutlined /> My Orders
        </strong>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <strong>
          <SolutionOutlined /> Log Out
        </strong>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown
      overlay={menu}
    >
      <Avatar
        src="https://lh3.googleusercontent.com/ogw/ADea4I4JEjM3mC6ibl3RQozMexPs1W8u2AKBrV6mgtwXmA=s32-c-mo"
      />
    </Dropdown>
  );
};

export default UserNav;
