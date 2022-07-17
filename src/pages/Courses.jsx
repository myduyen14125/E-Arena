import { List } from "antd";
import React from "react";
const Courses = () => {
  const data = [
    {
      title: "Tiếng anh 10",
      id: "tieng-anh-10",
    },
    {
      title: "Tiếng anh 11",
      id: "tieng-anh-11",
    },
    {
      title: "Tiếng anh 12",
      id: "tieng-anh-12",
    },
  ];
  return (
    <div>
      <List
        className="px-40 h-screen"
        header={
          <div className="font-bold text-3xl text-gray-600">Lựa chọn topic</div>
        }
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <a className="!text-gray-600" href={`/course/${item.id}`}>
              {item.title}
            </a>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Courses;
