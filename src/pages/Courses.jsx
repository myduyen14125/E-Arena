import React from "react";
import { List, Typography } from "antd";
const Courses = () => {
  const data = [
    {
      title: "Vocabulary",
      id: "vocabulary",
    },
    {
      title: "Phonetic",
      id: "phoneitc",
    },
    {
      title: "Reading",
      id: "reading",
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
