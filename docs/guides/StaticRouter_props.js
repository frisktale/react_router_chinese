import projectConfig from '/react_router_chinese/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "guides/StaticRouter.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "guides/StaticRouter.html",
    'title': undefined,
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E9%9D%99%E6%80%81%E8%B7%AF%E7%94%B1">静态路由<a class="anchor" href="#%E9%9D%99%E6%80%81%E8%B7%AF%E7%94%B1">§</a></h2>\n<p>以前版本的 React Router 使用静态路由来配置应用的路由跳转。这允许在渲染之前检查和匹配路由。由于 v4 版本我们转移到动态路由组件而不是静态路由配置，一些以前的用例变得不那么明显和棘手。<br>\n我们现在正在开发一个包来处理静态路由配置和 React 路由，以继续满足这些用例。她现在正在开发中，但我们很乐意为你尝试并提供帮助。</p>\n<p><a href="https://github.com/reacttraining/react-router/tree/master/packages/react-router-config">React Router Config</a></p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@17.0.2/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@17.0.2/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/react_router_chinese/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E9%9D%99%E6%80%81%E8%B7%AF%E7%94%B1">静态路由<a class="anchor" href="#%E9%9D%99%E6%80%81%E8%B7%AF%E7%94%B1">§</a></h2>\n<p>以前版本的 React Router 使用静态路由来配置应用的路由跳转。这允许在渲染之前检查和匹配路由。由于 v4 版本我们转移到动态路由组件而不是静态路由配置，一些以前的用例变得不那么明显和棘手。<br>\n我们现在正在开发一个包来处理静态路由配置和 React 路由，以继续满足这些用例。她现在正在开发中，但我们很乐意为你尝试并提供帮助。</p>\n<p><a href="https://github.com/reacttraining/react-router/tree/master/packages/react-router-config">React Router Config</a></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E9%9D%99%E6%80%81%E8%B7%AF%E7%94%B1" }, "\u9759\u6001\u8DEF\u7531")))),
    'author': undefined,
    'contributors': [],
    'date': "2021-10-28T10:02:43.660Z",
    'updated': null,
    'excerpt': "静态路由 以前版本的 React Router 使用静态路由来配置应用的路由跳转。这允许在渲染之前检查和匹配路由。由于 v4 版本我们转移到动态路由组件而不是静态路由配置，一些以前的用例变得不那么明显和棘手。 我们现在正在开发一个...",
    'cover': undefined,
    'sidebar': [
        {
            "text": "文档",
            "link": "guides/QuickStart.html",
            "children": [
                {
                    "text": "快速开始",
                    "link": "guides/QuickStart.html",
                    "pagePath": "guides/QuickStart.md"
                },
                {
                    "text": "基础组件",
                    "link": "guides/BasicComponents.html",
                    "pagePath": "guides/BasicComponents.md"
                },
                {
                    "text": "服务端渲染",
                    "link": "guides/ServerRendering.html",
                    "pagePath": "guides/ServerRendering.md"
                },
                {
                    "text": "代码拆分",
                    "link": "guides/CodeSplitting.html",
                    "pagePath": "guides/CodeSplitting.md"
                },
                {
                    "text": "滚动恢复",
                    "link": "guides/ScrollRestoration.html",
                    "pagePath": "guides/ScrollRestoration.md"
                },
                {
                    "text": "设计思想",
                    "link": "guides/Philosophy.html",
                    "pagePath": "guides/Philosophy.md"
                },
                {
                    "text": "测试",
                    "link": "guides/Testting.html",
                    "pagePath": "guides/Testting.md"
                },
                {
                    "text": "集成 Redux",
                    "link": "guides/ReduxIntegration.html",
                    "pagePath": "guides/ReduxIntegration.md"
                },
                {
                    "text": "静态路由",
                    "link": "guides/StaticRouter.html",
                    "pagePath": "guides/StaticRouter.md"
                }
            ],
            "pagePath": "guides/QuickStart.md"
        },
        {
            "text": "API",
            "link": "API/API.html",
            "pagePath": "API/API.md"
        }
    ]
};
