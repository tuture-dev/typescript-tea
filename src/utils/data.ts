interface Todo {
  user: string;
  time: string;
  content: string;
  isCompleted: boolean;
}

interface User {
  id: string;
  name: string;
  avatar: string;
}

export const todoListData: Todo[] = [
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

export const userList: User[] = [
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
    id: "23410976",
    name: "pftom",
    avatar: "https://avatars0.githubusercontent.com/u/23410977?s=96&v=4"
  },
  {
    id: "58352313",
    name: "holy",
    avatar: "https://avatars0.githubusercontent.com/u/58352313?s=96&v=4"
  }
];
