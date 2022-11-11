import React, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    console.log(e);
    setCurrent(e.key);
  };

  return (
    <Menu
      mode="horizontal"
      onClick={handleClick}
      defaultSelectedKeys={[current]}
    >
      <Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Home</Link>
      </Item>
      <Menu.SubMenu icon={<SettingOutlined />} key="SubMenu" title="Dropdown">
        <Item key="two">Option 1</Item>
        <Item key="three">Option 2</Item>
      </Menu.SubMenu>
      <Item key="register" icon={<UserAddOutlined />} className="float-right">
        <Link to="/register">Register</Link>
      </Item>
      <Item key="login" icon={<UserOutlined />} className="float-right">
        <Link to="/login">Login</Link>
      </Item>
    </Menu>
  );
};

export default Header;
