---
id: nginx
title: nginx配置 
tags:
 - nginx配置
description: 这是一个关于nginx的配置说明。
keywords: [nginx, nginx执行, nginx说明方法, nginx配置案例]
---
 
----

## 1.准备目录

```
[root@instance-3lm099to ~]# mkdir /usr/local/nginx
[root@instance-3lm099to ~]# cd /usr/local/nginx/
```

## 2.下载

从<http://nginx.org/download/>上下载相应的版本(或者直接在**wget http://nginx.org/download/nginx-1.17.6.tar.gz** Linux上用命令下载)

## 3.解压

解压 tar -zxvf nginx-1.17.6.tar.gz

解压好后移至目录

```
[root@instance-3lm099to nginx]# cd nginx-1.17.6/
```

**二选一**
>设置Nginx安装路径，如果没有指定，默认为/usr/local/nginx

```
[root@instance-3lm099to nginx-1.17.6]# ./configure --prefix=/usr/local/nginx
checking for OS
 + Linux 3.10.0-862.3.2.el7.x86_64 x86_64
checking for C compiler ... not found
```
>需要安装ssl 的用下面这个避免后期繁琐

```
[root@instance-3lm099to nginx-1.17.6]# ./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module

```

如果出现checking for C compiler ... not found错误，需要执行下

```
[root@instance-3lm099to nginx-1.17.6]# yum -y install gcc gcc-c++ autoconf automake make
```

再次执行

```
[root@instance-3lm099to nginx-1.17.6]# ./configure --prefix=/usr/local/nginx
```

可能会出现这个错误

```
./configure: error: the HTTP rewrite module requires the PCRE library.
You can either disable the module by using --without-http_rewrite_module
option, or install the PCRE library into the system, or build the PCRE library
statically from the source with nginx by using --with-pcre=<path> option.
```

如果出现了，就执行下这个

```
[root@instance-3lm099to nginx-1.17.6]# yum -y install openssl openssl-devel
```

## 4.编译

```
[root@instance-3lm099to nginx-1.17.6]# make
```

## 5.安装

```
[root@instance-3lm099to nginx-1.17.6]# make install
```

## 6.启动

```
[root@instance-3lm099to nginx-1.17.6]# /usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
```

## 7.停止

停止操作是通过向nginx进程发送信号（什么是信号请参阅linux文 章）来进行的

### 查询nginx主进程号

```
ps -ef | grep nginx
```

在进程列表里 面找master进程，它的编号就是主进程号了。

### 发送信号

#### 从容停止Nginx

```
kill -QUIT 主进程号
```

#### 快速停止Nginx

```
kill -TERM 主进程号
```

#### 强制停止Nginx

```
pkill -9 nginx
```

另外， 若在nginx.conf配置了pid文件存放路径则该文件存放的就是Nginx主进程号，如果没指定则放在nginx的logs目录下。有了pid文 件，我们就不用先查询Nginx的主进程号，而直接向Nginx发送信号了，命令如下：
kill -信号类型 '/usr/nginx/logs/nginx.pid'

## 平滑重启

如果更改了配置就要重启Nginx，要先关闭Nginx再打开？不是的，可以向Nginx 发送信号，平滑重启。 平滑重启命令： kill -HUP 主进程号或进程号文件路径

或者使用

/usr/local/nginx/sbin/nginx -s reload

注意，修改了配置文件后最好先检查一下修改过的配置文件是否正 确，以免重启后Nginx出现错误影响服务器稳定运行。

## 判断Nginx配置是否正确命令

nginx -t -c /usr/nginx/conf/nginx.conf

或者

/usr/nginx/sbin/nginx -t

**注解**

