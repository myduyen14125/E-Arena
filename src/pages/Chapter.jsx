import React, { useState } from "react";
import Room from "../components/Room";
import { Row, Col, Button, Modal, Form, Input, Checkbox, Select } from "antd";
import { Content } from "antd/lib/layout/layout";
const Chapter = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Content className="mx-auto px-40 mt-8">
      <Button type="primary" className="text-cyan-500 mb-6" onClick={showModal}>
        Tạo phòng
      </Button>
      <Modal
        title="Tạo phòng"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          labelCol={{ span: 5 }}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="questions"
            label="Bộ câu hỏi"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <Select.Option value="male">Dễ</Select.Option>
              <Select.Option value="female">Khó</Select.Option>
              <Select.Option value="other">Rất khó</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form>
      </Modal>
      <Row gutter={[16, 16]}>
        <Col className="gutter-row" span={6}>
          <Room />
        </Col>
        <Col className="gutter-row" span={6}>
          <Room />
        </Col>
        <Col className="gutter-row" span={6}>
          <Room />
        </Col>
        <Col className="gutter-row" span={6}>
          <Room />
        </Col>
        <Col className="gutter-row" span={6}>
          <Room />
        </Col>
        <Col className="gutter-row" span={6}>
          <Room />
        </Col>
        <Col className="gutter-row" span={6}>
          <Room />
        </Col>
        <Col className="gutter-row" span={6}>
          <Room />
        </Col>
        <Col className="gutter-row" span={6}>
          <Room />
        </Col>
        <Col className="gutter-row" span={6}>
          <Room />
        </Col>
        <Col className="gutter-row" span={6}>
          <Room />
        </Col>
        <Col className="gutter-row" span={6}>
          <Room />
        </Col>
        <Col className="gutter-row" span={6}>
          <Room />
        </Col>
      </Row>
    </Content>
  );
};

export default Chapter;
