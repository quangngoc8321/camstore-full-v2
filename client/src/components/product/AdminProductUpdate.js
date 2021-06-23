import React, { useState } from "react";
import ProductForm from "../form/ProductForm";
import { useMutation } from "react-query";
import { useQueryClient } from "react-query";
import { useQuery } from "react-query";
import { useHistory, useParams } from "react-router";

import { notificationError } from "../../helpers/notificationError";
import { axiosFunction } from "../../helpers/axiosFunction";

const AdminProductUpdate = () => {
    const token = localStorage.getItem("token"); 
    const [loading, setLoading] = useState(false);
    let { slug } = useParams();
    const queryClient = useQueryClient();
    let history = useHistory();
  
    // Update Mutation
    const mutation = useMutation((data) => axiosFunction(token,data,`/products/${slug}`, "put"), {
      onSuccess: (data) => {
        queryClient.invalidateQueries("products");
        queryClient.invalidateQueries('product');
        history.push("/admin/products");
      },
      onError: (error) => {
        setLoading(false)
        notificationError(error);
      },
    });

    // Get product
    const { isLoading, data } = useQuery(["product", slug], () => axiosFunction(null,null,`/products/${slug}`, "get"))
    if(isLoading){
        return null;
    }
   const product = data.data.product;
    return (
        <>
            <ProductForm type="Update Product" mutation={mutation} loading={loading} setLoading={setLoading} product={product}/>
        </>
    )
}

export default AdminProductUpdate
