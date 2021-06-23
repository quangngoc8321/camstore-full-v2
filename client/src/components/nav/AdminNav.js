import React, { useContext } from "react";
import {
  PoweroffOutlined,
  BarsOutlined,
  UserOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { Menu, Dropdown, Avatar } from "antd";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

const AdminNav = ({user}) => {
  const {signOut} = useContext(AuthContext);
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
      <strong onClick={signOut}>
          <PoweroffOutlined /> Log Out
          </strong>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>
      <Avatar
      src={user.avatar.url}
      />
    </Dropdown>
  );
};

export default AdminNav;
