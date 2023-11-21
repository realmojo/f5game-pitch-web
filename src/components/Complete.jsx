import React, { useState, useEffect } from "react";
import { Button, Spin } from "antd";

export const Complete = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isResult, setIsResult] = useState(false);

  const [pitchScore, setPitchScore] = useState(0);
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    let score = JSON.parse(localStorage.getItem(`pitch-score`));
    score = score ? Number(score) : 0;
    setPitchScore(score);
    if (0 <= score && score < 15) {
      setName("초보 수준");
      setText(
        "당신은 절대음감에 대해 기본적인 음감을 가지고 있습니다. 음감에 대해 잘 모르시더라도 음악을 즐기기에는 충분합니다. "
      );
    } else if (15 <= score && score < 35) {
      setName("취미 수준");
      setText(
        "당신의 절대음감은 취미 수준 입니다. 평소에 악기를 즐거하거나 어렸을 때 악기를 하시는 등 취미로 즐기고 있으신거 같습니다."
      );
    } else if (35 <= score && score < 55) {
      setName("전공자 수준");
      setText(
        "당신의 절대음감은 전공자 수준 입니다. 절대음감까지는 아니지만 다양한 악기를 듣는 훈련을 통해 상대음감도 가지고 있는 것 같습니다."
      );
    } else if (55 <= score && score < 60) {
      setName("프로 수준");
      setText(
        "당신의 절대음감은 프로 수준입니다. 피아니스트 혹은 작곡가 들에게서 대부분 음을 들을 수 있습니다. 어렸을 때 부터 재능이 있거나 엄청나게 훈련을 하셨네요."
      );
    } else if (score === 60) {
      setName("절대음감 신");
      setText(
        "모든 음을 맞추셨습니다. 10,000명중에 1명꼴로 나타나는 절대음감 능력입니다. 당신의 음감은 상위 0.01% 입니다."
      );
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="">
      {!isResult ? (
        <>
          <h1 className="text-3xl text-center pt-16">
            결과를 기다리고 있습니다.
          </h1>
          {isLoading ? (
            <div className="text-center pt-4 mb-2">
              <Spin size="large" />
            </div>
          ) : (
            ""
          )}
          {isLoading ? (
            ""
          ) : (
            <div className="text-center">
              <Button
                className="mt-2 mb-2 btn-next"
                style={{ width: 336 }}
                type="primary"
                size="large"
                onClick={() => setIsResult(true)}
              >
                확인하기
              </Button>
            </div>
          )}
        </>
      ) : (
        <React.Fragment>
          <div className="pt-8">
            <h1 className="text-center text-2xl font-bold">
              당신의 절대음감은 <strong>{pitchScore}</strong>점 입니다.
            </h1>

            <div className="text-center pt-4 text-4xl">{name}</div>
            <div className="text-left px-4 pt-4 pb-4">{text}</div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
