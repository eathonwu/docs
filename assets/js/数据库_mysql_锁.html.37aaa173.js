"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[212],{5907:(i,s,e)=>{e.r(s),e.d(s,{comp:()=>t,data:()=>l});var a=e(641);const n={},t=(0,e(6262).A)(n,[["render",function(i,s){const e=(0,a.g2)("font");return(0,a.uX)(),(0,a.CE)("div",null,[s[1]||(s[1]=(0,a.Fv)('<h1 id="概览" tabindex="-1"><a class="header-anchor" href="#概览"><span>概览</span></a></h1><figure><img src="https://cdn.xiaolincoding.com//mysql/other/1e37f6994ef44714aba03b8046b1ace2.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h1 id="全局锁" tabindex="-1"><a class="header-anchor" href="#全局锁"><span>全局锁</span></a></h1><p>示例:</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> flush tables </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">with</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> read</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> lock </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">--加锁</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> unlock</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> tables </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">--解锁</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用途: 全库备份,期间不允许数据修改</p><h1 id="表级别锁" tabindex="-1"><a class="header-anchor" href="#表级别锁"><span>表级别锁</span></a></h1><h2 id="_1-表锁" tabindex="-1"><a class="header-anchor" href="#_1-表锁"><span>1.表锁</span></a></h2><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">lock tables t_student </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">read</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">--表级别的共享锁，也就是读锁；</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">unlock</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> tables </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">--解锁 </span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">lock tables t_stuent write; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 表级别的独占锁，也就是写锁；</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">unlock</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> tables </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">--解锁</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-元数据锁" tabindex="-1"><a class="header-anchor" href="#_2-元数据锁"><span>2.元数据锁</span></a></h2><p>再来说说<strong>元数据锁</strong>（MDL）。</p><p>我们不需要显示的使用 MDL，因为当我们对数据库表进行操作时，会自动给这个表加上 MDL：</p><ul><li>对一张表进行 CRUD 操作时，加的是 <strong>MDL 读锁</strong>；</li><li>对一张表做结构变更操作的时候，加的是 <strong>MDL 写锁</strong>；</li></ul><p>MDL 是为了保证当用户对表执行 CRUD 操作时，防止其他线程对这个表结构做了变更。</p><p>当有线程在执行 select 语句（ 加 MDL 读锁）的期间，如果有其他线程要更改该表的结构（ 申请 MDL 写锁），那么将会被阻塞，直到执行完 select 语句（ 释放 MDL 读锁）。</p><p>反之，当有线程对表结构进行变更（ 加 MDL 写锁）的期间，如果有其他线程执行了 CRUD 操作（ 申请 MDL 读锁），那么就会被阻塞，直到表结构变更完成（ 释放 MDL 写锁）。</p><p>MDL 是在事务提交后才会释放，这意味着<strong>事务执行期间，MDL 是一直持有的</strong>。</p><h2 id="_3-意向锁" tabindex="-1"><a class="header-anchor" href="#_3-意向锁"><span>3.意向锁</span></a></h2><p>也就是，当执行插入、更新、删除操作，需要先对表加上「意向独占锁」，然后对该记录加独占锁。而普通的 select 是不会加行级锁的，普通的 select 语句是利用 MVCC 实现一致性读，是无锁的。</p><p>意向共享锁和意向独占锁是表级锁，不会和行级的共享锁和独占锁发生冲突，而且意向锁之间也不会发生冲突，只会和共享表锁（*lock tables ... read*）和独占表锁（*lock tables ... write*）发生冲突。</p>',20)),(0,a.bF)(e,{color:"red"},{default:(0,a.k6)((()=>s[0]||(s[0]=[(0,a.eW)("**意向锁的目的是为了快速判断表里是否有记录被加锁**。")]))),_:1}),s[2]||(s[2]=(0,a.Fv)('<h2 id="_4-auto-inc-锁" tabindex="-1"><a class="header-anchor" href="#_4-auto-inc-锁"><span>4.AUTO-INC 锁</span></a></h2><p>里的主键通常都会设置成自增的，这是通过对主键字段声明 <code>AUTO_INCREMENT</code> 属性实现的。</p><p>之后可以在插入数据时，可以不指定主键的值，数据库会自动给主键赋值递增的值，这主要是通过 <strong>AUTO-INC 锁</strong>实现的。</p><p>AUTO-INC 锁是特殊的表锁机制，锁<strong>不是再一个事务提交后才释放，而是再执行完插入语句后就会立即释放</strong>。</p><p><strong>在插入数据时，会加一个表级别的 AUTO-INC 锁</strong>，然后为被 <code>AUTO_INCREMENT</code> 修饰的字段赋值递增的值，等插入语句执行完成后，才会把 AUTO-INC 锁释放掉。</p><p>那么，一个事务在持有 AUTO-INC 锁的过程中，其他事务的如果要向该表插入语句都会被阻塞，从而保证插入数据时，被 <code>AUTO_INCREMENT</code> 修饰的字段的值是连续递增的。</p><p>但是， AUTO-INC 锁再对大量数据进行插入的时候，会影响插入性能，因为另一个事务中的插入会被阻塞。</p><h1 id="行级锁" tabindex="-1"><a class="header-anchor" href="#行级锁"><span>行级锁</span></a></h1><h2 id="记录锁record-lock" tabindex="-1"><a class="header-anchor" href="#记录锁record-lock"><span>记录锁record lock</span></a></h2><h2 id="间隙锁gap-lock" tabindex="-1"><a class="header-anchor" href="#间隙锁gap-lock"><span>间隙锁gap lock</span></a></h2><h2 id="next-key-lock" tabindex="-1"><a class="header-anchor" href="#next-key-lock"><span>next-key lock</span></a></h2><h2 id="插入意向锁" tabindex="-1"><a class="header-anchor" href="#插入意向锁"><span>插入意向锁</span></a></h2><p>一个事务在插入一条记录的时候，需要判断插入位置是否已被其他事务加了间隙锁（next-key lock 也包含间隙锁）。如果有的话，插入操作就会发生<strong>阻塞</strong>，直到拥有间隙锁的那个事务提交为止（释放间隙锁的时刻），在此期间会生成一个<strong>插入意向锁</strong>，表明有事务想在某个区间插入新记录，但是现在处于等待状态。</p>',13))])}]]),l=JSON.parse('{"path":"/%E6%95%B0%E6%8D%AE%E5%BA%93/mysql/%E9%94%81.html","title":"概览","lang":"zh-CN","frontmatter":{"description":"概览 imgimg 全局锁 示例: 用途: 全库备份,期间不允许数据修改 表级别锁 1.表锁 2.元数据锁 再来说说元数据锁（MDL）。 我们不需要显示的使用 MDL，因为当我们对数据库表进行操作时，会自动给这个表加上 MDL： 对一张表进行 CRUD 操作时，加的是 MDL 读锁； 对一张表做结构变更操作的时候，加的是 MDL 写锁； MDL 是为了...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E6%95%B0%E6%8D%AE%E5%BA%93/mysql/%E9%94%81.html"}],["meta",{"property":"og:site_name","content":"ntom"}],["meta",{"property":"og:title","content":"概览"}],["meta",{"property":"og:description","content":"概览 imgimg 全局锁 示例: 用途: 全库备份,期间不允许数据修改 表级别锁 1.表锁 2.元数据锁 再来说说元数据锁（MDL）。 我们不需要显示的使用 MDL，因为当我们对数据库表进行操作时，会自动给这个表加上 MDL： 对一张表进行 CRUD 操作时，加的是 MDL 读锁； 对一张表做结构变更操作的时候，加的是 MDL 写锁； MDL 是为了..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.xiaolincoding.com//mysql/other/1e37f6994ef44714aba03b8046b1ace2.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-23T14:28:54.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-23T14:28:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"概览\\",\\"image\\":[\\"https://cdn.xiaolincoding.com//mysql/other/1e37f6994ef44714aba03b8046b1ace2.png\\"],\\"dateModified\\":\\"2024-12-23T14:28:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"notm\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"1.表锁","slug":"_1-表锁","link":"#_1-表锁","children":[]},{"level":2,"title":"2.元数据锁","slug":"_2-元数据锁","link":"#_2-元数据锁","children":[]},{"level":2,"title":"3.意向锁","slug":"_3-意向锁","link":"#_3-意向锁","children":[]},{"level":2,"title":"4.AUTO-INC 锁","slug":"_4-auto-inc-锁","link":"#_4-auto-inc-锁","children":[]},{"level":2,"title":"记录锁record lock","slug":"记录锁record-lock","link":"#记录锁record-lock","children":[]},{"level":2,"title":"间隙锁gap lock","slug":"间隙锁gap-lock","link":"#间隙锁gap-lock","children":[]},{"level":2,"title":"next-key lock","slug":"next-key-lock","link":"#next-key-lock","children":[]},{"level":2,"title":"插入意向锁","slug":"插入意向锁","link":"#插入意向锁","children":[]}],"git":{"createdTime":1734964134000,"updatedTime":1734964134000,"contributors":[{"name":"Yang Yang","username":"Yang Yang","email":"yangyang@YangdeMacBook-Air.local","commits":1,"url":"https://github.com/Yang Yang"}]},"readingTime":{"minutes":3.13,"words":938},"filePathRelative":"数据库/mysql/锁.md","localizedDate":"2024年12月23日","autoDesc":true}')},6262:(i,s)=>{s.A=(i,s)=>{const e=i.__vccOpts||i;for(const[i,a]of s)e[i]=a;return e}}}]);