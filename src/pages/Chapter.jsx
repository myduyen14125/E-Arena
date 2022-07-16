import React from "react";
import Room from "../components/Room";
import { Row, Col } from "antd";
import { Content } from "antd/lib/layout/layout";

const Chapter = () => {
  return (
    <Content className="mx-auto px-40 mt-8">
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
