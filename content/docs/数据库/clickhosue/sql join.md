clickhouse

常用操作

## join

所有的join 操作基本范式都是

​				table1 join table2 on table.xxx=table2.xxx 

​				 join table3 on table1.xxx=table3.xxx

​				 join table4 on table2.xxx=table4.xxx

不允许先查询 再进行join,错误查询示例

```sql
select * from table_a  where age=12

		(inner) join table_b  

	on table_a.id =table_b.id 
	left joni table_c on table a.id=table_c.id
  where table_a.name='xxxx" 
```



- ### (inner)join操作

![SQL INNER JOIN](http://c.biancheng.net/uploads/allimg/210824/092Z42610-0.gif)

​	内连接,去两个表on 交集

```sql
select * from table_a 

		(inner) join table_b  

	on table_a.id =table_b.id 

  where table_a.name=''xxxx" 
```

​	

- ### Left join 

  左边为空时,会导致不会查到任何数据

  ![SQL LEFT JOIN](http://c.biancheng.net/uploads/allimg/210824/093001K37-0.gif)

  左连接,取左表所有

  ```sql
  	select * from table_a 
  
  		left join table_b  
  
  	on table_a.id =table_b.id 
  
    where table_a.name=''xxxx" 
  ```

- ### right join

  ![SQL RIGHT JOIN](http://c.biancheng.net/uploads/allimg/210824/09330262M-0.gif)

  右表所有,加on条件左表

  ```
  select * from table_a 
  
  		right join table_b  
  
  	on table_a.id =table_b.id 
  
    where table_a.name=''xxxx" 
  ```

- full join



- self join

- cross join

  

## union all /union  distinct

基本语法

```sql
SELECT column1, column2 ...
FROM table1, table2
[WHERE condition1]

UNION / UNION ALL

SELECT column1, column2 ...
FROM table1, table2
[WHERE condition2]
```



- union distinct会对数据进行去重,(mysql中union 本身就具有去重逻辑)
- union all 直接将结果数据进行连接