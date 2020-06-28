import React, { FC, useEffect, useState } from "react";
import { Button, Card, Icon, Statistic } from "semantic-ui-react";
import './App.css'

const LIMIT = 60

const Timer: FC = () => {
  // timeLeftをLIMITで初期化、セッター関数を定義
  const [timeLeft, setTimeLeft] = useState(LIMIT);

  const reset = () => {
    setTimeLeft(LIMIT);
  };

  const tick = () => {
    setTimeLeft(prevTime => (prevTime === 0 ? LIMIT : prevTime - 1));
  };

  // 第2引数が空なので、setIntervalは初回のレンダリング時のみ実行される
  // コンポーネントがアンマウントされるタイミングでreturnに設定しているclearIntervalが実行される
  useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, [])

  return(
    <div className="container">
      <header>
        <h1>タイマー</h1>
      </header>
      <Card>
        <Statistic className="number-board">
          <Statistic.Label>time</Statistic.Label>
          <Statistic.Value>{timeLeft}</Statistic.Value>
        </Statistic>
        <Card.Content>
          <Button color="red" fluid onClick={reset}>
            <Icon name="redo" />
            Reset
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default Timer
