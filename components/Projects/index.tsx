import data from "data/projects";
import Image from "next/image";
import React from "react";
import { Tooltip, Button, List } from "antd";
import { AiOutlineSearch } from "react-icons/ai";

const Projects: React.FC = () => (
  <>
    <Button type="primary" icon={<AiOutlineSearch />}>
      Search
    </Button>
    <List
      itemLayout="vertical"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <Image src={item.image} alt={item.title} width={280} />
          <Tooltip title="제목을 클릭하면 소스코드를 볼 수 있습니다">
            <List.Item.Meta
              title={<a href={item.githublink}>{item.title}</a>}
              description={item.description}
            />
          </Tooltip>
          <List.Item.Meta description={`기술스택 : ${item.techstack}`} />
          <List.Item.Meta description={`참고한 자료들 : ${item.reference}`} />
        </List.Item>
      )}
    />
  </>
);

export default Projects;
