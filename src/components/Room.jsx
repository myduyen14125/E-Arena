import React from "react";
import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const Room = () => {
  return (
    <div className="w-full h-48 rounded-lg border border-cyan-500 flex justify-center items-center">
      <div className="flex flex-col">
        <div>
          <UserOutlined className="text-3xl font-bold mx-4 text-cyan-700 font-bold" />
          <UserOutlined className="text-3xl font-bold mx-4  text-cyan-700 font-bold" />
          <UserOutlined className="text-3xl font-bold mx-4  text-cyan-700 font-bold" />
          <UserOutlined className="text-3xl font-bold mx-4 text-gray-400 " />
        </div>

        <div className="mt-12">
          <span>Số người tham gia: 3/4</span>
        </div>
        <Button
          className="font-bold  text-gray-700 mt-5"
          type="primary"
          shape="round"
        >
          <Link to="/play/2">Tham gia</Link>
        </Button>
      </div>
    </div>
  );
};

export default Room;
