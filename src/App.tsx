import React, { useState, useRef } from "react";
import {
  List,
  Avatar,
  Button,
  Typography,
  Form,
  Input,
  Select,
  DatePicker,
  Menu,
  Dropdown,
  Tabs
} from "antd";
import { DownOutlined } from "@ant-design/icons";

import "./App.css";
import logo from "./logo.svg";

const { Title } = Typography;
const { Option } = Select;
const { TabPane } = Tabs;

const todoListData = [
  {
    content: "图雀社区：汇聚精彩的免费实战教程",
    user: "mRcfps",
    time: "2020年3月2日 19:34",
    isCompleted: false
  },
  {
    content: "图雀社区：汇聚精彩的免费实战教程",
    user: "pftom",
    time: "2020年3月2日 19:34",
    isCompleted: false
  },
  {
    content: "图雀社区：汇聚精彩的免费实战教程",
    user: "Holy",
    time: "2020年3月2日 19:34",
    isCompleted: false
  },
  {
    content: "图雀社区：汇聚精彩的免费实战教程",
    user: "crxk",
    time: "2020年3月2日 19:34",
    isCompleted: false
  },
  {
    content: "图雀社区：汇聚精彩的免费实战教程",
    user: "Pony",
    time: "2020年3月2日 19:34",
    isCompleted: false
  }
];

const userList = [
  {
    id: "666666666",
    name: "图雀社区",
    avatar: "https://avatars0.githubusercontent.com/u/39240800?s=60&v=4"
  },
  {
    id: "23410977",
    name: "mRcfps",
    avatar: "https://avatars0.githubusercontent.com/u/23410977?s=96&v=4"
  },
  {
    id: "25455350",
    name: "crxk",
    avatar: "https://avatars1.githubusercontent.com/u/25455350?s=96&v=4"
  },
  {
    id: "23410977",
    name: "pftom",
    avatar: "https://avatars0.githubusercontent.com/u/23410977?s=96&v=4"
  },
  {
    id: "58352313",
    name: "holy",
    avatar: "https://avatars0.githubusercontent.com/u/58352313?s=96&v=4"
  }
];

const menu = (
  <Menu>
    <Menu.Item>完成</Menu.Item>
    <Menu.Item>删除</Menu.Item>
  </Menu>
);

const TodoInput = ({ value = {} }) => {
  return (
    <div className="todoInput">
      <Input type="text" placeholder="输入待办事项内容" />
      <Select style={{ width: 80 }} size="small" defaultValue="666666666">
        {userList.map(user => (
          <Option value={user.id}>{user.name}</Option>
        ))}
      </Select>
      <DatePicker
        size="small"
        style={{ marginLeft: "16px", marginRight: "16px" }}
      />
    </div>
  );
};

function TodoList() {
  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={todoListData}
      renderItem={item => (
        <List.Item
          actions={[
            <Dropdown overlay={menu}>
              <a key="list-loadmore-more">
                操作 <DownOutlined />
              </a>
            </Dropdown>
          ]}
        >
          <List.Item.Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={<a href="https://ant.design">{item.user}</a>}
            description={item.time}
          />
          <div>{item.content}</div>
        </List.Item>
      )}
    />
  );
}

function App() {
  const callback = () => {};

  const onFinish = () => {};
  const ref = useRef(null);

  return (
    <div className="App" ref={ref}>
      <div className="container header">
        <img src={logo} alt="" />
        <Title level={3}>图雀社区：汇聚精彩的免费实战教程</Title>
      </div>
      <div className="container">
        <Form onFinish={onFinish}>
          <Form.Item name="todo">
            <TodoInput />
          </Form.Item>
        </Form>
      </div>
      <div className="container">
        <Tabs onChange={callback} type="card">
          <TabPane tab="所有" key="1">
            <TodoList />
          </TabPane>
          <TabPane tab="进行中" key="2">
            <TodoList />
          </TabPane>
          <TabPane tab="已完成" key="3">
            <TodoList />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
