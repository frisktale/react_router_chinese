import projectConfig from '/react_router_chinese/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "guides/CodeSplitting.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "guides/CodeSplitting.html",
    'title': undefined,
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E4%BB%A3%E7%A0%81%E6%8B%86%E5%88%86">代码拆分<a class="anchor" href="#%E4%BB%A3%E7%A0%81%E6%8B%86%E5%88%86">§</a></h2>\n<p>Web应用一个非常出色的特性就是我们不必下载整个应用就可以使用。你可以认为代码拆分是逐渐递增的加载我们的应用。在这里，我们使用webpack, @babel/plugin-syntax-dynamic-import,和loadable-components来实现。</p>\n<p>webpack内置了对动态导入的支持; 但是，如果你使用Babel（例如，将JSX编译为JavaScript），那么你将需要同时使用@ babel / plugin-syntax-dynamic-import插件。 这是一个仅只进行语法解析的插件，这意味着Babel不会进行任何其他转换。 该插件只允许Babel解析动态导入，因此webpack可以将它们打包成不同的代码模块。 你的.babelrc应该是这样的：</p>\n<pre class="language-autoit"><code class="language-autoit">{\n  <span class="token string">"presets"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"@babel/preset-react"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">"plugins"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"@babel/plugin-syntax-dynamic-import"</span><span class="token punctuation">]</span>\n}\n</code></pre>\n<p>loadable-components是一个用于加载具有动态导入功能的组件的库。 她会自动处理各种边缘情况，使代码拆分变得简单，以下是如何使用loadable-components的示例：</p>\n<pre class="language-autoit"><code class="language-autoit">import loadable from <span class="token string">\'@loadable/component\'</span>\nimport Loading from <span class="token string">"./Loading"</span><span class="token comment">;</span>\n\n<span class="token keyword">const</span> LoadableComponent <span class="token operator">=</span> <span class="token function">loadable</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">import</span><span class="token punctuation">(</span><span class="token string">\'./Dashboard\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> {\n  fallback<span class="token punctuation">:</span> Loading<span class="token punctuation">,</span>\n}<span class="token punctuation">)</span>\n\nexport <span class="token keyword">default</span> class LoadableDashboard extends React<span class="token punctuation">.</span>Component {\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n    return <span class="token operator">&lt;</span>LoadableComponent <span class="token operator">/</span><span class="token operator">></span><span class="token comment">;</span>\n  }\n}\n</code></pre>\n<p>只需使用LoadableDashboard（或任何你自定义的组件），当你在应用程序中使用它时，它将自动加载和渲染。在实际组件加载时，fallback是一种占位的组件。<a href="https://www.smooth-code.com/open-source/loadable-components/docs/getting-started/">此处</a>提供了完整的文档</p>\n<h3 id="%E4%BB%A3%E7%A0%81%E6%8B%86%E5%88%86%E5%92%8Cserver-side%E6%B8%B2%E6%9F%93">代码拆分和Server-Side渲染<a class="anchor" href="#%E4%BB%A3%E7%A0%81%E6%8B%86%E5%88%86%E5%92%8Cserver-side%E6%B8%B2%E6%9F%93">§</a></h3>\n<p>loadable-components包含了server-side渲染的引导。</p>'
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
            __html: '<h2 id="%E4%BB%A3%E7%A0%81%E6%8B%86%E5%88%86">代码拆分<a class="anchor" href="#%E4%BB%A3%E7%A0%81%E6%8B%86%E5%88%86">§</a></h2>\n<p>Web应用一个非常出色的特性就是我们不必下载整个应用就可以使用。你可以认为代码拆分是逐渐递增的加载我们的应用。在这里，我们使用webpack, @babel/plugin-syntax-dynamic-import,和loadable-components来实现。</p>\n<p>webpack内置了对动态导入的支持; 但是，如果你使用Babel（例如，将JSX编译为JavaScript），那么你将需要同时使用@ babel / plugin-syntax-dynamic-import插件。 这是一个仅只进行语法解析的插件，这意味着Babel不会进行任何其他转换。 该插件只允许Babel解析动态导入，因此webpack可以将它们打包成不同的代码模块。 你的.babelrc应该是这样的：</p>\n<pre class="language-autoit"><code class="language-autoit">{\n  <span class="token string">"presets"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"@babel/preset-react"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">"plugins"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"@babel/plugin-syntax-dynamic-import"</span><span class="token punctuation">]</span>\n}\n</code></pre>\n<p>loadable-components是一个用于加载具有动态导入功能的组件的库。 她会自动处理各种边缘情况，使代码拆分变得简单，以下是如何使用loadable-components的示例：</p>\n<pre class="language-autoit"><code class="language-autoit">import loadable from <span class="token string">\'@loadable/component\'</span>\nimport Loading from <span class="token string">"./Loading"</span><span class="token comment">;</span>\n\n<span class="token keyword">const</span> LoadableComponent <span class="token operator">=</span> <span class="token function">loadable</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">import</span><span class="token punctuation">(</span><span class="token string">\'./Dashboard\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> {\n  fallback<span class="token punctuation">:</span> Loading<span class="token punctuation">,</span>\n}<span class="token punctuation">)</span>\n\nexport <span class="token keyword">default</span> class LoadableDashboard extends React<span class="token punctuation">.</span>Component {\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n    return <span class="token operator">&lt;</span>LoadableComponent <span class="token operator">/</span><span class="token operator">></span><span class="token comment">;</span>\n  }\n}\n</code></pre>\n<p>只需使用LoadableDashboard（或任何你自定义的组件），当你在应用程序中使用它时，它将自动加载和渲染。在实际组件加载时，fallback是一种占位的组件。<a href="https://www.smooth-code.com/open-source/loadable-components/docs/getting-started/">此处</a>提供了完整的文档</p>\n<h3 id="%E4%BB%A3%E7%A0%81%E6%8B%86%E5%88%86%E5%92%8Cserver-side%E6%B8%B2%E6%9F%93">代码拆分和Server-Side渲染<a class="anchor" href="#%E4%BB%A3%E7%A0%81%E6%8B%86%E5%88%86%E5%92%8Cserver-side%E6%B8%B2%E6%9F%93">§</a></h3>\n<p>loadable-components包含了server-side渲染的引导。</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%BB%A3%E7%A0%81%E6%8B%86%E5%88%86" }, "\u4EE3\u7801\u62C6\u5206"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E4%BB%A3%E7%A0%81%E6%8B%86%E5%88%86%E5%92%8Cserver-side%E6%B8%B2%E6%9F%93" }, "\u4EE3\u7801\u62C6\u5206\u548CServer-Side\u6E32\u67D3")))))),
    'author': undefined,
    'contributors': [],
    'date': "2021-10-28T10:02:43.660Z",
    'updated': null,
    'excerpt': "代码拆分 Web应用一个非常出色的特性就是我们不必下载整个应用就可以使用。你可以认为代码拆分是逐渐递增的加载我们的应用。在这里，我们使用webpack, @babel/plugin-syntax-dynamic-import,和loadable-components来实现。 web...",
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
