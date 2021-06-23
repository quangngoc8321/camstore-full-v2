import React from "react";
import { List, Rate, Badge } from "antd";
import { Link } from "react-router-dom";
const ProductItem = ({ item }) => {
  const { price, name, image, description, totalReviews, ratingAvg,slug } = item;
  return (
    <List.Item style={{ marginBottom: "1.8rem" }} className="product-item">
      <Badge.Ribbon text={<strong>${price}</strong>} color="black">
      <Link to={`/products/${slug}`}>
          <img
            style={{ maxWidth: "100%", height: "auto", marginBottom: "1.2rem" }}
            className="product-image"
            alt="product cover"
            src={image.url}
          />
        </Link>
      </Badge.Ribbon>

      <div style={{ padding: "0.8rem" }}>
        <List.Item.Meta title={ <Link to={`/products/${slug}`}><strong>{name}</strong></Link>} />
        <p>{description}</p>
        <Rate allowHalf value={Math.round(ratingAvg * 10) / 10} disabled />{" "}
        <span style={{ fontSize: "0.8rem" }}>
          ({Math.round(ratingAvg * 10) / 10} / {totalReviews} reviews)
        </span>
      </div>
    </List.Item>
  );
};

export default ProductItem;
