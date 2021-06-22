import React from "react";
import { ShopOutlined } from "@ant-design/icons";
import { Row, Col, Typography, Button, Badge } from "antd";
import UserNav from "../nav/UserNav";
import AdminNav from "../nav/AdminNav";
import { Link } from "react-router-dom";
const { Title } = Typography;

const Header = () => {
  return (
    <header>
      <Row gutter={{ sm: 16, md: 24, lg: 32 }} align="middle">
        <Col className="gutter-row" xl={17} xs={6}>
          <Link to="/">
            <Title
              level={4}
              style={{ margin: "0", color: "var(--main-color)" }}
            >
              📷
            </Title>
          </Link>
        </Col>
        <Col className="gutter-row" xl={7} xs={18}>
          <Row justify="space-between" align="middle">
            <Col
              xs={12}
              sm={12}
              md={8}
              lg={8}
              xl={14}
              style={{ textAlign: "right" }}
            >
              <Link to="/cart">
                <Badge count={0} offset={[9, 0]}>
                  <strong>
                    <ShopOutlined /> Cart
                  </strong>
                </Badge>
              </Link>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={8}
              lg={8}
              xl={10}
              style={{ textAlign: "right" }}
            >
              {/* <Link to="/login">
                <Button id="btn">Login</Button>
              </Link> */}
              {/* <UserNav /> */}
              <AdminNav />
            </Col>
          </Row>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
