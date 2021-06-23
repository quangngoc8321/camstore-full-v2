import React, { useContext, useState } from "react";
import { Button } from "antd";
import { useMutation } from "react-query";
import { useQueryClient } from "react-query";
import { notificationError } from "../../helpers/notificationError";
import { CartContext } from "../context/CartContextProvider";

import { Link } from "react-router-dom";
import { axiosFunction } from "../../helpers/axiosFunction";

const AddToCartBtn = ({ product }) => {
  const [loading, setLoading] = useState(false)
  const { isLoading, data } = useContext(CartContext);
  const queryClient = useQueryClient();

  const mutationAddToCart = useMutation(
    (data) => {
      setLoading(true)
      return axiosFunction(null,data, "/cart","post")},
    {
      onSuccess: (data) => {
        // setLoading(false)
        queryClient.invalidateQueries("cart");
      },
      onError: (error) => {
        // setLoading(false)
        notificationError(error);
      },
    }
  );
 

  if (isLoading) {
    return null;
  }

  const { cartItems } = data.data;
  const isExist = cartItems.find((item) => item.product._id === product._id);
  return (
    <div>
      {isExist ? (
          <Link to="/cart">
        <Button
       type="primary"
       style={{fontWeight:"bold"}}
        >
        &rarr; Go to cart
        </Button>
        </Link>
      ) : (
        <Button
          id="btn"
          onClick={() =>
            mutationAddToCart.mutate({
              price: product.price,
              productId: product._id,
            })
          }
          loading={loading}
        >
          Add To Cart
        </Button>
      )}
    </div>
  );
};

export default AddToCartBtn;

