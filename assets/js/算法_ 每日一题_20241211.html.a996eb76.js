"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[507],{330:(s,i,a)=>{a.r(i),a.d(i,{comp:()=>e,data:()=>l});var n=a(641);const t={},e=(0,a(6262).A)(t,[["render",function(s,i){return(0,n.uX)(),(0,n.CE)("div",null,i[0]||(i[0]=[(0,n.Fv)('<p><a href="https://leetcode.cn/problems/semi-ordered-permutation/" target="_blank" rel="noopener noreferrer">2717. 半有序排列</a></p><p>已解答</p><p>简单</p><p>相关标签</p><p>相关企业</p><p>提示</p><p>给你一个下标从 <strong>0</strong> 开始、长度为 <code>n</code> 的整数排列 <code>nums</code> 。</p><p>如果排列的第一个数字等于 <code>1</code> 且最后一个数字等于 <code>n</code> ，则称其为 <strong>半有序排列</strong> 。你可以执行多次下述操作，直到将 <code>nums</code> 变成一个 <strong>半有序排列</strong> ：</p><ul><li>选择 <code>nums</code> 中相邻的两个元素，然后交换它们。</li></ul><p>返回使 <code>nums</code> 变成 <strong>半有序排列</strong> 所需的最小操作次数。</p><p><strong>排列</strong> 是一个长度为 <code>n</code> 的整数序列，其中包含从 <code>1</code> 到 <code>n</code> 的每个数字恰好一次</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> semiOrderedPermutation</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> []</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    var</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> idx1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">idxn</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">:=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">len</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            idx1</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">len</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">){</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            idxn</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    ret</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> idx1</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;"> -</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> idxn</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;"> +</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> len</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> idx1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> idxn</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        ret</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> ret</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> ret</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',12)]))}]]),l=JSON.parse('{"path":"/%E7%AE%97%E6%B3%95/%20%E6%AF%8F%E6%97%A5%E4%B8%80%E9%A2%98/20241211.html","title":"20241211","lang":"zh-CN","frontmatter":{"description":"2717. 半有序排列 已解答 简单 相关标签 相关企业 提示 给你一个下标从 0 开始、长度为 n 的整数排列 nums 。 如果排列的第一个数字等于 1 且最后一个数字等于 n ，则称其为 半有序排列 。你可以执行多次下述操作，直到将 nums 变成一个 半有序排列 ： 选择 nums 中相邻的两个元素，然后交换它们。 返回使 nums 变成 半有...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%AE%97%E6%B3%95/%20%E6%AF%8F%E6%97%A5%E4%B8%80%E9%A2%98/20241211.html"}],["meta",{"property":"og:site_name","content":"ntom"}],["meta",{"property":"og:title","content":"20241211"}],["meta",{"property":"og:description","content":"2717. 半有序排列 已解答 简单 相关标签 相关企业 提示 给你一个下标从 0 开始、长度为 n 的整数排列 nums 。 如果排列的第一个数字等于 1 且最后一个数字等于 n ，则称其为 半有序排列 。你可以执行多次下述操作，直到将 nums 变成一个 半有序排列 ： 选择 nums 中相邻的两个元素，然后交换它们。 返回使 nums 变成 半有..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-23T14:28:54.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-23T14:28:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"20241211\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-23T14:28:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"notm\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1734964134000,"updatedTime":1734964134000,"contributors":[{"name":"Yang Yang","username":"Yang Yang","email":"yangyang@YangdeMacBook-Air.local","commits":1,"url":"https://github.com/Yang Yang"}]},"readingTime":{"minutes":0.72,"words":215},"filePathRelative":"算法/ 每日一题/20241211.md","localizedDate":"2024年12月23日","autoDesc":true}')},6262:(s,i)=>{i.A=(s,i)=>{const a=s.__vccOpts||s;for(const[s,n]of i)a[s]=n;return a}}}]);