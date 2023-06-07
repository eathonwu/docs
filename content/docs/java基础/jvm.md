# 类加载机制







# GC策略

- 对象优先分配在eden区

- 大对象直接分配在老年代

- 长期存活的对象分配在老年代

  - 进入survior 区 或者survior 每经历一次minor gc 年龄+1
  - 累计年龄的对象数超过50%
  - 默认年龄阈值15, cms默认6
  - 取累计年龄和默认年龄的最小值

  

## GC分类

partial GC:

- Young GC (Minor GC), 只收集young gen代的GC
- Old GC ,只收集Old gen的GC
- MixedGC 手机young gen和old gen 的GC, 只有G1支持这种模式

Full GC:

- 收集整个堆的数据,young gen、old gen、perm gen 

<font color=red>major gc 和full gc等价, 概念混乱,也有major gc和old gc等价的说法</font>,





## 引用类型

- 强引用(Strong Reference)

- 弱引用(Weak Reference)

  不管当前内存空间足够与否，都会回收它的内存,比Soft Reference 拥有更短的生命周期

- 软引用(Soft Reference)

  内存空间不足时,进行回收

- 虚引用(Phantom Reference)

  虚引用并不会决定对象的生命周期。如果一个对象仅持有虚引用，那么它就和没有任何引用一样，在任何时候都可能被垃圾回收

# 常量池

字符串常量池位于堆中

运行时常量池位于方法区(元空间)



## 如何判断一个类是无用的类

- 对象无引用
- class 对象无引用, 无法通过反射生成对象实例
- classloader 无引用

# 垃圾回收算法

- 标记清除

- 标记整理

  老年代采用的回收算法

- 标记复制

  新生代常采用算法, 分配担保

- 分代收集

# 垃圾收集器

![img](https://ask.qcloudimg.com/http-save/7851499/6eb59f5de3e722e59bf247b2ec1a01ed.jpeg?imageView2/2/w/1620)

- serial 收集器

​			stop the world

- ParNew收集器

​		ParNew 收集器其实就是 Serial 收集器的多线程版本，除了使用多线程进行垃圾收集外，其余行为（控制参数、收集算法、回收策略等等）和 Serial 收集器完全一样。

1. 新生代采用标记-复制算法，
2. 老年代采用标记-整理算法

 ![ParNew 收集器 ](https://javaguide.cn/assets/22018368.df835851.png)

- Parallel Scanvage

1. 使用标记-复制算法的多线程收集
2. 提供系统的吞吐量, 提高系统cpu使用率
3. JDK1.8 默认使用的是 Parallel Scavenge + Parallel Old
4. 新生代采用标记-复制算法，老年代采用标记-整理算法



- serial old收集器

1. serial收集器的老年代版本
2.  一种用途是在 JDK1.5 以及以前的版本中与 Parallel Scavenge 收集器搭配使用
3. 另一种用途是作为 CMS 收集器的后备方案

parallel old

1. parallel scanvatge的老年代版本
2. 标记整理
3. 和paralle scanvage 搭配使用 ,ps/po

- cms收集器

1. concurrent mark swap 并发标记清除

2. <font color=red>无法清除浮动垃圾</font>

3. 标记清除算法,会产生大量空间碎片

4. 过程

   和redis 增量同步方式相同

   - 初始标记

   - 并发标记

   - 重新标记

   - 并发清楚

- G1收集器

1. G1 从整体来看是基于“标记-整理”算法实现的收集器；从局部上来看是基于“标记-复制”算法实现的
2. 过程
   - 初始标记
   - 并发标记
   - 最终标记
   - 筛选回收

- ZGC 

​	标记-复制的垃圾收集器













