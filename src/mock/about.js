import Mock from "mockjs";
Mock.mock("/api/about", "get", {
  code: 0,
  msg: "",
  // data: "http://tianhao-imglist.dalivan.tech/",
  // data: "https://github.com/wjgsh",
  // data:
  //   "https://rp.mockplus.cn/run/JgWDcs70EIrM/t0cbK5Z0t?cps=expand&rps=collapse&nav=1&ha=0&la=0&fc=0&dt=iphoneX&out=0&rt=1",
  // data: "https://baidu.com",
  data: "https://wjgsh.github.io/talk/",
});
