import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "http://tianhao-imglist.dalivan.tech/img/0.jpg",
    siteTitle: "저노(wjsh)-blog",
    github: "https://github.com/wjgsh",
    qq: "1664927010",
    qqQrCode: "http://tianhao-imglist.dalivan.tech/img/1.jpg",
    weixin: "Dali_Van",
    weixinQrCode: "http://tianhao-imglist.dalivan.tech/img/2.jpg",
    mail: "1664927010@qq.com",
    icp: "wjsh's blog",
    githubName: "wjgsh",
    favicon: "http://tianhao-imglist.dalivan.tech/img/favicon.ico",
  },
});