```
 # 每一个server相当于一个代理服务器
 74   server {
 75   # 监听端口，默认80
 76   listen 8848;
 77   # 当前服务的域名，可以有多个，用空格分隔(我们是本地所以是localhost)  www.kolbe.cn
 78   server_name localhost;
 79   #server_name _;
 80   access_log /data/wwwlogs/access_nginx.log combined;
 81   root /data/wwwroot/default;
 82   # 当没有指定主页时，默认会选择这个指定的文件，可多个，空格分隔
 83   index index.html index.htm index.php;
 84   # 表示匹配的路径，这时配置了/表示所有请求都被匹配到这里
 85   location / {
 86       # 请求转向自定义的服务器列表
 87       proxy_pass http://myServer;
 88   }
 89   location /nginx_status {
 90     stub_status on;
 91     access_log off;
 92     allow 127.0.0.1;
 93     deny all;
 94     }
 95   location ~ [^/]\.php(/|$) {
 96     #fastcgi_pass remote_php_ip:9000;
 97     fastcgi_pass unix:/dev/shm/php-cgi.sock;
 98     fastcgi_index index.php;
 99     include fastcgi.conf;
100     }
101   location ~ .*\.(gif|jpg|jpeg|png|bmp|swf|flv|mp4|ico)$ {
102     expires 30d;
103     access_log off;
104     }
105   location ~ .*\.(js|css)?$ {
106     expires 7d;
107     access_log off;
108     }
109   location ~ /\.ht {
110     deny all;
111     }
112   }
```

重启:

/usr/local/nginx/sbin/nginx -s reload

启动:

/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf


## nginx.conf 配置案例

```
http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;
    #gzip  on;
    proxy_buffer_size 128k;
    proxy_buffers 4 256k;
    proxy_busy_buffers_size 256k;
    
    server {
        listen       80;
        server_name  xxx.com www.xxx.com;
	    return 301 https://$server_name$request_uri;
        #rewrite ^(.*) https://$server_name$1 permanent;
        #rewrite ^(.*)$ https://${server_name}$1 permanent;
        #charset koi8-r;

        #access_log  logs/host.access.log  main;
      
        #用于tomcat反向代理,解决nginx 504错误 

        #ps:以timeout结尾配置项时间要配置大点
    }

    server {
        listen       8000;
        server_name  localhost;

        location / {
                root   /var/www/web_demo/;
                index  index.html index.htm;
               #proxy_pass https://cdn.zjxw.fun/;
          }
        location /api/ {
           proxy_pass http://127.0.0.1:8001/; //代理后台接口
          }
	
    }
    server {
      listen 80;
      server_name www.xxx.com;
     
      location / {
        proxy_set_header X-Real_IP $remote_addr;
        proxy_set_header X-Forward-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-Nginx-Proxy true;
        proxy_pass http://localhost:8002;
        proxy_redirect off;
       }
      }
  
     server {
       listen 443 ssl;   #SSL协议访问端口号为443。此处如未添加ssl，可能会造成Nginx无法启动。
       server_name zjxw.fun  www.zjxw.fun;  #将localhost修改为您证书绑定的域名，例如：www.example.com。
       root  /var/www/ng/;
       index index.html index.htm;
       ssl_certificate cert/cert.pem;   #将domain name.pem替换成您证书的文件名。
       ssl_certificate_key cert/cert.key;   #将domain name.key替换成您证书的密钥文件名。
       ssl_session_timeout 5m;
       ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;  #使用此加密套件。
       ssl_protocols TLSv1 TLSv1.1 TLSv1.2;   #使用该协议进行配置。
       ssl_prefer_server_ciphers on;   

        location /api/ {
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Host $http_host;
            proxy_set_header X-NginX-Proxy true;
            proxy_pass http://127.0.0.1:8002/;
        }

     }

}

```


## 8.卸载nginx

### 查看nginx相关文件
```
[root@instance-3lm099to nginx]# whereis nginx
```

### 查找nginx相关文件
```
[root@instance-3lm099to nginx]# find / -name nginx
```

### 删除nginx相关文件

```
[root@instance-3lm099to nginx]# rm -rf [上面查找到相关到nginx文件]
```
### 使用yum清理nginx相关文件

```
[root@instance-3lm099to nginx]# yum remove nginx
```