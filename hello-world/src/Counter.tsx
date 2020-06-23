import React, {Component, SyntheticEvent} from "react";
import { Button, Card, Statistic } from 'semantic-ui-react';
import './App.css';


interface CounterState {
  count: number;
}

// 2つ目の型引数がstate, propsは必要ないので{}で指定
class Counter extends Component<{}, CounterState> {
  constructor(props: {}) {
    // このpropsはお約束的なもの
    super(props);
    this.state = { count: 0 };
  }

  // SyntheticEventとpreventDefaultで、オリジナルのonClick時の挙動を抑制する（例: aタグによる遷移）
  increment = (e: SyntheticEvent) => {
    e.preventDefault();
    // setStateは (prevState, props) => newState という関数
    // 下の例ではpropsは省略
    this.setState( prevState => ({
      //  直接値の代入はできない、prevState.count = 1 とかやると怒られる
      count: prevState.count + 1,
    }));
  }

  decrement = (e: SyntheticEvent) => {
    e.preventDefault();
    this.setState(prevState => ({
      count: prevState.count - 1,
    }));
  }

  render() {
    const { count } = this.state;
    return (
      <div className="container">
        <header>
          <h1>カウンター</h1>
        </header>
        <Card>
          <Statistic className="number-board">
            <Statistic.Label>count</Statistic.Label>
            <Statistic.Value>{ count }</Statistic.Value>
          </Statistic>
          <Card.Content>
            <div className="ui two buttons">
              {
                // Buttonの属性値として、自身をインクリメントする無名関数をセットしている
                // = 親コンポーネントの状態を変更する関数を子コンポーネントに持たせている
              }
              <Button color="red" onClick={this.decrement}>
                -1
              </Button>
              {
                // アロー記法をやめて、this.incrementとかすると動かない
                // 上記の記法だと実行時オブジェクト（ここではButtonコンポーネント）に対してメソッドを呼び出してしまうため
                // あくまでCounterコンポーネントに対して呼び出さなければならない
              }
              <Button color="green" onClick={this.increment}>
                +1
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default Counter;
