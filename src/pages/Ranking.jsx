import { Avatar, List, Skeleton } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";

const Ranking = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(
      `https://randomuser.me/api/?results=${5}&inc=name,gender,email,nat,picture&noinfo`
    )
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);
  const dummyData = [
    {
      top: 1,
      point: 983212,
      rank: "Học bá",
    },
    {
      top: 2,
      point: 83092,
      rank: "Học bá",
    },
    {
      top: 3,
      point: 73522,
      rank: "Học bá",
    },
    {
      top: 4,
      point: 33902,
      rank: "Học sư",
    },
    {
      top: 5,
      point: 12233,
      rank: "Học sinh",
    },
  ];
  return (
    <Content className="mx-auto px-40">
      <div className="w-full min-h-screen">
        <h1 className="text-4xl mt-6 font-bold text-cyan-500">
          Bảng xếp hạng tháng
        </h1>
        <List
          className="demo-loadmore-list mt-5"
          loading={initLoading}
          itemLayout="horizontal"
          dataSource={list}
          renderItem={(item, idx) => (
            <List.Item
              actions={[
                <a
                  key="list-loadmore-edit "
                  className="w-24 block font-bold !text-orange-300"
                >
                  {dummyData[idx].rank}
                </a>,
                <a
                  key="list-loadmore-more"
                  className="w-24 block font-bold !text-cyan-300"
                >
                  {dummyData[idx].point} point
                </a>,
              ]}
            >
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  avatar={<Avatar src={item.picture.large} />}
                  title={
                    <a
                      href="https://ant.design"
                      className="text-2xl !text-gray-600"
                    >
                      {item.name?.last}
                    </a>
                  }
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                <div className="w-12 flex justify-center items-center text-2xl font-semibold">
                  {dummyData[idx].top}
                </div>
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    </Content>
  );
};

export default Ranking;
