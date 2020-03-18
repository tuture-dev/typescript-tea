import React from "react";
import { List, Avatar, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

import { Todo, getUserById } from "./utils/data";

const menu = (
  <Menu>
    <Menu.Item>完成</Menu.Item>
    <Menu.Item>删除</Menu.Item>
  </Menu>
);

interface TodoListProps {
  todoList: Todo[];
}

function TodoList({ todoList }: TodoListProps) {
  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={todoList}
      renderItem={item => {
        const user = getUserById(item.user);

        return (
          <List.Item
            key={item.id}
            actions={[
              <Dropdown overlay={menu}>
                <a key="list-loadmore-more">
                  操作 <DownOutlined />
                </a>
              </Dropdown>
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={user.avatar} />}
              title={<a href="https://ant.design">{user.name}</a>}
              description={item.date}
            />
            <div
              style={{
                textDecoration: item.isCompleted ? "line-through" : "none"
              }}
            >
              {item.content}
            </div>
          </List.Item>
        );
      }}
    />
  );
}

export default TodoList;
