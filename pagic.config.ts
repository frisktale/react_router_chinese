export default {
  title: "React-router5 中文文档",
  description: "自建网站，方便自己查阅",
  theme: "docs",
  outDir: "docs",
  plugins: ["sidebar"],
  root: "/react_router_chinese/",
  sidebar: {
    "/": [
      {
        text: "文档",
        link: "guides/QuickStart.md",
        children: [
          {
            text: "快速开始",
            link: "guides/QuickStart.md",
          },
          {
            text: "基础组件",
            link: "guides/BasicComponents.md",
          },
          {
            text: "服务端渲染",
            link: "guides/ServerRendering.md",
          },
          {
            text: "代码拆分",
            link: "guides/CodeSplitting.md",
          },
          {
            text: "滚动恢复",
            link: "guides/ScrollRestoration.md",
          },
          {
            text: "设计思想",
            link: "guides/Philosophy.md",
          },
          {
            text: "测试",
            link: "guides/Testting.md",
          },
          {
            text: "集成 Redux",
            link: "guides/ReduxIntegration.md",
          },
          {
            text: "静态路由",
            link: "guides/StaticRouter.md",
          },
        ],
      },
      {
        text: "API",
        link: "API/API.md",
      },
    ],
  },
};
