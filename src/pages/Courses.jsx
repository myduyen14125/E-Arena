import { List } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Courses = () => {
  const {course} = useSelector(state=> state.course)
  const [chapter,setChapter] = useState([])
  console.log(course[2])
  useEffect(()=>{
  setChapter(course[2].topics)

  },[])
  console.log(chapter)
  return (
    <div>
      <List
        className="px-40 h-screen"
        header={
          <div className="font-bold text-3xl text-gray-600">Lựa chọn topic</div>
        }
        bordered
        dataSource={chapter}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Link className="!text-gray-600" to={`/course/${item.id}`}>
              {item.name}
            </Link>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Courses;
