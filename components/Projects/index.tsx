import { List } from "antd";
import data from "data/projects";
import Image from "next/image";
import React from "react";

const Projects: React.FC = () => (
  <List
    itemLayout="vertical"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <Image src={item.image} alt={item.title} width={280} />
        <List.Item.Meta
          title={<a href={item.githublink}>{item.title}</a>}
          description={item.description}
        />
        <List.Item.Meta description={`기술스택 : ${item.techstack}`} />
        <List.Item.Meta description={`참고한 자료들 : ${item.reference}`} />
      </List.Item>
    )}
  />
);

export default Projects;
