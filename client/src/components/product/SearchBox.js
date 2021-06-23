import React from "react";
import { Input, Typography, Button, Divider, Row, Col } from "antd";
const { Title } = Typography;
const { Search } = Input;

const SearchBox = ({query, setQuery}) => {
  return (
    <Row justify="center" align="middle">
      <Col xs={24} xl={18}>
        <Title level={3} style={{ textAlign: "center", margin: "1rem 0" }}>
          👋 What products are you interested in?
        </Title>

        <Search
          placeholder="Search Product..."
          enterButton={<Button id="btn">Search</Button>}
          size="large"
          onChange={(e) => setQuery({ ...query, search: e.target.value })}
        />
      </Col>
      <Divider />
    </Row>
  );
};

export default SearchBox;
