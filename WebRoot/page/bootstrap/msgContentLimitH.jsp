<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<div class="" style="height: 500px;overflow: auto">
  
  <div class="container-fluid bs-docs-container">
      <div class="row">
        <div class="col-md-12" role="main">
          <div class="bs-docs-section">
  <h1 id="overview" class="page-header">概览</h1>

  <p class="lead">深入了解 Bootstrap 底层结构的关键部分，包括我们让 web 开发变得更好、更快、更强壮的最佳实践。</p>

  <h2 id="overview-doctype">HTML5 文档类型</h2>
  <p>Bootstrap 使用到的某些 HTML 元素和 CSS 属性需要将页面设置为 HTML5 文档类型。在你项目中的每个页面都要参照下面的格式进行设置。</p>
<div class="highlight"><pre><code class="language-html" data-lang="html"><span class="cp">&lt;!DOCTYPE html&gt;</span>
<span class="nt">&lt;html</span> <span class="na">lang=</span><span class="s">"zh-CN"</span><span class="nt">&gt;</span>
  ...
<span class="nt">&lt;/html&gt;</span></code></pre></div>

  <h2 id="overview-mobile">移动设备优先</h2>
  <p>在 Bootstrap 2 中，我们对框架中的某些关键部分增加了对移动设备友好的样式。而在 Bootstrap 3 中，我们重写了整个框架，使其一开始就是对移动设备友好的。这次不是简单的增加一些可选的针对移动设备的样式，而是直接融合进了框架的内核中。也就是说，<strong>Bootstrap 是移动设备优先的</strong>。针对移动设备的样式融合进了框架的每个角落，而不是增加一个额外的文件。</p>
  <p>为了确保适当的绘制和触屏缩放，需要在 <code>&lt;head&gt;</code> 之中<strong>添加 viewport 元数据标签</strong>。</p>
<div class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;meta</span> <span class="na">name=</span><span class="s">"viewport"</span> <span class="na">content=</span><span class="s">"width=device-width, initial-scale=1"</span><span class="nt">&gt;</span></code></pre></div>
  <p>在移动设备浏览器上，通过为视口（viewport）设置 meta 属性为 <code>user-scalable=no</code> 可以禁用其缩放（zooming）功能。这样禁用缩放功能后，用户只能滚动屏幕，就能让你的网站看上去更像原生应用的感觉。注意，这种方式我们并不推荐所有网站使用，还是要看你自己的情况而定！</p>
<div class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;meta</span> <span class="na">name=</span><span class="s">"viewport"</span> <span class="na">content=</span><span class="s">"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"</span><span class="nt">&gt;</span></code></pre></div>

  <h2 id="overview-type-links">排版与链接</h2>
  <p>Bootstrap 排版、链接样式设置了基本的全局样式。分别是：</p>
  <ul>
    <li>为 <code>body</code> 元素设置 <code>background-color: #fff;</code></li>
    <li>使用 <code>@font-family-base</code>、<code>@font-size-base</code> 和 <code>@line-height-base</code> a变量作为排版的基本参数</li>
    <li>为所有链接设置了基本颜色 <code>@link-color</code> ，并且当链接处于 <code>:hover</code> 状态时才添加下划线</li>
  </ul>
  <p>这些样式都能在 <code>scaffolding.less</code> 文件中找到对应的源码。</p>

  <h2 id="overview-normalize">Normalize.css</h2>
  <p>为了增强跨浏览器表现的一致性，我们使用了 <a href="http://necolas.github.io/normalize.css/" target="_blank">Normalize.css</a>，这是由 <a href="https://twitter.com/necolas" target="_blank">Nicolas Gallagher</a> 和 <a href="https://twitter.com/jon_neal" target="_blank">Jonathan Neal</a> 维护的一个CSS 重置样式库。</p>

  <h2 id="overview-container">布局容器</h2>
  <p>Bootstrap 需要为页面内容和栅格系统包裹一个 <code>.container</code> 容器。我们提供了两个作此用处的类。注意，由于 <code>padding</code> 等属性的原因，这两种 容器类不能互相嵌套。</p>
  <p><code>.container</code> 类用于固定宽度并支持响应式布局的容器。</p>
<div class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"container"</span><span class="nt">&gt;</span>
  ...
<span class="nt">&lt;/div&gt;</span></code></pre></div>
  <p><code>.container-fluid</code> 类用于 100% 宽度，占据全部视口（viewport）的容器。</p>
<div class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"container-fluid"</span><span class="nt">&gt;</span>
  ...
<span class="nt">&lt;/div&gt;</span></code></pre></div>
</div>

