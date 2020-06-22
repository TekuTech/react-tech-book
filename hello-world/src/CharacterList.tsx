import React, { Component } from "react";
import { Header, Icon, Item } from "semantic-ui-react";

export interface Character {
  id: number;
  name: string;
  age: number;
  height?: number;
}

interface CharacterListProps {
  school: string;
  characters: Character[]
}

// ジェネリクス、型引数の<CharacterListProps>でpropsの型を指定している
class CharacterList extends Component<CharacterListProps> {
  render() {
    // 自身のpropsをローカル変数として保持する
    const { school, characters } = this.props

    return (
      // この謎の記号はReact.fragmentのシンタックスシュガー
      // returnはひとつの要素という決まりがあるため、複数要素がネストする場合divタグで囲うことになる
      // React.fragmentを使用すると、空divを書かなくても複数の要素を返却できる
      <>
        <Header as="h2">{school}</Header>
        <Item.Group>
          {characters.map(c => (
            // ループ処理をする歳、要素に一意なkeyを設定しないとWarningが出る
            // (仮想DOMから実DOM反映する際に使用されるので、ないとパフォーマンスも下がる）
            <Item key={c.id}>
              <Icon name="user circle" size="huge" />
              <Item.Content>
                <Item.Header>{c.name}</Item.Header>
                <Item.Meta>{c.age}歳</Item.Meta>
                <Item.Meta>
                  {c.height ? c.height : '???'}
                  cm
                </Item.Meta>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </>
    );
  }
}

export default CharacterList;
