import React, { useRef, useState } from "react";
import {
  List,
  Avatar,
  Button,
  Typography,
  Form,
  Menu,
  Dropdown,
  Tabs
} from "antd";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

import { todoListData } from "./utils/data";

import "./App.css";
import logo from "./logo.svg";

const { Title } = Typography;
const { TabPane } = Tabs;

function App() {
  const [todoList, setTodoList] = useState(todoListData);

  const callback = () => {};

  const onFinish = (values: any) => {
    const newTodo = { ...values.todo, isCompleted: false };
    setTodoList(todoList.concat(newTodo));
  };
  const ref = useRef(null);

  const activeTodoList = todoList.filter(todo => !todo.isCompleted);
  const completedTodoList = todoList.filter(todo => todo.isCompleted);

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
          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="container">
        <Tabs onChange={callback} type="card">
          <TabPane tab="所有" key="1">
            <TodoList todoList={todoList} />
          </TabPane>
          <TabPane tab="进行中" key="2">
            <TodoList todoList={activeTodoList} />
          </TabPane>
          <TabPane tab="已完成" key="3">
            <TodoList todoList={completedTodoList} />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