<div class="bs-docs-section">
  <h1 id="grid" class="page-header">栅格系统</h1>

  <p class="lead">Bootstrap 提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多12列。它包含了易于使用的<a href="#grid-example-basic">预定义类</a>，还有强大的<a href="#grid-less">mixin 用于生成更具语义的布局</a>。</p>

  <h2 id="grid-intro">简介</h2>
  <p>栅格系统用于通过一系列的行（row）与列（column）的组合来创建页面布局，你的内容就可以放入这些创建好的布局中。下面就介绍一下 Bootstrap 栅格系统的工作原理：</p>
  <ul>
    <li>“行（row）”必须包含在 <code>.container</code> （固定宽度）或 <code>.container-fluid</code> （100% 宽度）中，以便为其赋予合适的排列（aligment）和内补（padding）。</li>
    <li>通过“行（row）”在水平方向创建一组“列（column）”。</li>
    <li>你的内容应当放置于“列（column）”内，并且，只有“列（column）”可以作为行（row）”的直接子元素。</li>
    <li>类似 <code>.row</code> 和 <code>.col-xs-4</code> 这种预定义的类，可以用来快速创建栅格布局。Bootstrap 源码中定义的 mixin 也可以用来创建语义化的布局。</li>
    <li>通过为“列（column）”设置 <code>padding</code> 属性，从而创建列与列之间的间隔（gutter）。通过为 <code>.row</code> 元素设置负值 <code>margin</code> 从而抵消掉为 <code>.container</code> 元素设置的 <code>padding</code>，也就间接为“行（row）”所包含的“列（column）”抵消掉了<code>padding</code>。</li>
    <li>负值的 margin就是下面的示例为什么是向外突出的原因。在栅格列中的内容排成一行。</li>
    <li>栅格系统中的列是通过指定1到12的值来表示其跨越的范围。例如，三个等宽的列可以使用三个  <code>.col-xs-4</code> 来创建。</li>
    <li>如果一“行（row）”中包含了的“列（column）”大于 12，多余的“列（column）”所在的元素将被作为一个整体另起一行排列。</li>
    <li>栅格类适用于与屏幕宽度大于或等于分界点大小的设备 ， 并且针对小屏幕设备覆盖栅格类。 因此，在元素上应用任何 <code>.col-md-*</code> 栅格类适用于与屏幕宽度大于或等于分界点大小的设备 ， 并且针对小屏幕设备覆盖栅格类。 因此，在元素上应用任何 <code>.col-lg-*</code> 不存在， 也影响大屏幕设备。</li>
  </ul>
  <p>通过研究后面的实例，可以将这些原理应用到你的代码中。</p>

  <h2 id="grid-media-queries">媒体查询</h2>
  <p>在栅格系统中，我们在 Less 文件中使用以下媒体查询（media query）来创建关键的分界点阈值。</p>
<div class="highlight"><pre><code class="language-scss" data-lang="scss"><span class="cm">/* 超小屏幕（手机，小于 768px） */</span>
<span class="cm">/* 没有任何媒体查询相关的代码，因为这在 Bootstrap 中是默认的（还记得 Bootstrap 是移动设备优先的吗？） */</span>

<span class="cm">/* 小屏幕（平板，大于等于 768px） */</span>
<span class="k">@media</span> <span class="o">(</span><span class="nt">min-width</span><span class="nd">:</span> <span class="o">@</span><span class="nt">screen-sm-min</span><span class="o">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>

<span class="cm">/* 中等屏幕（桌面显示器，大于等于 992px） */</span>
<span class="k">@media</span> <span class="o">(</span><span class="nt">min-width</span><span class="nd">:</span> <span class="o">@</span><span class="nt">screen-md-min</span><span class="o">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>

<span class="cm">/* 大屏幕（大桌面显示器，大于等于 1200px） */</span>
<span class="k">@media</span> <span class="o">(</span><span class="nt">min-width</span><span class="nd">:</span> <span class="o">@</span><span class="nt">screen-lg-min</span><span class="o">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span></code></pre></div>
  <p>我们偶尔也会在媒体查询代码中包含 <code>max-width</code> 从而将 CSS 的影响限制在更小范围的屏幕大小之内。</p>
<div class="highlight"><pre><code class="language-scss" data-lang="scss"><span class="k">@media</span> <span class="o">(</span><span class="nt">max-width</span><span class="nd">:</span> <span class="o">@</span><span class="nt">screen-xs-max</span><span class="o">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
<span class="k">@media</span> <span class="o">(</span><span class="nt">min-width</span><span class="nd">:</span> <span class="o">@</span><span class="nt">screen-sm-min</span><span class="o">)</span> <span class="nt">and</span> <span class="o">(</span><span class="nt">max-width</span><span class="nd">:</span> <span class="o">@</span><span class="nt">screen-sm-max</span><span class="o">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
<span class="k">@media</span> <span class="o">(</span><span class="nt">min-width</span><span class="nd">:</span> <span class="o">@</span><span class="nt">screen-md-min</span><span class="o">)</span> <span class="nt">and</span> <span class="o">(</span><span class="nt">max-width</span><span class="nd">:</span> <span class="o">@</span><span class="nt">screen-md-max</span><span class="o">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
<span class="k">@media</span> <span class="o">(</span><span class="nt">min-width</span><span class="nd">:</span> <span class="o">@</span><span class="nt">screen-lg-min</span><span class="o">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span></code></pre></div>
  </div>
  </div>
  </div>
  </div>
  
</div>