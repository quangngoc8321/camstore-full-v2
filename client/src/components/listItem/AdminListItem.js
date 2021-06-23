import React, { useState } from 'react'
import {
    Row,
    Col,
    Button,
    Space,
    Popconfirm,
    List,
    Avatar,
  } from "antd";

import { Link } from "react-router-dom";
import { axiosFunction } from '../../helpers/axiosFunction';
import { useMutation } from "react-query";
import { useQueryClient } from "react-query";
import { notificationError } from '../../helpers/notificationError';
export const AdminListItem = ({item}) => {
    const token = localStorage.getItem("token"); 
    const [loading, setLoading] = useState(false);
    const queryClient = useQueryClient();
    const mutation = useMutation((data) => {
        setLoading(true)
        return axiosFunction(token,data,`/products/${data.slug}`, "delete")
    }, {
        onSuccess: (data) => {
            setLoading(false)
          queryClient.invalidateQueries("products");
          queryClient.invalidateQueries('product');
            
        },
        onError: (error) => {
          setLoading(false)
          notificationError(error);
        },
      });

    return (
       
              <List.Item style={{ border: "1px solid #eaeaea", padding: "1rem" }}>
            <Row justify="space-between" align="middle">
              <Col xs={24} xl={20}>
                <Space style={{ margin: "1rem 0" }}>
                  <Avatar
                    src={item.image.url}
                    shape="square"
                    size="large"
                  />
                  <strong >{item.name} (${item.price} )</strong>
                </Space>
              </Col>
              <Col>
              <Link to={`/admin/products/update/${item.slug}`}> 
                <Button style={{ marginRight: "5px" }} type="ghost">
                  <strong>Update</strong>
                </Button>
                </Link>
                <Popconfirm
                  placement="top"
                  title={<strong>Are you sure to delete this product?</strong>}
                  onConfirm={()=> mutation.mutate(item)}
                  okText={<strong>Yes</strong>}
                  cancelText={<strong>No</strong>}
                >
                  <Button id="btn" loading={loading}>
                    <strong>Delete</strong>
                  </Button>
                </Popconfirm>
              </Col>
            </Row>
          </List.Item> 
       
    )
}
