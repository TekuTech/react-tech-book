import React, { FC, useState } from "react";
import { Button, Card, Statistic } from 'semantic-ui-react';
import './App.css';

// 既存のコードをHooksを使用して書き換えたもの
const Counter: FC = () => {
  // setStateはstate変数とセッター関数を返すので、分割代入で受け取る
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  };

  const decrement = () => {
    setCount(count - 1)
  };

  return (
    <div className="container">
      <header>
        <h1>カウンター</h1>
      </header>
      <Card>
        <Statistic className="number-board">
          <Statistic.Label>count</Statistic.Label>
          <Statistic.Value>{count}</Statistic.Value>
        </Statistic>
        <Card.Content>
          <div className="ui two buttons">
            {
              // Buttonの属性値として、自身をインクリメントする無名関数をセットしている
              // = 親コンポーネントの状態を変更する関数を子コンポーネントに持たせている
            }
            <Button color="red" onClick={decrement}>
              -1
            </Button>
            {
              // アロー記法をやめて、this.incrementとかすると動かない
              // 上記の記法だと実行時オブジェクト（ここではButtonコンポーネント）に対してメソッドを呼び出してしまうため
              // あくまでCounterコンポーネントに対して呼び出さなければならない
            }
            <Button color="green" onClick={increment}>
              +1
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Counter;
