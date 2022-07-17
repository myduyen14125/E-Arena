import { Col, Row, Tabs } from "antd";
import { Content } from "antd/lib/layout/layout";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import CardItem from "../components/Card";
import { getCourses } from "../slices/course.slice";
const Home = () => {
  const onChange = (key) => {
    console.log(key);
  };



  const dispatch = useDispatch()
  const [courses, setCourses] = useState([])
  const _fetch = async () =>{
     const res = await dispatch(getCourses()) 
     console.log(res,'test')
     setCourses([...res.payload])
    
  }
  const {course} = useSelector(state=>state.course)
  
  useEffect(()=>{
    _fetch()

  },[])
  console.log(courses)
  const maths = [
    {
      title: "Chương 1",
      desc: "Hàm số lũy thừa, hàm số mũ, hàm Logarit.",
      img: "https://25giay.vn/wp-content/uploads/2020/03/ve-toan.jpg",
    },
    {
      title: "Chương 2",
      desc: "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số.",
      img: "https://25giay.vn/wp-content/uploads/2020/03/ve-toan.jpg",
    },
    {
      title: "Chương 3",
      desc: "Nguyên hàm.",
      img: "https://25giay.vn/wp-content/uploads/2020/03/ve-toan.jpg",
    },
    {
      title: "Chương 4",
      desc: "Tích phân.",
      img: "https://25giay.vn/wp-content/uploads/2020/03/ve-toan.jpg",
    },
    {
      title: "Chương 5",
      desc: "Số phức.",
      img: "https://25giay.vn/wp-content/uploads/2020/03/ve-toan.jpg",
    },
  ];
  const english = [
    {
      title: "Chương 1",
      desc: "Từ loại",
      img: "https://media.istockphoto.com/id/1195746346/vi/vec-to/bi%E1%BB%83u-ng%E1%BB%AF-internet-v%E1%BB%81-vi%E1%BB%87c-h%E1%BB%8Dc-ti%E1%BA%BFng-anh-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-ph%C3%A1c-th%E1%BA%A3o-m%C3%A0u-tr%E1%BA%AFng-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-d%E1%BA%A5u-hi%E1%BB%87u.webp?s=612x612&w=is&k=20&c=-ebq40flAAjbAE0ZyVY7zlYj84R4SXv15_u2zJcZfRE=",
    },
    {
      title: "Chương 2",
      desc: "Thì hiện tại (Present tense)",
      img: "https://media.istockphoto.com/id/1195746346/vi/vec-to/bi%E1%BB%83u-ng%E1%BB%AF-internet-v%E1%BB%81-vi%E1%BB%87c-h%E1%BB%8Dc-ti%E1%BA%BFng-anh-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-ph%C3%A1c-th%E1%BA%A3o-m%C3%A0u-tr%E1%BA%AFng-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-d%E1%BA%A5u-hi%E1%BB%87u.webp?s=612x612&w=is&k=20&c=-ebq40flAAjbAE0ZyVY7zlYj84R4SXv15_u2zJcZfRE=",
    },
    {
      title: "Chương 3",
      desc: "Thì quá khứ (Past tense)",
      img: "https://media.istockphoto.com/id/1195746346/vi/vec-to/bi%E1%BB%83u-ng%E1%BB%AF-internet-v%E1%BB%81-vi%E1%BB%87c-h%E1%BB%8Dc-ti%E1%BA%BFng-anh-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-ph%C3%A1c-th%E1%BA%A3o-m%C3%A0u-tr%E1%BA%AFng-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-d%E1%BA%A5u-hi%E1%BB%87u.webp?s=612x612&w=is&k=20&c=-ebq40flAAjbAE0ZyVY7zlYj84R4SXv15_u2zJcZfRE=",
    },
    {
      title: "Chương 4",
      desc: "Khiếm khuyết động từ (Modal verb)",
      img: "https://media.istockphoto.com/id/1195746346/vi/vec-to/bi%E1%BB%83u-ng%E1%BB%AF-internet-v%E1%BB%81-vi%E1%BB%87c-h%E1%BB%8Dc-ti%E1%BA%BFng-anh-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-ph%C3%A1c-th%E1%BA%A3o-m%C3%A0u-tr%E1%BA%AFng-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-d%E1%BA%A5u-hi%E1%BB%87u.webp?s=612x612&w=is&k=20&c=-ebq40flAAjbAE0ZyVY7zlYj84R4SXv15_u2zJcZfRE=",
    },
  ];
  const chemistrys = [
    {
      title: "Chương 1",
      desc: "Ester - Lipit.",
      img: "https://i.ytimg.com/vi/NK6xlAwxpeI/maxresdefault.jpg",
    },
    {
      title: "Chương 2",
      desc: "Cacbohidrat.",
      img: "https://i.ytimg.com/vi/ekzNhbaMIBs/maxresdefault.jpg",
    },
    {
      title: "Chương 3",
      desc: "Amin, Amino axit và protein.",
      img: "https://sudospaces.com/hoachat-com-vn/2020/11/amino-acid-la-gi-1.jpg",
    },
    {
      title: "Chương 4",
      desc: "Polime.",
      img: "https://d3.violet.vn//uploads/previews/present/3/236/492/images/Slide1.JPG",
    },
    {
      title: "Chương 5",
      desc: "Đại cương về kim loại",
      img: "https://thocaca.com/wp-content/uploads/2022/02/396f0578-b9d8-418d-9418-d61b4fefc82c_900_900-564x381.png",
    },
  ];
  return (
    <Content className="mx-auto px-40">
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <Tabs.TabPane tab="Toán" key="1">
          <Row gutter={[16, 16]}>
            {maths.map(({ title, desc, img }, idx) => (
              <Col className="gutter-row" span={6}>
                <CardItem title={title} desc={desc} img={img} key={idx} />
              </Col>
            ))}
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Hóa Học" key="2">
          <Row gutter={[16, 16]}>
            {chemistrys.map(({ url, name }, idx) => (
              <Col className="gutter-row" span={6}>
                <CardItem title={name} desc={name} img={url} key={idx} />
              </Col>
            ))}
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tiếng Anh" key="3">
          <Row gutter={[16, 16]}>
            {courses?.[0] && courses.map(({ name, url }, idx) => (
              <Col className="gutter-row" span={6}>
                <CardItem title={name} desc={name} img={url} key={idx} />
              </Col>
            ))}
          </Row>
        </Tabs.TabPane>
      </Tabs>
    </Content>
  );
};

export default Home;
