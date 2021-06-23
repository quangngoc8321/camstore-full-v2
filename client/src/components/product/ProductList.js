import React from 'react'
import { List } from "antd";
import ProductItem from './ProductItem';

const ProductList = ({products,data, query, setQuery, isLoading}) => {
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
        pagination={products.length > 0 && {
            current: query.pageNumber,
            pageSize: data?.data.pageSize || 8,
            total: data?.data.total,
            onChange: (pageNumber) => {
              setQuery({ ...query, pageNumber });
            },
          }}
        itemLayout="horizontal"
        dataSource={products}
        loading={isLoading}
        renderItem={(item) => <ProductItem item={item} />}
      />
        </div>
    )
}

export default ProductList
