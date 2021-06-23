import React, { useContext } from "react";
import { UserOutlined, SolutionOutlined,PoweroffOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import { Avatar } from "antd";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
const UserNav = ({user}) => {
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
      <Link to="/my-orders">
        <strong>
          <SolutionOutlined /> My Orders
        </strong>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
      <strong onClick={signOut}>
          <PoweroffOutlined /> Log Out
          </strong>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown
      overlay={menu}
    >
      <Avatar
        src={user.avatar.url}
      />
    </Dropdown>
  );
};

export default UserNav;
