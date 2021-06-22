import React, { useState } from "react";
import { Row, Col, Form, Input, Button, Typography, InputNumber } from "antd";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title } = Typography;
const { TextArea } = Input;

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const ProductForm = ({ type = "Create Product" }) => {
  const [state, setState] = useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "Preview",
    fileList: [],
  });


  const handleCancel = () => setState({ ...state, previewVisible: false });
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setState({
      ...state,
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };
  const handleChange = ({ fileList }) => setState({ ...state, fileList });
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <Row justify="center" align="middle">
      <Col xs={24} xl={12} className="custom-box">
        <Row justify="center">
          <Col span={24}>
            <Link to="/admin/products">
              <p style={{ marginBottom: "1rem" }}>
                <strong>&larr; Go back</strong>
              </p>
            </Link>
            <Title style={{ textAlign: "center" }} level={2}>
              {type}
            </Title>
            <Form size="large" name="product-form" initialValues={{}}>
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input product name!",
                  },
                ]}
              >
                <Input placeholder="Product name" />
              </Form.Item>
              <Form.Item
                label="Price"
                name="price"
                rules={[
                  {
                    type: "number",
                    message: "Price must be a number",
                  },
                  {
                    required: true,
                    message: "Please input product price!",
                  },
                ]}
              >
                <InputNumber
                  formatter={(value) =>
                    `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                />
              </Form.Item>

              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: "Please input product description!",
                  },
                ]}
              >
                <TextArea
                  rows={4}
                  placeholder="Product description..."
                  autoSize={{ minRows: 3, maxRows: 5 }}
                />
              </Form.Item>
              <Form.Item
                label="Image"
                name="image"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <div>
                  <Upload
                    multiple={false}
                    beforeUpload={() => false}
                    listType="picture-card"
                    fileList={state.fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                  >
                    {state.fileList.length > 0 ? null : uploadButton}
                  </Upload>
                  <Modal
                    visible={state.previewVisible}
                    title={state.previewTitle}
                    footer={null}
                    onCancel={handleCancel}
                  >
                    <img
                      alt="example"
                      style={{ width: "100%" }}
                      src={state.previewImage}
                    />
                  </Modal>
                </div>
              </Form.Item>
              <Form.Item name="button">
                <div
                  style={{
                    display: "flex",
                    direction: "column",
                    justifyContent: "center",
                  }}
                >
                  <Button id="btn" htmlType="submit">
                    {type}
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ProductForm;
