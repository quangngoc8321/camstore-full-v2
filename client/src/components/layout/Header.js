import React, { useContext } from "react";
import { ShopOutlined, LoadingOutlined } from "@ant-design/icons";
import { Row, Col, Typography, Button, Badge } from "antd";
import UserNav from "../nav/UserNav";
import AdminNav from "../nav/AdminNav";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import { CartContext } from "../context/CartContextProvider";
const { Title } = Typography;

const Header = () => {
  const {isAuthStateReady, user} = useContext(AuthContext);

  const { data } = useContext(CartContext);
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
              <Badge count={data?.data.totalItems} offset={[9,0]}>
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
              {isAuthStateReady ? (<>
                  {user && user.role === "ADMIN" && <AdminNav user={user} /> }
                  {user && user.role === "USER" && <UserNav user={user}/> }
                  {!user &&   
                    <Link to="/login">
                  <Button id="btn" >Sign In</Button>
                  </Link>}
               </>):(<>
                <LoadingOutlined />
               </>)} 
            </Col>
          </Row>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
