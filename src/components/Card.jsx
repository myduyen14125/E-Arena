import React from "react";
import { Card } from "antd";
import { Link, NavLink } from "react-router-dom";
const CardItem = ({ title, desc, img }) => {
  return (
    <Link to='/courses'>
     <Card
        hoverable
        style={{ width: 240 }}
        cover={<img className="h-52" alt="example" src={img} />}
      >
        <Card.Meta title={title} description={desc} />
      </Card>
    </Link>
  );
};

export default CardItem;
