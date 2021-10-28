import projectConfig from '/react_router_chinese/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "guides/ReduxIntegration.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "guides/ReduxIntegration.html",
    'title': undefined,
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="redux%E9%9B%86%E6%88%90">Redux集成<a class="anchor" href="#redux%E9%9B%86%E6%88%90">§</a></h2>\n<p>Redux是React生态系统的重要组成部分。我们希望将React Router和Redux尽可能地无缝集成以满足人们想要同时使用她们的需求。</p>\n<h3 id="%E9%98%BB%E5%A1%9E%E6%9B%B4%E6%96%B0">阻塞更新<a class="anchor" href="#%E9%98%BB%E5%A1%9E%E6%9B%B4%E6%96%B0">§</a></h3>\n<p>通常，React Router和Redux可以很好地协同工作。但有时，应用可能会发生有一个组件在位置更改时不会更新（子路由或点击导航链接不会更新）的情况。</p>\n<p>如果这种情况发生在以下场景：</p>\n<ol>\n<li>该组件通过connect()(comp)连接到redux。</li>\n<li>该组件不是“路由组件”，这意味着它不会像这样渲染：&lt; Route component = {SomeConnectedThing} /&gt;</li>\n</ol>\n<p>问题通常是Redux实现了本来应该由组件自动更新的部分，如果她没有从路由接收属性，则没有任何迹象表明组件应该发生改变。这很容易解决，找到连接组件的位置并将其封装在withRouter方法中。</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">/</span><span class="token operator">/</span> before\nexport <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>Something<span class="token punctuation">)</span>\n\n<span class="token operator">/</span><span class="token operator">/</span> after\nimport { withRouter } from <span class="token string">\'react-router-dom\'</span>\nexport <span class="token keyword">default</span> <span class="token function">withRouter</span><span class="token punctuation">(</span><span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>Something<span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n</code></pre>\n<h3 id="%E6%B7%B1%E5%BA%A6%E9%9B%86%E6%88%90">深度集成<a class="anchor" href="#%E6%B7%B1%E5%BA%A6%E9%9B%86%E6%88%90">§</a></h3>\n<p>一些人想要做到：</p>\n<ol>\n<li>从store中访问并同步数据。</li>\n<li>能够通过调用actions进行导航跳转。</li>\n<li>支持在Redux devtools中调试路由改变。</li>\n</ol>\n<p>所有这些需要深度集成。</p>\n<p>我们的建议是更不不要将路由放在Redux store中。</p>\n<p>原因：</p>\n<ol>\n<li>路由数据已经成为你的大部分组件所在意的属性。无论她是来自store还是router，你的组件代码都大致相同。</li>\n<li>在大多数情况下，你可以使用Link，NavLink和Redirect来执行导航操作。有时你可能还需要在初始化操作启动某个异步任务之后以编程方式导航。\n例如，你可以在用户提交登录表单时调度action。你的thunk，saga或其他异步操作需要验证身份，如果成功，她需要某种方式导航的新页面。解决方案是在action的payload中包含历史对象（提供给所有路由组件），并且在适当的时候你的异步操作可以使用这来进行导航跳转。</li>\n<li>路由改变对于时间旅行式的调试不太重要。唯一需要关注的情况是调试route/store同步的问题，但如果你根本不同步这个问题就会消失。</li>\n</ol>\n<p>但是如果你强烈想要将你的route与store同步，你可能想尝试 Connected React Router，一个绑定React Router v4和Redux的第三方类库。</p>'
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
            __html: '<h2 id="redux%E9%9B%86%E6%88%90">Redux集成<a class="anchor" href="#redux%E9%9B%86%E6%88%90">§</a></h2>\n<p>Redux是React生态系统的重要组成部分。我们希望将React Router和Redux尽可能地无缝集成以满足人们想要同时使用她们的需求。</p>\n<h3 id="%E9%98%BB%E5%A1%9E%E6%9B%B4%E6%96%B0">阻塞更新<a class="anchor" href="#%E9%98%BB%E5%A1%9E%E6%9B%B4%E6%96%B0">§</a></h3>\n<p>通常，React Router和Redux可以很好地协同工作。但有时，应用可能会发生有一个组件在位置更改时不会更新（子路由或点击导航链接不会更新）的情况。</p>\n<p>如果这种情况发生在以下场景：</p>\n<ol>\n<li>该组件通过connect()(comp)连接到redux。</li>\n<li>该组件不是“路由组件”，这意味着它不会像这样渲染：&lt; Route component = {SomeConnectedThing} /&gt;</li>\n</ol>\n<p>问题通常是Redux实现了本来应该由组件自动更新的部分，如果她没有从路由接收属性，则没有任何迹象表明组件应该发生改变。这很容易解决，找到连接组件的位置并将其封装在withRouter方法中。</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">/</span><span class="token operator">/</span> before\nexport <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>Something<span class="token punctuation">)</span>\n\n<span class="token operator">/</span><span class="token operator">/</span> after\nimport { withRouter } from <span class="token string">\'react-router-dom\'</span>\nexport <span class="token keyword">default</span> <span class="token function">withRouter</span><span class="token punctuation">(</span><span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>Something<span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n</code></pre>\n<h3 id="%E6%B7%B1%E5%BA%A6%E9%9B%86%E6%88%90">深度集成<a class="anchor" href="#%E6%B7%B1%E5%BA%A6%E9%9B%86%E6%88%90">§</a></h3>\n<p>一些人想要做到：</p>\n<ol>\n<li>从store中访问并同步数据。</li>\n<li>能够通过调用actions进行导航跳转。</li>\n<li>支持在Redux devtools中调试路由改变。</li>\n</ol>\n<p>所有这些需要深度集成。</p>\n<p>我们的建议是更不不要将路由放在Redux store中。</p>\n<p>原因：</p>\n<ol>\n<li>路由数据已经成为你的大部分组件所在意的属性。无论她是来自store还是router，你的组件代码都大致相同。</li>\n<li>在大多数情况下，你可以使用Link，NavLink和Redirect来执行导航操作。有时你可能还需要在初始化操作启动某个异步任务之后以编程方式导航。\n例如，你可以在用户提交登录表单时调度action。你的thunk，saga或其他异步操作需要验证身份，如果成功，她需要某种方式导航的新页面。解决方案是在action的payload中包含历史对象（提供给所有路由组件），并且在适当的时候你的异步操作可以使用这来进行导航跳转。</li>\n<li>路由改变对于时间旅行式的调试不太重要。唯一需要关注的情况是调试route/store同步的问题，但如果你根本不同步这个问题就会消失。</li>\n</ol>\n<p>但是如果你强烈想要将你的route与store同步，你可能想尝试 Connected React Router，一个绑定React Router v4和Redux的第三方类库。</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#redux%E9%9B%86%E6%88%90" }, "Redux\u96C6\u6210"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E9%98%BB%E5%A1%9E%E6%9B%B4%E6%96%B0" }, "\u963B\u585E\u66F4\u65B0")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E6%B7%B1%E5%BA%A6%E9%9B%86%E6%88%90" }, "\u6DF1\u5EA6\u96C6\u6210")))))),
    'author': "Kanzaki-H-Aria",
    'contributors': [
        "Kanzaki-H-Aria",
        "frisktale"
    ],
    'date': "2019-06-05T07:07:27.000Z",
    'updated': "2021-10-28T10:09:03.000Z",
    'excerpt': "Redux集成 Redux是React生态系统的重要组成部分。我们希望将React Router和Redux尽可能地无缝集成以满足人们想要同时使用她们的需求。 阻塞更新 通常，React Router和Redux可以很好地协同工作。但有时，应用可能会发生有一个组...",
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
