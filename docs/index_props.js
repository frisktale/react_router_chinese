import projectConfig from '/react_router_chinese/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "React-router5 中文文档",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>React-router5 中文文档</h1>\n<p><a href="https://github.com/Harlan-ZhangDongXing/React-router-chinese">原仓库</a><br>\n<strong>画个饼，有人提交 pr 就搞 github action 自动编译</strong></p>\n<hr>\n<p>翻译起始时间: 2019-5-29<br>\n翻译结束时间: 2019-6-12<br>\n最后修订时间: 2019-6-12</p>\n<p>翻译: Harlan.Zhang<br>\n前言: 因为本人所在公司前端的技术栈主要是 Vue,所以为了扩展自己的技术栈,打算实践一下 React,但是 React 本身的中文资源不如 Vue 丰富。尤其是 React-router，我在网上没有找到很合适的中文资源，只好去啃英文文档，同时也打算把相关的文档翻译一下，本人水平有限，如有错误或者不合适的地方，欢迎指出。</p>\n<h2 id="%E7%9B%AE%E5%BD%95">目录<a class="anchor" href="#%E7%9B%AE%E5%BD%95">§</a></h2>\n<h3 id="%E7%A4%BA%E4%BE%8B">示例<a class="anchor" href="#%E7%A4%BA%E4%BE%8B">§</a></h3>\n<p>该部分全部是各种示例的代码和运行结果，除了代码的注释没有需要翻译的地方，暂时不考虑翻译，推荐直接看<a href="https://reacttraining.com/react-router/web/example/basic">官网</a></p>\n<h3 id="%E6%8C%87%E5%8D%97">指南<a class="anchor" href="#%E6%8C%87%E5%8D%97">§</a></h3>\n<p><a href="./guides/QuickStart.html">快速开始</a><br>\n<a href="./guides/BasicComponents.html">基础组件</a><br>\n<a href="./guides/ServerRendering.html">服务端渲染</a><br>\n<a href="./guides/CodeSplitting.html">代码拆分</a><br>\n<a href="./guides/ScrollRestoration.html">滚动恢复</a><br>\n<a href="./guides/Philosophy.html">设计思想</a><br>\n<a href="./guides/Testting.html">测试</a><br>\n<a href="./guides/ReduxIntegration.html">集成 Redux</a><br>\n<a href="./guides/StaticRouter.html">静态路由</a></p>\n<h3 id="api-%E6%96%87%E6%A1%A3">API 文档<a class="anchor" href="#api-%E6%96%87%E6%A1%A3">§</a></h3>\n<p><a href="./API/API.html#-browserrouter-">BrowserRouter</a><br>\n<a href="./API/API.html#-hashrouter-">HashRouter</a><br>\n<a href="./API/API.html#-link-">Link</a><br>\n<a href="./API/API.html#-navlink-">NavLink</a><br>\n<a href="./API/API.html#-prompt-">Prompt</a><br>\n<a href="./API/API.html#-memoryrouter-">MemoryRouter</a><br>\n<a href="./API/API.html#-redirect-">Redirect</a><br>\n<a href="./API/API.html#-route-">Route</a><br>\n<a href="./API/API.html#-router-">Router</a><br>\n<a href="./API/API.html#-staticrouter-">StaticRouter</a><br>\n<a href="./API/API.html#-switch-">Switch</a><br>\n<a href="./API/API.html#history">history</a><br>\n<a href="./API/API.html#location">location</a><br>\n<a href="./API/API.html#match">match</a><br>\n<a href="./API/API.html#matchpath">matchPath</a><br>\n<a href="./API/API.html#withrouter">withRouter</a></p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@17.0.2/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@17.0.2/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/react_router_chinese/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'contentTitle': React.createElement("h1", { key: "0" }, "React-router5 \u4E2D\u6587\u6587\u6863"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p><a href="https://github.com/Harlan-ZhangDongXing/React-router-chinese">原仓库</a><br>\n<strong>画个饼，有人提交 pr 就搞 github action 自动编译</strong></p>\n<hr>\n<p>翻译起始时间: 2019-5-29<br>\n翻译结束时间: 2019-6-12<br>\n最后修订时间: 2019-6-12</p>\n<p>翻译: Harlan.Zhang<br>\n前言: 因为本人所在公司前端的技术栈主要是 Vue,所以为了扩展自己的技术栈,打算实践一下 React,但是 React 本身的中文资源不如 Vue 丰富。尤其是 React-router，我在网上没有找到很合适的中文资源，只好去啃英文文档，同时也打算把相关的文档翻译一下，本人水平有限，如有错误或者不合适的地方，欢迎指出。</p>\n<h2 id="%E7%9B%AE%E5%BD%95">目录<a class="anchor" href="#%E7%9B%AE%E5%BD%95">§</a></h2>\n<h3 id="%E7%A4%BA%E4%BE%8B">示例<a class="anchor" href="#%E7%A4%BA%E4%BE%8B">§</a></h3>\n<p>该部分全部是各种示例的代码和运行结果，除了代码的注释没有需要翻译的地方，暂时不考虑翻译，推荐直接看<a href="https://reacttraining.com/react-router/web/example/basic">官网</a></p>\n<h3 id="%E6%8C%87%E5%8D%97">指南<a class="anchor" href="#%E6%8C%87%E5%8D%97">§</a></h3>\n<p><a href="./guides/QuickStart.html">快速开始</a><br>\n<a href="./guides/BasicComponents.html">基础组件</a><br>\n<a href="./guides/ServerRendering.html">服务端渲染</a><br>\n<a href="./guides/CodeSplitting.html">代码拆分</a><br>\n<a href="./guides/ScrollRestoration.html">滚动恢复</a><br>\n<a href="./guides/Philosophy.html">设计思想</a><br>\n<a href="./guides/Testting.html">测试</a><br>\n<a href="./guides/ReduxIntegration.html">集成 Redux</a><br>\n<a href="./guides/StaticRouter.html">静态路由</a></p>\n<h3 id="api-%E6%96%87%E6%A1%A3">API 文档<a class="anchor" href="#api-%E6%96%87%E6%A1%A3">§</a></h3>\n<p><a href="./API/API.html#-browserrouter-">BrowserRouter</a><br>\n<a href="./API/API.html#-hashrouter-">HashRouter</a><br>\n<a href="./API/API.html#-link-">Link</a><br>\n<a href="./API/API.html#-navlink-">NavLink</a><br>\n<a href="./API/API.html#-prompt-">Prompt</a><br>\n<a href="./API/API.html#-memoryrouter-">MemoryRouter</a><br>\n<a href="./API/API.html#-redirect-">Redirect</a><br>\n<a href="./API/API.html#-route-">Route</a><br>\n<a href="./API/API.html#-router-">Router</a><br>\n<a href="./API/API.html#-staticrouter-">StaticRouter</a><br>\n<a href="./API/API.html#-switch-">Switch</a><br>\n<a href="./API/API.html#history">history</a><br>\n<a href="./API/API.html#location">location</a><br>\n<a href="./API/API.html#match">match</a><br>\n<a href="./API/API.html#matchpath">matchPath</a><br>\n<a href="./API/API.html#withrouter">withRouter</a></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%9B%AE%E5%BD%95" }, "\u76EE\u5F55"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E7%A4%BA%E4%BE%8B" }, "\u793A\u4F8B")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E6%8C%87%E5%8D%97" }, "\u6307\u5357")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#api-%E6%96%87%E6%A1%A3" }, "API \u6587\u6863")))))),
    'author': "Kanzaki-H-Aria",
    'contributors': [
        "Kanzaki-H-Aria",
        "frisktale"
    ],
    'date': "2019-05-29T02:00:07.000Z",
    'updated': "2021-11-10T13:39:19.000Z",
    'excerpt': "原仓库 画个饼，有人提交 pr 就搞 github action 自动编译 -----------------------------------------------------------------------------------------------------------------------------------------------------------...",
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
