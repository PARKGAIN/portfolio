import React from "react";
import { Alert, Space, Spin } from "antd";

const Loading: React.FC = () => (
  <Space direction="vertical" style={{ width: "100%" }}>
    <Spin tip="Loading">
      <div className="content" />
    </Spin>
  </Space>
);

export default Loading;
