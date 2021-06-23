import React, {  useContext, useState } from "react";
import { Row, Col, Form, Input, Button, Typography} from "antd";
import { Upload} from "antd";

import ImgCrop from 'antd-img-crop';
import { Link, useLocation } from "react-router-dom";

import { AuthContext } from "../context/AuthContextProvider";

const { Title } = Typography;
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
const RegisterForm = () => {
  let query = useQuery();
  let redirect = query.get("redirect")

 
  const {register, loading} = useContext(AuthContext);

  const [fileList, setFileList] = useState([]);

  const [file, setFile] = useState(null);

  const onChange = ({ fileList: newFileList }) => {
    if(newFileList.length > 0){
      newFileList[0].originFileObj = file
    }
    setFileList(newFileList);
  };

  const onPreview = async () => {
    let  src = await getBase64(file)
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const onFinish = async (values) => {
     
      values.avatar = await getBase64(file);
      register(values, redirect);
  }
  return (
    <Row justify="center" align="middle">
      <Col xs={24} xl={12} className="custom-box">
        <Row justify="center">
          <Col span={24}>
            <Title style={{ textAlign: "center" }} level={2}>
              Register
            </Title>
            <Form size="large" name="basic" initialValues={{ avatar: "_" }}
              onFinish={onFinish}
            >
              <Form.Item
                label="Username"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={["password"]}
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="Avatar"
                name="avatar"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <div>
                <ImgCrop rotate shape="round">
      <Upload
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        beforeUpload={(file) => {setFile(file); return false}}
        multiple={false}
        maxCount={1}
      
      >
     {fileList.length > 0 ? null: "+ Upload"}  
      </Upload>
    </ImgCrop>
                </div>
              </Form.Item>
              <Form.Item>
                <div
                  style={{
                    display: "flex",
                    direction: "column",
                    justifyContent: "center",
                  }}
                >
                  <Button id="btn" htmlType="submit" loading={loading}>
                    Register
                  </Button>
                </div>
                <p style={{ marginTop: "0.5rem", textAlign: "center" }}>
                  Already have account 👉 <Link to="/login"><strong>Login now! </strong></Link>
                </p>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default RegisterForm;
