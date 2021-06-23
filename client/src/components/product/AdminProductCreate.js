import React, { useState } from "react";
import ProductForm from "../form/ProductForm";
import { useMutation } from "react-query";
import { useQueryClient } from "react-query";
import { useHistory } from "react-router";

import { notificationError } from "../../helpers/notificationError";
import { axiosFunction } from "../../helpers/axiosFunction";

const AdminProductCreate = () => {
    const token = localStorage.getItem("token"); 
    const [loading, setLoading] = useState(false);
    const queryClient = useQueryClient();
    let history = useHistory();
  
    const mutation = useMutation((data) => axiosFunction(token,data,"/products", "post"), {
      onSuccess: (data) => {
        queryClient.invalidateQueries("products");
        history.push("/admin/products");
      },
      onError: (error) => {
        setLoading(false)
        notificationError(error);
      },
    });
  
    return (
        
      <div>
        <ProductForm mutation={mutation} loading={loading} setLoading={setLoading} />
      </div>
    );
}

export default AdminProductCreate
