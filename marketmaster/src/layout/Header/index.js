import React from "react";
import { Space } from "antd";
import './style/index.css'
export default class extends React.Component {
  render() {
    return <div className="m-header">
      <Space>
        <span>Hi, XXX</span>
        <a>Log out</a>
      </Space>
    </div>
  }
}
