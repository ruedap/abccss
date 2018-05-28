import React from "react";
import { storiesOf } from "@storybook/react";
import { withScreenshot } from "storybook-chrome-screenshot";
import { all } from "../../screenshot-options";

const Table = props => {
  return (
    <table className={`c-Table ${props.modifiers}`}>
      <thead>
        <tr>
          <th>#</th>
          <th>First</th>
          <th>Last</th>
          <th>
            Handle<br />Name
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>
            ポルコ<br />（マルコ）
          </td>
          <td>
            ロッソ<br />（パゴット）
          </td>
          <td>@porco_rosso</td>
        </tr>
        <tr>
          <th>2</th>
          <td>フィオ</td>
          <td>ピッコロ</td>
          <td>@fio</td>
        </tr>
        <tr>
          <th>3</th>
          <td colspan="2">ジーナ</td>
          <td>@gina</td>
        </tr>
      </tbody>
    </table>
  );
};

storiesOf("Components/Atoms/Table", module)
  .addDecorator(withScreenshot(all(null, 400, 300)))
  .add("Table", () => <Table modifiers="" />)
  .add("Table--sm", () => <Table modifiers="c-Table--sm" />)
  .add("Table--bordered", () => <Table modifiers="c-Table--bordered" />)
  .add("Table--borderless", () => <Table modifiers="c-Table--borderless" />)
  .add("Table--striped", () => <Table modifiers="c-Table--striped" />)
  .add("Table--stripeless", () => <Table modifiers="c-Table--stripeless" />)
  .add("Table--hover", () => <Table modifiers="c-Table--hover" />);
