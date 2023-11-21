import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "antd";
import axios from "axios";

const { Meta } = Card;

export const TestList = () => {
  const [f5List, setF5List] = useState([
    {
      title: "ADHD 테스트 자가진단",
      logo: "https://f5game.s3.ap-northeast-2.amazonaws.com/adhd.png",
      link: "https://adhd.f5game.co.kr",
    },
    {
      title: "색맹 테스트",
      logo: "https://f5game.s3.ap-northeast-2.amazonaws.com/color.png",
      link: "https://color.f5game.co.kr",
    },
    {
      title: "정신연령 테스트",
      logo: "https://f5game.s3.ap-northeast-2.amazonaws.com/color-age.png",
      link: "https://color-age.f5game.co.kr",
    },
  ]);
  const [list, setList] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get(`https://f5game.co.kr/api/test/list/`);
      setList(res.data);
    })();
  }, []);

  return (
    <Row className="mt-4 mb-24 px-4" gutter={[4, 4]}>
      {f5List.map((item, key) => (
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={8}
          xl={8}
          xxl={8}
          key={key}
          className="pb-6"
        >
          <a href={item.link}>
            <Card
              hoverable
              size="small"
              height={300}
              cover={<img alt={item.title} src={item.logo} />}
            >
              <Meta title={<h2 className="text-sm">{item.title}</h2>} />
            </Card>
          </a>
        </Col>
      ))}

      {list.length > 0 &&
        list.map((item, key) => (
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={8}
            xl={8}
            xxl={8}
            key={key}
            className="pb-6"
          >
            <a href={`https://mindpang.com/main/${item.link}`}>
              <Card
                hoverable
                size="small"
                height={400}
                cover={
                  <img
                    alt={item.title}
                    src={item.logo}
                    width={320}
                    height={320}
                  />
                }
              >
                <Meta title={<h2 className="text-sm">{item.title}</h2>} />
              </Card>
            </a>
          </Col>
        ))}
    </Row>
  );
};
