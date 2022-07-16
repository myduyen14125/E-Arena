import React from "react";
import { List, Typography } from "antd";
const Courses = () => {
  const data = [
    {
      title: "Toán nâng cao",
      id: "toan-cao-cap",
    },
    {
      title: "Toán cơ bản",
      id: "toan-co-ban",
    },
    {
      title: "Toán đại số",
      id: "toan-dai-so",
    },
    {
      title: "Toán hình",
      id: "toan-hinh",
    },
  ];
  return (
    <div>
      <List
        header={
          <div className="font-bold text-3xl text-gray-600">
            Lựa chọn khóa học
          </div>
        }
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <a href={`/course/${item.id}`}>{item.title}</a>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Courses;
