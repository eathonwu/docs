- 目录挂载

  ```sql
  rclone mount aliyun_webdav:/  /root/emby/data/my_alist --cache-dir /tmp --allow-other --vfs-cache-mode writes --header "Referer:https://www.aliyundrive.com/drive"  --allow-non-empty --daemon
  ```



emby启动

```
docker run -d   --name=emby   -e PUID=0   -e PGID=0   -e TZ=Etc/UTC   -p 8096:8096   -p 8920:8920 `#optional`   -v //root/emby/config:/config   -v /root/emby/data:/data/movies   --restart unless-stopped   lscr.io/linuxserver/emby:latest
```

日志查看

```
docker logs -f --tail 0 
```



 nginx 启动:

```shell
docker run -d --name nginx -p 80:80 -v /root/emby/nginx/nginx.conf:/etc/nginx/nginx.conf -v /root/emby/nginx/conf.d:/etc/nginx/conf.d  nginx:alpine
	
	
	
embyMountPath 	/data/movies
```











查看日志:

```shell
 docker logs -f --tail 0 
```

