NoSQL 数据库 Redis 和 Apache Cassandra、服务网格解决方案 Consul 等知名项目都用到了 Gossip 协议，学习 Gossip 协议有助于我们搞清很多技术的底层原理。

我们这里以 Redis Cluster 为例说明 Gossip 协议的实际应用。

我们经常使用的分布式缓存 Redis 的官方集群解决方案（3.0 版本引入） Redis Cluster 就是基于 Gossip 协议来实现集群中各个节点数据的最终一致性。

![img](https://javaguide.cn/assets/redis-cluster-gossip-acd10106.png)

有了 Redis Cluster 之后，不需要专门部署 Sentinel 集群服务了。Redis Cluster 相当于是内置了 Sentinel 机制，Redis Cluster 内部的各个 Redis 节点通过 Gossip 协议互相探测健康状态，在故障时可以自动切换。





著作权归Guide所有 原文链接：https://javaguide.cn/distributed-system/protocol/gossip-protocl.html#gossip-%E5%8D%8F%E8%AE%AE%E4%BB%8B%E7%BB%8D