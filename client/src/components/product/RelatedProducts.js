import React from "react";
import {  Typography,  List,  } from "antd";
import { useParams } from "react-router";
import axios from "axios";
import { useQuery } from "react-query";
import ProductItem from "./ProductItem";
const { Title } = Typography;

const RelatedProducts = () => {
  const { slug } = useParams();
  const fetchProducts = (slug) => {
    const option = {
      url: `/api/v1/products/related-products?slug=${slug}`,
      method: "get",
    };
    return axios(option);
  };
  const { isLoading, data } = useQuery(["related-products", slug], () =>
    fetchProducts(slug)
  );
  if (isLoading) {
    return null;
  }
  const products = data.data.products
  return (
    <div>
      <Title level={4} style={{marginBottom:"2rem"}}>👋 Related Products</Title>
      <List
        grid={{
          gutter: { xs: 10, sm: 10, md: 10, lg: 30, xl: 30 },
          column: 6,
          xs: 2,
          sm: 2,
          md: 3,
        }}
        itemLayout="horizontal"
        dataSource={products}
        loading={isLoading}
        renderItem={(item) => <ProductItem item={item} />}
      />      
    </div>
  );
};

export default RelatedProducts;
