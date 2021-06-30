import React, { useContext, useState } from "react";
import {

  Rate,
  Col,
  Typography,
 
  Button,
  Space,

} from "antd";
import { Input } from "antd";
import { useMutation } from "react-query";
import { useQueryClient } from "react-query";

import { notificationError } from "../../helpers/notificationError";
import { AuthContext } from "../context/AuthContextProvider";
import { Link } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { axiosFunction } from "../../helpers/axiosFunction";
const { Title } = Typography;
const { TextArea } = Input;

const ReviewForm = ({ productId }) => {
  const [values, setValues] = useState({ content: "", ratingPoint: 0 });
  const [loading, setLoading] = useState(false);
  const {isAuthStateReady, user} = useContext(AuthContext);
  const queryClient = useQueryClient();

  const token = localStorage.getItem("token"); 

  const mutation = useMutation((data) => axiosFunction(token,data, "/reviews", "post"), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("reviews");
      queryClient.invalidateQueries("product");
      setValues({content: "", ratingPoint: 0})
      setLoading(false);
    },
    onError: (error) => {
      notificationError(error);
      setLoading(false);
    },
  });
  const addNewReview = () => {
    setLoading(true);
    mutation.mutate({...values, productId})

  };

  return (
    <Col xl={10} xs={24}>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Title level={4}>Write your review</Title>
        <div>
          Rating Point:{" "}
          <Rate
            allowHalf
            value={values.ratingPoint}
            onChange={(ratingPoint) => setValues({ ...values, ratingPoint })}
          />{" "}
          ({values.ratingPoint} / 5 stars)
        </div>
        <TextArea
        value={values.content}
          rows={4}
          placeholder="Your review goes here..."
          autoSize={{ minRows: 3, maxRows: 5 }}
          onChange={(e)=> setValues({...values, content: e.target.value})}
        />
         {isAuthStateReady ? (<>
              {user &&  <Button id="btn" onClick={addNewReview} loading={loading}>
          Post Review
        </Button>}

          {!user &&  <Link to="/login">
               <Button id="btn">&rarr; You need to login to review</Button></Link> }
          </>):(
              <LoadingOutlined />
          )}
        
      </Space>
    </Col>
  );
};

export default ReviewForm;
