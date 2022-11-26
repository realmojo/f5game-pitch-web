import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { AdsenseMain } from "./adsense/main";

export const Home = () => {
  return (
    <div>
      <div className="play-container">
        <div className="text-center text-3xl mt-3">
          <h1>절대음감 테스트</h1>
        </div>
        <div className="my-4">
          <AdsenseMain />
        </div>
        <div className="text-center mt-2">
          <Button
            style={{ width: 336 }}
            className="btn-start"
            type="primary"
            size="large"
          >
            <Link to="/play">START</Link>
          </Button>
        </div>
        <article>
          <div className="post">
            <h2>절대음감 테스트란</h2>
            <p>
              절대음감이란 어떤 음을 들었을 때 그 고유의 진동수를 파악하여
              정확한 음정을 찾아내는 청각 능력을 말합니다. 여러분들도 한번
              도전해보세요!
            </p>
          </div>
          <div className="post">
            <h2>절대음감에 대하여</h2>
            <p>
              여러분들은 혹시 절대음감이라는 말을 들어보셨나요? 상대음감이란
              음정간의 간격차를 통해 다른 음정의 위치를 파악할 수 있는 능력인데
              반해 절대음감이란 어떠한 음이라도 정확하게 짚어낼 수 있는
              능력입니다.
            </p>
          </div>
          <div className="post">
            <h2>절대음감과 상대음감</h2>
            <p>
              절대음감이란 음정 관계를 머리 속에서 계산하여 악보 없이도 정확한
              음을 연주할 수 있는 능력을 말한다. 반면 상대음감은 이러한
              방법으로는 곡을 제대로 연주할 수 없는 사람으로서 본인이 들은
              멜로디나 화음을 다른 악기에서도 똑같이 들을 수 있는 능력을 말한다.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};
