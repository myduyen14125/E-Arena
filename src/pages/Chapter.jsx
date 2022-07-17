import { Button, Col, Form, Input, InputNumber, Modal, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useState } from "react";
import {  useNavigate } from 'react-router-dom';
import Room from "../components/Room";
const Chapter = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  let navigate = useNavigate();
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    navigate('/play/2')
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
          labelCol={{ span: 7 }}
          autoComplete="off"
        >
          <Form.Item
            name="questions"
            label="Số lượng người thi"
            required={[true]}
          >
            <InputNumber className="ml-12"/>
          </Form.Item>

        <Form.Item label="Số câu dễ">
          <Input/>
      </Form.Item>
        <Form.Item label="Số câu khó">
        <Input/>

      </Form.Item>
        <Form.Item label="Số câu rất khó">
        <Input/>

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
