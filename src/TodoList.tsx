import React from "react";
import { List, Avatar, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { ClickParam } from "antd/lib/menu";

import { Todo, getUserById } from "./utils/data";

export type MenuKey = "complete" | "delete";

interface ActionProps {
  onClick: (key: MenuKey) => void;
  isCompleted: boolean;
}

function Action({ onClick, isCompleted }: ActionProps) {
  const handleActionClick = ({ key }: ClickParam) => {
    if (key === "complete") {
      onClick("complete");
    } else if (key === "delete") {
      onClick("delete");
    }
  };

  return (
    <Menu onClick={handleActionClick}>
      <Menu.Item key="complete">{isCompleted ? "重做" : "完成"}</Menu.Item>
      <Menu.Item key="delete">删除</Menu.Item>
    </Menu>
  );
}

interface TodoListProps {
  todoList: Todo[];
  onClick: (todoId: string, key: MenuKey) => void;
}

function TodoList({ todoList, onClick }: TodoListProps) {
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
              <Dropdown
                overlay={() => (
                  <Action
                    isCompleted={item.isCompleted}
                    onClick={(key: MenuKey) => onClick(item.id, key)}
                  />
                )}
              >
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
