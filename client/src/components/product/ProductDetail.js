import React from "react";
import { Row, Rate, Col,Typography, Divider,Spin } from "antd";
import { Breadcrumb } from 'antd';
import ReviewContainer from "../review/ReviewContainer";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { axiosFunction } from "../../helpers/axiosFunction";
import AddToCartBtn from "../cart/AddToCartBtn"
import RelatedProducts from "./RelatedProducts";
const { Title } = Typography;
const ProductDetail = () => {
  let {slug} = useParams();
  const { isLoading, data } = useQuery(["product", slug], ()=> axiosFunction(null,null,`/products/${slug}`,"get"))
    if(isLoading){
        return <Spin size="large" />;
    }
  const product = data.data.product

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
          src={product.image.url}
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
        <AddToCartBtn product={product} />
      </Col>
    </Row>
    <Row justify="space-between" align="top" style={{borderTop:"1px solid #eee", padding: "1rem 0"}}>
        <RelatedProducts />
    </Row>
    <Row justify="space-between" align="top" style={{borderTop:"1px solid #eee", padding: "1rem 0"}}>
        <ReviewContainer productId = {product._id} />
    </Row>
      </div>
  
    </>
  );
};

export default ProductDetail;
