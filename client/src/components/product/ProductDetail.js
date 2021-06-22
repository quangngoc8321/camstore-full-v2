import React from "react";
import { Row, Rate, Col,Button, Typography, Divider } from "antd";
import { Breadcrumb } from 'antd';
import ReviewContainer from "../review/ReviewContainer";
import { Link } from "react-router-dom";


const { Title } = Typography;
const ProductDetail = () => {
  const product = {
    slug: "abc",
    price: 1000,
    name: "RICOHFLEX MILLION TLR 22",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nemo vitae assumenda impedit, est porro dolor vel molestiae ea dolore quis accusamus debitis quibusdam repellat repellendus excepturi, nostrum facilis beatae?",
    image: "https://res.cloudinary.com/dkalgpanl/image/upload/v1624252412/cameraStore/product/wcpctfq4piqwgqqcarvx.jpg",
    totalReviews: 5,
    ratingAvg: 4.5
}

  return (
    <>  
      <Breadcrumb style={{marginBottom:'1rem'}}>
        <Breadcrumb.Item>
        <Link to="/">
        <strong>
        Home
        </strong>
        </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item ><span style={{textTransform:"capitalize"}}>{product.slug}</span></Breadcrumb.Item>
      </Breadcrumb>
      <div className="custom-box">
      <Row justify="space-between"  style={{marginBottom:'3rem'}}>
      <Col   xs={24}
              sm={9}
              md={9}
              lg={9}
              xl={9}>
                  <div>
        <img
          src={product.image}
          alt="product detail"
          style={{ maxWidth: "100%", height: "auto", marginBottom:'1rem' }}
          
        />
        </div>
      </Col>
      <Col
          xs={24}
          sm={14}
          md={14}
          lg={14}
          xl={14}
      >
        <Title style={{ margin: "0", textTransform:"uppercase" }} level={3}>
        {product.name}
        </Title>
        <Title style={{ margin: "0" }} level={4}>
          Price: ${product.price}
        </Title>
        <Divider />
        <Rate allowHalf value={Math.round(product.ratingAvg * 10)/10} disabled />{" "}
        <span style={{ fontSize: "0.7rem" }}>({Math.round(product.ratingAvg * 10)/10} / {product.totalReviews} reviews)</span>
        <p
          
          style={{ margin: "1.5rem 0" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          impedit! Ullam, praesentium dolorum fugiat optio quaerat vel error
          veritatis? Odit aut voluptas dolores aliquam facere modi incidunt
          temporibus adipisci reiciendis?
        </p>
        <Button id="btn">
          Add To Cart
        </Button>
      </Col>
    </Row>
    <Row justify="space-between" align="top" style={{borderTop:"1px solid #eee", padding: "1rem 0"}}>
        <ReviewContainer />
    </Row>
      </div>
  
    </>
  );
};

export default ProductDetail;
