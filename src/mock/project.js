import Mock from "mockjs";

Mock.mock(/^\/api\/project\/?$/, "get", {
  code: 0,
  msg: "",
  "data|10-20": [
    {
      id: "@uuid",
      name: "聊天机器人",
      url: "https://wjgsh.github.io/talk/",
      github: "https://wjgsh.github.io/talk/",
      "description|1-4": ["@cparagraph(1, 5)"],
      thumb:
        "https://img1.baidu.com/it/u=1917288996,1016907126&fm=253&fmt=auto&app=120&f=JPEG?w=876&h=500",
    },
    {
      id: "@uuid",
      name: "仿小米官方页面",
      url: "https://wjgsh.github.io/fake-xiaomi/",
      github: "https://github.com/wjgsh/fake-xiaomi",
      "description|1-4": ["@cparagraph(1, 5)"],
      thumb:
        "https://img2.baidu.com/it/u=2416459085,1973454867&fm=253&fmt=auto&app=120&f=JPEG?w=929&h=500",
    },
  ],
});
