import React, { useContext} from "react";
import {List} from "antd";
import { useQuery } from "react-query";
import { AdminListItem } from "../listItem/AdminListItem";
import MyOrdersListItem from "../listItem/MyOrdersListItem";
import CustomerOrdersListItem from "../listItem/CustomerOrdersListItem";
import { axiosFunction } from "../../helpers/axiosFunction";
import { MyQueryContext } from "../context/MyQueryContextProvider";

const ListContainer = ({path="/products", type="products"}) => {
    const token = localStorage.getItem("token"); 

    const {query, setQuery} = useContext(MyQueryContext)
    const { isLoading, data } = useQuery([type, query], () => axiosFunction(token, null, path, "get",query),{
      staleTime: 100000
    });

    const datas = data?.data[type] || [];
    return (
        <List
        grid={{
          gutter: { xs: 10, sm: 10, md: 10, lg: 20, xl: 20 },
          column: 1,
          xs: 1,
          sm: 2,
          md: 3,
        }}
        pagination= {datas.length > 0 && {
            total: data?.data.total,
            pageSize: data?.data.pageSize || 2,
            current: query.pageNumber,
            onChange: (pageNumber) => setQuery({ ...query, pageNumber }),
          }}
          loading={isLoading}
        itemLayout="horizontal"
        dataSource={datas}
        renderItem={(item) => (
            <>
            { type === "products" && <AdminListItem item={item}/>}
            { type === "myOrders" && <MyOrdersListItem item={item}/>}
            { type === "customerOrders" && <CustomerOrdersListItem item={item}/>}
            </>
        )}
      />
    )
}

export default ListContainer
