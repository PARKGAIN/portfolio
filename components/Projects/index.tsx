import { List } from "antd";
import data from "data/projects";
import React from "react";

const App: React.FC = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          title={<a href={item.githublink}>{item.title}</a>}
          description={item.description}
        />
      </List.Item>
    )}
  />
);

export default App;
