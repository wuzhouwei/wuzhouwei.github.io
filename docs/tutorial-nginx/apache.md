---
id: apache
title: apache配置
tags:
  - apache配置 
description: 这是一个关于apache的配置说明。
keywords: [apache, apache执行, apache说明方法]
---
----

## 下载

```
yum -y install httpd
```

```
cd /var/www
```

## 创建文件夹

```
mkdir + 文件夹
```

## 给文件权限

```
chmod 777 wzw/
```

## 进入配置文件

```
vim /etc/httpd/conf/httpd.conf
```

## 需要其他端口显示示例

```
Listen 7002（便于不同目录的web页面显示）

NameVirtualHost *:3001
<VirtualHost *:3001>
  ServerName localhost:3001
  DocumentRoot "/var/www/nodedome" //文件夹目录位置
</VirtualHost>

```

## 重新启动
systemctl restart httpd