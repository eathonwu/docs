---
title: zab
date: 2024-12-09T22:39:39+08:00
lastmod: 2024-12-09T22:39:39+08:00
author: notmtop
# avatar: /img/author.jpg
# authorlink: https://author.site
#cover: /img/cover.jpg
# images:
#   - /img/cover.jpg
categories:
  - 分布式
tags:
  - 分布式
  - zab
# nolastmod: true
#draft: true
---





# ZAB( ZooKeeper Atomic Broadcast , ZooKeeper 原子消息广播协议)协议包括两种基本的模 式:崩溃恢复和消息广播

**1.**崩溃恢复:主要就是 **Leader** 选举过程 

2.**数据同步:**Leader** 服务器与其他服务器进行数据同步

**3.**消息广播:**Leader** 服务器将数据发送给其他服务器