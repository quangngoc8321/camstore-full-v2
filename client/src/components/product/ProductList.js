import React from 'react'
import { List } from "antd";
import ProductItem from './ProductItem';
const products = [ {
    slug: "abc",
    price: 1000,
    name: "RICOHFLEX MILLION TLR 22",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nemo vitae assumenda impedit, est porro dolor vel molestiae ea dolore quis accusamus debitis quibusdam repellat repellendus excepturi, nostrum facilis beatae?",
    image: "https://res.cloudinary.com/dkalgpanl/image/upload/v1624252412/cameraStore/product/wcpctfq4piqwgqqcarvx.jpg",
    totalReviews: 5,
    ratingAvg: 4.5
},
{
    slug: "abc",
    price: 1000,
    name: "CANON SURE SHOT TELE MAX",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nemo vitae assumenda impedit, est porro dolor vel molestiae ea dolore quis accusamus debitis quibusdam repellat repellendus excepturi, nostrum facilis beatae?",
    image: "https://res.cloudinary.com/dkalgpanl/image/upload/v1624054935/cameraStore/product/zwxeqf0dmzjck9hjne9k.jpg",
    totalReviews: 5,
    ratingAvg: 4.5
},
{
    slug: "abc",
    price: 600,
    name: "ARGUS STEREO 3D 35MM",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nemo vitae assumenda impedit, est porro dolor vel molestiae ea dolore quis accusamus debitis quibusdam repellat repellendus excepturi, nostrum facilis beatae?",
    image: "https://res.cloudinary.com/dkalgpanl/image/upload/v1624053541/cameraStore/product/sjyjgsnbz5iacaokxgz2.jpg",
    totalReviews: 5,
    ratingAvg: 4.5
},
{
    slug: "abc",
    price: 1000,
    name: "RICOHFLEX MILLION TLR 22",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nemo vitae assumenda impedit, est porro dolor vel molestiae ea dolore quis accusamus debitis quibusdam repellat repellendus excepturi, nostrum facilis beatae?",
    image: "https://res.cloudinary.com/dkalgpanl/image/upload/v1624252412/cameraStore/product/wcpctfq4piqwgqqcarvx.jpg",
    totalReviews: 5,
    ratingAvg: 4.5
},
{
    slug: "abc",
    price: 1000,
    name: "CANON SURE SHOT TELE MAX",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nemo vitae assumenda impedit, est porro dolor vel molestiae ea dolore quis accusamus debitis quibusdam repellat repellendus excepturi, nostrum facilis beatae?",
    image: "https://res.cloudinary.com/dkalgpanl/image/upload/v1624054935/cameraStore/product/zwxeqf0dmzjck9hjne9k.jpg",
    totalReviews: 5,
    ratingAvg: 4.5
},
{
    slug: "abc",
    price: 600,
    name: "ARGUS STEREO 3D 35MM",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nemo vitae assumenda impedit, est porro dolor vel molestiae ea dolore quis accusamus debitis quibusdam repellat repellendus excepturi, nostrum facilis beatae?",
    image: "https://res.cloudinary.com/dkalgpanl/image/upload/v1624053541/cameraStore/product/sjyjgsnbz5iacaokxgz2.jpg",
    totalReviews: 5,
    ratingAvg: 4.5
},
{
    slug: "abc",
    price: 600,
    name: "ARGUS STEREO 3D 35MM",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nemo vitae assumenda impedit, est porro dolor vel molestiae ea dolore quis accusamus debitis quibusdam repellat repellendus excepturi, nostrum facilis beatae?",
    image: "https://res.cloudinary.com/dkalgpanl/image/upload/v1624053541/cameraStore/product/sjyjgsnbz5iacaokxgz2.jpg",
    totalReviews: 5,
    ratingAvg: 4.5
},
{
    slug: "abc",
    price: 600,
    name: "ARGUS STEREO 3D 35MM",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nemo vitae assumenda impedit, est porro dolor vel molestiae ea dolore quis accusamus debitis quibusdam repellat repellendus excepturi, nostrum facilis beatae?",
    image: "https://res.cloudinary.com/dkalgpanl/image/upload/v1624053541/cameraStore/product/sjyjgsnbz5iacaokxgz2.jpg",
    totalReviews: 5,
    ratingAvg: 4.5
},
{
    slug: "abc",
    price: 600,
    name: "ARGUS STEREO 3D 35MM",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nemo vitae assumenda impedit, est porro dolor vel molestiae ea dolore quis accusamus debitis quibusdam repellat repellendus excepturi, nostrum facilis beatae?",
    image: "https://res.cloudinary.com/dkalgpanl/image/upload/v1624053541/cameraStore/product/sjyjgsnbz5iacaokxgz2.jpg",
    totalReviews: 5,
    ratingAvg: 4.5
}

]

const ProductList = () => {
    return (
        <div>
            <List
        grid={{
          gutter: { xs: 10, sm: 10, md: 10, lg: 30, xl: 30 },
          column: 4,
          xs: 1,
          sm: 2,
          md: 3,
        }}
        pagination={{
         total: 12,
         pageSize: 8
        }}
        itemLayout="horizontal"
        dataSource={products}
        renderItem={(item) => <ProductItem item={item} />}
      />
        </div>
    )
}

export default ProductList
