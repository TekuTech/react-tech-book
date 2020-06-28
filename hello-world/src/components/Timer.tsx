import React, { FC } from "react";
import { Button, Card, Icon, Statistic } from "semantic-ui-react";
import './App.css'

interface TimerProps {
  timeLeft: number;
  reset: () => void;
}

// propsで必要なものを受け取るようにして、ロジックは分離する
const TimerComponent: FC<TimerProps> = ({ timeLeft, reset }) => (
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

export default TimerComponent
