



负载均衡介入层



应用集群层



分布式服务层



资源层





qps 

redis 单机 10万qps

单个应用 

数据库8C 16G, 几千qps 左右 

单机数据库 -----> 分业务----------> 读写分离--------------> 分库分表





clickhouse 写入50万 qps





kakfa 使用Kafka 使用到了 `mmap` 和 `sendfile` 的方式来实现`零拷贝`。分别对应 Java 的 `MappedByteBuffer` 和 `FileChannel.transferTo`