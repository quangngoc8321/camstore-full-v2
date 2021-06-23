import React, { useContext } from "react";
import { Button, List, Space} from "antd";
import { Link } from "react-router-dom";
import { Select } from "antd";
import { useMutation, useQueryClient } from "react-query";
import { CartContext } from "../context/CartContextProvider";
import { MyQueryContext } from "../context/MyQueryContextProvider";
import { axiosFunction } from "../../helpers/axiosFunction";
import { notificationError } from "../../helpers/notificationError";
const { Option } = Select;

const CartList = () => {
  const {query, setQuery} = useContext(MyQueryContext);
  const queryClient = useQueryClient();
  const { isLoading, data } = useContext(CartContext);



  const cartItems = data ? data.data.cartItems : [];



  const mutationRemoveCart = useMutation(
    (data) => axiosFunction(null,data, "/cart","delete"),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries("cart");
      },
      onError: (error) => {
        notificationError(error);
      },
    }
  );
  const mutationUpdateCart = useMutation(
    (data) => axiosFunction(null,data, "/cart","put"),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries("cart");
      },
      onError: (error) => {
        notificationError(error);
      },
    }
  );
  return (
    <List
      grid={{
        column: 1,
        xs: 1,
        sm: 1,
        md: 1,
      }}
      itemLayout="horizontal"
      loading={isLoading}
      dataSource={cartItems}
      pagination={cartItems.length > 0 && {
        pageSize: data?.data.pageSize || 0,
        total: data?.data.total || 0,
        current: query.pageNumber,
        onChange: (pageNumber) => {
          setQuery({ ...query, pageNumber });
          
        },
    }}
      renderItem={(item) => (
        <List.Item>
          <Space
            style={{
              justifyContent: "space-between",
              display: "flex",
              border: "1px solid #eee",
              padding: "0.5rem",
            }}
          >
            <div>
              <Link to={`/products/${item.product.slug}`}>
                <img
                  src={item.product.image.url}
                  alt="cart"
                  width="100"
                />
                <br />
              </Link>
              <Link to={`/products/${item.product.slug}`} style={{ textTransform: "uppercase", color:"black" }}>
                <strong>{item.product.name} (${item.product.price})</strong>
              </Link>
            </div>
            <div>
              <p>Quantity</p>
              <Select value={item.quantity} style={{ width: 120, margin: "0 5px 10px 0" }}
              onChange={(value) =>
                mutationUpdateCart.mutate({
                  price: item.product.price,
                  productId: item.product._id,
                  quantity: value,
                })
              }
              >
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
              </Select>
              <Button onClick={() =>
                        mutationRemoveCart.mutate({
                          productId: item.product._id,
                        })
                      }>Remove</Button>
            </div>
          </Space>
        </List.Item>
      )}
    />
  );
};

export default CartList;
