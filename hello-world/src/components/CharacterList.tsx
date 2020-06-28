// FCはReactが用意している関数コンポーネント用の型
// Function Componentの略
import React, { FC } from "react";
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

// クラスではなく関数コンポーネントに変更
const CharacterList: FC<CharacterListProps> = ({
  // 引数がfalseの場合のデフォルト値
  school = '校名不明',
  characters,
}) => (
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

export default CharacterList;
