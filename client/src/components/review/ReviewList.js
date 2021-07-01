import React, { useState } from "react";
import { Rate, Col, Typography, Space, List, Avatar, Tooltip } from "antd";
import { useQuery } from "react-query";
import axios from "axios";
import { formatDistance } from "date-fns";

const { Title } = Typography;
const ReviewList = ({ productId }) => {
  const [query, setQuery] = useState({ pageNumber: 1, productId });

  const fetchReviews = async (query) => {
    let { pageNumber } = query;
    const option = {
      url:
        "/api/v1" + `/reviews?pageNumber=${pageNumber}&productId=${productId}`,
      method: "get",
    };
    return await axios(option);
  };

  const { isLoading, data } = useQuery(
    ["reviews", query],
    () => fetchReviews(query),
    {
      staleTime: 100000,
    }
  );
  const reviews = data ? data.data.reviews : [];
  return (
    <Col xl={13} xs={24} style={{ marginBottom: "2rem" }}>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Title level={4}>🏆 Customer Reviews</Title>
        <List
          pagination={
            data?.data.total && {
              current: query.pageNumber || 1,
              pageSize: data?.data.pageSize || 2,
              total: data?.data.total,
              onChange: (pageNumber) => {
                setQuery({ ...query, pageNumber });
              },
            }
          }
          loading={isLoading}
          itemLayout="horizontal"
          dataSource={reviews}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <>
                    <Tooltip title={item.user.name}>
                      <Avatar
                        style={{ backgroundColor: "#87d068" }}
                        src={item.user.avatar.url}
                      />
                    </Tooltip>
                  </>
                }
                title={
                  <p
                    style={{
                      wordWrap: "break-word",
                      wordBreak: "break-word",
                      whiteSpace: "normal",
                      textAlign: "start",
                    }}
                  >
                    <strong>{item.content}</strong> <br />
                    {formatDistance(new Date(item.createdAt), new Date(), {
                      addSuffix: true,
                    })}
                  </p>
                }
                description={
                  <div>
                    <Rate allowHalf value={item.ratingPoint} disabled /> (
                    {item.ratingPoint})
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </Space>
    </Col>
  );
};

export default ReviewList;
