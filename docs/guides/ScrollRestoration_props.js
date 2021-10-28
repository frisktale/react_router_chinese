import projectConfig from '/react_router_chinese/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "guides/ScrollRestoration.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "guides/ScrollRestoration.html",
    'title': undefined,
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E6%BB%9A%E5%8A%A8%E6%81%A2%E5%A4%8D">滚动恢复<a class="anchor" href="#%E6%BB%9A%E5%8A%A8%E6%81%A2%E5%A4%8D">§</a></h2>\n<p>在早期的React Router版本中，我们为滚动恢复提供了开箱即用的支持，从那时起开发者就一直在使用。希望本文档可以帮助你获取你需要的滚动条和路由的内容。</p>\n<p>浏览器已经开始使用history.pushState自己处理滚动恢复，这就像她们以前使用普通浏览器导航一样处理滚动恢复。现在这个很酷的特性已经在Chrome中被支持了。</p>\n<p>因为浏览器开始处理“默认情况”，并且不同的应用程序具有不同的滚动需求（就像本站这样），所以我们不提供默认的滚动管理。但是本指南应该可以帮助你实现任何滚动需求。</p>\n<h3 id="%E6%BB%9A%E5%8A%A8%E5%88%B0%E9%A1%B6%E9%83%A8">滚动到顶部<a class="anchor" href="#%E6%BB%9A%E5%8A%A8%E5%88%B0%E9%A1%B6%E9%83%A8">§</a></h3>\n<p>大多数情况下，你需要的是“滚动到顶部”这个功能，因为大部分情况是有一个包含了大量内容的长页面。使用<ScrollToTop>组件可以直接处理这中情况，该组件将会实现在每个导航上滚动窗口到顶部，你需要确保使用withRouter封装该组件以使其能够访问路由器的props。</p>\n<pre class="language-autoit"><code class="language-autoit">class ScrollToTop extends Component {\n  <span class="token function">componentDidUpdate</span><span class="token punctuation">(</span>prevProps<span class="token punctuation">)</span> {\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>this<span class="token punctuation">.</span>props<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname !<span class="token operator">==</span> prevProps<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">)</span> {\n      window<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token comment">;</span>\n    }\n  }\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n    return this<span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token comment">;</span>\n  }\n}\n\nexport <span class="token keyword">default</span> <span class="token function">withRouter</span><span class="token punctuation">(</span>ScrollToTop<span class="token punctuation">)</span><span class="token comment">;</span>\n</code></pre>\n<p>然后将其渲染在应用的顶部</p>\n<pre class="language-autoit"><code class="language-autoit">function <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n  return <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>Router<span class="token operator">></span>\n      <span class="token operator">&lt;</span>ScrollToTop<span class="token operator">></span>\n        <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>ScrollToTop<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">></span>\n  <span class="token punctuation">)</span><span class="token comment">;</span>\n}\n\n<span class="token operator">/</span><span class="token operator">/</span> <span class="token operator">or</span> just render it bare anywhere you want<span class="token punctuation">,</span> but just one <span class="token punctuation">:</span><span class="token punctuation">)</span>\n<span class="token operator">&lt;</span>ScrollToTop <span class="token operator">/</span><span class="token operator">></span><span class="token comment">;</span>\n</code></pre>\n<p>如果你有一个连接到路由的tab选项卡，那么你可能不希望在切换标签时滚动到顶部。此时可以使用<ScrollToTopOnMount>。</p>\n<pre class="language-autoit"><code class="language-autoit">class ScrollToTopOnMount extends Component {\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n    window<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token comment">;</span>\n  }\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n    return <span class="token keyword">null</span><span class="token comment">;</span>\n  }\n}\n\nclass LongContent extends Component {\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n    <span class="token operator">&lt;</span>div<span class="token operator">></span>\n      <span class="token operator">&lt;</span>ScrollToTopOnMount <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span>h1<span class="token operator">></span>Here is my long content page<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token comment">;</span>\n  }\n}\n\n<span class="token operator">/</span><span class="token operator">/</span> somewhere <span class="token keyword">else</span>\n<span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/long-content"</span> component<span class="token operator">=</span>{LongContent} <span class="token operator">/</span><span class="token operator">></span><span class="token comment">;</span>\n</code></pre>\n<h3 id="%E9%80%9A%E7%94%A8%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88">通用解决方案<a class="anchor" href="#%E9%80%9A%E7%94%A8%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88">§</a></h3>\n<p>对于通用解决方案（以及浏览器开始本地实现）我们谈论两件事：</p>\n<ol>\n<li>导航跳转时自动滚动到页面顶部，这样不会出现创建一个新的页面滚动条在底部。</li>\n<li>在前进或后退时保留原来滚动条的位置（不包含点击跳转链接）</li>\n</ol>\n<p>对于第一点我们想要发布一个通用的api，这是我们想要的：</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">&lt;</span>Router<span class="token operator">></span>\n  <span class="token operator">&lt;</span>ScrollRestoration<span class="token operator">></span>\n    <span class="token operator">&lt;</span>div<span class="token operator">></span>\n      <span class="token operator">&lt;</span>h1<span class="token operator">></span>App<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>\n\n      <span class="token operator">&lt;</span>RestoredScroll id<span class="token operator">=</span><span class="token string">"bunny"</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>div style<span class="token operator">=</span>{{ height<span class="token punctuation">:</span> <span class="token string">"200px"</span><span class="token punctuation">,</span> overflow<span class="token punctuation">:</span> <span class="token string">"auto"</span> }}<span class="token operator">></span>I will overflow<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>RestoredScroll<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>ScrollRestoration<span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">></span>\n</code></pre>\n<p>首先，ScrollRestoration将在导航时向上滚动窗口。 其次，它将使用location.key将窗口滚动位置和RestoredScroll组件的滚动位置保存到sessionStorage。 然后，当ScrollRestoration或RestoredScroll组件挂载时，他们可以从sessionsStorage中查找它们的位置。</p>\n<p>对我来说棘手的是当我不希望管理窗口滚动时,如何实现一个“选择退出”API，。 例如，当你有一些浮动在页面上的选项卡导航时，你可能不希望滚动到顶部（选项卡可能会滚动到视图之外）。</p>\n<p>当我了解到chrome现在已经在为我们管理滚动位置，并且意识到不同的应用将有不同的滚动需求时，我有点失去了做这件事的信念 - 特别是当人们只想滚动到顶部时（ 你看到的是很容易直接添加到你的应用的内容）。</p>\n<p>基于此，我们觉得我们已经没有足够的力量来完成这项工作（就像你的时间是有限的一样）。但是，我们很乐意帮助任何愿意使用通用解决方案的人。如果你一开始就使用她，你的项目会有一个可靠的解决方案。</p>'
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
            __html: '<h2 id="%E6%BB%9A%E5%8A%A8%E6%81%A2%E5%A4%8D">滚动恢复<a class="anchor" href="#%E6%BB%9A%E5%8A%A8%E6%81%A2%E5%A4%8D">§</a></h2>\n<p>在早期的React Router版本中，我们为滚动恢复提供了开箱即用的支持，从那时起开发者就一直在使用。希望本文档可以帮助你获取你需要的滚动条和路由的内容。</p>\n<p>浏览器已经开始使用history.pushState自己处理滚动恢复，这就像她们以前使用普通浏览器导航一样处理滚动恢复。现在这个很酷的特性已经在Chrome中被支持了。</p>\n<p>因为浏览器开始处理“默认情况”，并且不同的应用程序具有不同的滚动需求（就像本站这样），所以我们不提供默认的滚动管理。但是本指南应该可以帮助你实现任何滚动需求。</p>\n<h3 id="%E6%BB%9A%E5%8A%A8%E5%88%B0%E9%A1%B6%E9%83%A8">滚动到顶部<a class="anchor" href="#%E6%BB%9A%E5%8A%A8%E5%88%B0%E9%A1%B6%E9%83%A8">§</a></h3>\n<p>大多数情况下，你需要的是“滚动到顶部”这个功能，因为大部分情况是有一个包含了大量内容的长页面。使用<ScrollToTop>组件可以直接处理这中情况，该组件将会实现在每个导航上滚动窗口到顶部，你需要确保使用withRouter封装该组件以使其能够访问路由器的props。</p>\n<pre class="language-autoit"><code class="language-autoit">class ScrollToTop extends Component {\n  <span class="token function">componentDidUpdate</span><span class="token punctuation">(</span>prevProps<span class="token punctuation">)</span> {\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>this<span class="token punctuation">.</span>props<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname !<span class="token operator">==</span> prevProps<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">)</span> {\n      window<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token comment">;</span>\n    }\n  }\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n    return this<span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token comment">;</span>\n  }\n}\n\nexport <span class="token keyword">default</span> <span class="token function">withRouter</span><span class="token punctuation">(</span>ScrollToTop<span class="token punctuation">)</span><span class="token comment">;</span>\n</code></pre>\n<p>然后将其渲染在应用的顶部</p>\n<pre class="language-autoit"><code class="language-autoit">function <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n  return <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>Router<span class="token operator">></span>\n      <span class="token operator">&lt;</span>ScrollToTop<span class="token operator">></span>\n        <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>ScrollToTop<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">></span>\n  <span class="token punctuation">)</span><span class="token comment">;</span>\n}\n\n<span class="token operator">/</span><span class="token operator">/</span> <span class="token operator">or</span> just render it bare anywhere you want<span class="token punctuation">,</span> but just one <span class="token punctuation">:</span><span class="token punctuation">)</span>\n<span class="token operator">&lt;</span>ScrollToTop <span class="token operator">/</span><span class="token operator">></span><span class="token comment">;</span>\n</code></pre>\n<p>如果你有一个连接到路由的tab选项卡，那么你可能不希望在切换标签时滚动到顶部。此时可以使用<ScrollToTopOnMount>。</p>\n<pre class="language-autoit"><code class="language-autoit">class ScrollToTopOnMount extends Component {\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n    window<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token comment">;</span>\n  }\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n    return <span class="token keyword">null</span><span class="token comment">;</span>\n  }\n}\n\nclass LongContent extends Component {\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n    <span class="token operator">&lt;</span>div<span class="token operator">></span>\n      <span class="token operator">&lt;</span>ScrollToTopOnMount <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span>h1<span class="token operator">></span>Here is my long content page<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token comment">;</span>\n  }\n}\n\n<span class="token operator">/</span><span class="token operator">/</span> somewhere <span class="token keyword">else</span>\n<span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/long-content"</span> component<span class="token operator">=</span>{LongContent} <span class="token operator">/</span><span class="token operator">></span><span class="token comment">;</span>\n</code></pre>\n<h3 id="%E9%80%9A%E7%94%A8%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88">通用解决方案<a class="anchor" href="#%E9%80%9A%E7%94%A8%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88">§</a></h3>\n<p>对于通用解决方案（以及浏览器开始本地实现）我们谈论两件事：</p>\n<ol>\n<li>导航跳转时自动滚动到页面顶部，这样不会出现创建一个新的页面滚动条在底部。</li>\n<li>在前进或后退时保留原来滚动条的位置（不包含点击跳转链接）</li>\n</ol>\n<p>对于第一点我们想要发布一个通用的api，这是我们想要的：</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">&lt;</span>Router<span class="token operator">></span>\n  <span class="token operator">&lt;</span>ScrollRestoration<span class="token operator">></span>\n    <span class="token operator">&lt;</span>div<span class="token operator">></span>\n      <span class="token operator">&lt;</span>h1<span class="token operator">></span>App<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>\n\n      <span class="token operator">&lt;</span>RestoredScroll id<span class="token operator">=</span><span class="token string">"bunny"</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>div style<span class="token operator">=</span>{{ height<span class="token punctuation">:</span> <span class="token string">"200px"</span><span class="token punctuation">,</span> overflow<span class="token punctuation">:</span> <span class="token string">"auto"</span> }}<span class="token operator">></span>I will overflow<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>RestoredScroll<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>ScrollRestoration<span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">></span>\n</code></pre>\n<p>首先，ScrollRestoration将在导航时向上滚动窗口。 其次，它将使用location.key将窗口滚动位置和RestoredScroll组件的滚动位置保存到sessionStorage。 然后，当ScrollRestoration或RestoredScroll组件挂载时，他们可以从sessionsStorage中查找它们的位置。</p>\n<p>对我来说棘手的是当我不希望管理窗口滚动时,如何实现一个“选择退出”API，。 例如，当你有一些浮动在页面上的选项卡导航时，你可能不希望滚动到顶部（选项卡可能会滚动到视图之外）。</p>\n<p>当我了解到chrome现在已经在为我们管理滚动位置，并且意识到不同的应用将有不同的滚动需求时，我有点失去了做这件事的信念 - 特别是当人们只想滚动到顶部时（ 你看到的是很容易直接添加到你的应用的内容）。</p>\n<p>基于此，我们觉得我们已经没有足够的力量来完成这项工作（就像你的时间是有限的一样）。但是，我们很乐意帮助任何愿意使用通用解决方案的人。如果你一开始就使用她，你的项目会有一个可靠的解决方案。</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%BB%9A%E5%8A%A8%E6%81%A2%E5%A4%8D" }, "\u6EDA\u52A8\u6062\u590D"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E6%BB%9A%E5%8A%A8%E5%88%B0%E9%A1%B6%E9%83%A8" }, "\u6EDA\u52A8\u5230\u9876\u90E8")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E9%80%9A%E7%94%A8%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88" }, "\u901A\u7528\u89E3\u51B3\u65B9\u6848")))))),
    'author': undefined,
    'contributors': [],
    'date': "2021-10-28T10:02:43.660Z",
    'updated': null,
    'excerpt': "滚动恢复 在早期的React Router版本中，我们为滚动恢复提供了开箱即用的支持，从那时起开发者就一直在使用。希望本文档可以帮助你获取你需要的滚动条和路由的内容。 浏览器已经开始使用history.pushState自己处理滚动恢复，这就...",
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
