"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[1400],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return x}});var r=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var p=r.createContext({}),s=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},c=function(n){var e=s(n.components);return r.createElement(p.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,p=n.parentName,c=a(n,["components","mdxType","originalType","parentName"]),g=s(t),x=i,d=g["".concat(p,".").concat(x)]||g[x]||u[x]||o;return t?r.createElement(d,l(l({ref:e},c),{},{components:t})):r.createElement(d,l({ref:e},c))}));function x(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,l=new Array(o);l[0]=g;var a={};for(var p in e)hasOwnProperty.call(e,p)&&(a[p]=e[p]);a.originalType=n,a.mdxType="string"==typeof n?n:i,l[1]=a;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8866:function(n,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return x},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),l=["components"],a={id:"nginx",title:"nginx\u914d\u7f6e",tags:["nginx\u914d\u7f6e"],description:"\u8fd9\u662f\u4e00\u4e2a\u5173\u4e8enginx\u7684\u914d\u7f6e\u8bf4\u660e\u3002",keywords:["nginx","nginx\u6267\u884c","nginx\u8bf4\u660e\u65b9\u6cd5","nginx\u914d\u7f6e\u6848\u4f8b"]},p=void 0,s={unversionedId:"tutorial-nginx/nginx",id:"tutorial-nginx/nginx",title:"nginx\u914d\u7f6e",description:"\u8fd9\u662f\u4e00\u4e2a\u5173\u4e8enginx\u7684\u914d\u7f6e\u8bf4\u660e\u3002",source:"@site/docs/tutorial-nginx/nginx.md",sourceDirName:"tutorial-nginx",slug:"/tutorial-nginx/nginx",permalink:"/docs/tutorial-nginx/nginx",tags:[{label:"nginx\u914d\u7f6e",permalink:"/docs/tags/nginx\u914d\u7f6e"}],version:"current",frontMatter:{id:"nginx",title:"nginx\u914d\u7f6e",tags:["nginx\u914d\u7f6e"],description:"\u8fd9\u662f\u4e00\u4e2a\u5173\u4e8enginx\u7684\u914d\u7f6e\u8bf4\u660e\u3002",keywords:["nginx","nginx\u6267\u884c","nginx\u8bf4\u660e\u65b9\u6cd5","nginx\u914d\u7f6e\u6848\u4f8b"]},sidebar:"tutorialSidebar",previous:{title:"http\u54cd\u5e94\u7801",permalink:"/docs/tutorial-zwzj/zwzj_http_respond"},next:{title:"apache\u914d\u7f6e",permalink:"/docs/tutorial-nginx/apache"}},c={},u=[{value:"1.\u51c6\u5907\u76ee\u5f55",id:"1\u51c6\u5907\u76ee\u5f55",level:2},{value:"2.\u4e0b\u8f7d",id:"2\u4e0b\u8f7d",level:2},{value:"3.\u89e3\u538b",id:"3\u89e3\u538b",level:2},{value:"4.\u7f16\u8bd1",id:"4\u7f16\u8bd1",level:2},{value:"5.\u5b89\u88c5",id:"5\u5b89\u88c5",level:2},{value:"6.\u542f\u52a8",id:"6\u542f\u52a8",level:2},{value:"7.\u505c\u6b62",id:"7\u505c\u6b62",level:2},{value:"\u67e5\u8be2nginx\u4e3b\u8fdb\u7a0b\u53f7",id:"\u67e5\u8be2nginx\u4e3b\u8fdb\u7a0b\u53f7",level:3},{value:"\u53d1\u9001\u4fe1\u53f7",id:"\u53d1\u9001\u4fe1\u53f7",level:3},{value:"\u4ece\u5bb9\u505c\u6b62Nginx",id:"\u4ece\u5bb9\u505c\u6b62nginx",level:4},{value:"\u5feb\u901f\u505c\u6b62Nginx",id:"\u5feb\u901f\u505c\u6b62nginx",level:4},{value:"\u5f3a\u5236\u505c\u6b62Nginx",id:"\u5f3a\u5236\u505c\u6b62nginx",level:4},{value:"\u5e73\u6ed1\u91cd\u542f",id:"\u5e73\u6ed1\u91cd\u542f",level:2},{value:"\u5224\u65adNginx\u914d\u7f6e\u662f\u5426\u6b63\u786e\u547d\u4ee4",id:"\u5224\u65adnginx\u914d\u7f6e\u662f\u5426\u6b63\u786e\u547d\u4ee4",level:2},{value:"nginx.conf \u914d\u7f6e\u6848\u4f8b",id:"nginxconf-\u914d\u7f6e\u6848\u4f8b",level:2},{value:"8.\u5378\u8f7dnginx",id:"8\u5378\u8f7dnginx",level:2},{value:"\u67e5\u770bnginx\u76f8\u5173\u6587\u4ef6",id:"\u67e5\u770bnginx\u76f8\u5173\u6587\u4ef6",level:3},{value:"\u67e5\u627enginx\u76f8\u5173\u6587\u4ef6",id:"\u67e5\u627enginx\u76f8\u5173\u6587\u4ef6",level:3},{value:"\u5220\u9664nginx\u76f8\u5173\u6587\u4ef6",id:"\u5220\u9664nginx\u76f8\u5173\u6587\u4ef6",level:3},{value:"\u4f7f\u7528yum\u6e05\u7406nginx\u76f8\u5173\u6587\u4ef6",id:"\u4f7f\u7528yum\u6e05\u7406nginx\u76f8\u5173\u6587\u4ef6",level:3}],g={toc:u};function x(n){var e=n.components,t=(0,i.Z)(n,l);return(0,o.kt)("wrapper",(0,r.Z)({},g,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"1\u51c6\u5907\u76ee\u5f55"},"1.\u51c6\u5907\u76ee\u5f55"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[root@instance-3lm099to ~]# mkdir /usr/local/nginx\n[root@instance-3lm099to ~]# cd /usr/local/nginx/\n")),(0,o.kt)("h2",{id:"2\u4e0b\u8f7d"},"2.\u4e0b\u8f7d"),(0,o.kt)("p",null,"\u4ece",(0,o.kt)("a",{parentName:"p",href:"http://nginx.org/download/"},"http://nginx.org/download/"),"\u4e0a\u4e0b\u8f7d\u76f8\u5e94\u7684\u7248\u672c(\u6216\u8005\u76f4\u63a5\u5728",(0,o.kt)("strong",{parentName:"p"},"wget ",(0,o.kt)("a",{parentName:"strong",href:"http://nginx.org/download/nginx-1.17.6.tar.gz"},"http://nginx.org/download/nginx-1.17.6.tar.gz"))," Linux\u4e0a\u7528\u547d\u4ee4\u4e0b\u8f7d)"),(0,o.kt)("h2",{id:"3\u89e3\u538b"},"3.\u89e3\u538b"),(0,o.kt)("p",null,"\u89e3\u538b tar -zxvf nginx-1.17.6.tar.gz"),(0,o.kt)("p",null,"\u89e3\u538b\u597d\u540e\u79fb\u81f3\u76ee\u5f55"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[root@instance-3lm099to nginx]# cd nginx-1.17.6/\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u4e8c\u9009\u4e00")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8bbe\u7f6eNginx\u5b89\u88c5\u8def\u5f84\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a\uff0c\u9ed8\u8ba4\u4e3a/usr/local/nginx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[root@instance-3lm099to nginx-1.17.6]# ./configure --prefix=/usr/local/nginx\nchecking for OS\n + Linux 3.10.0-862.3.2.el7.x86_64 x86_64\nchecking for C compiler ... not found\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u5b89\u88c5ssl \u7684\u7528\u4e0b\u9762\u8fd9\u4e2a\u907f\u514d\u540e\u671f\u7e41\u7410")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[root@instance-3lm099to nginx-1.17.6]# ./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module\n\n")),(0,o.kt)("p",null,"\u5982\u679c\u51fa\u73b0checking for C compiler ... not found\u9519\u8bef\uff0c\u9700\u8981\u6267\u884c\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[root@instance-3lm099to nginx-1.17.6]# yum -y install gcc gcc-c++ autoconf automake make\n")),(0,o.kt)("p",null,"\u518d\u6b21\u6267\u884c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[root@instance-3lm099to nginx-1.17.6]# ./configure --prefix=/usr/local/nginx\n")),(0,o.kt)("p",null,"\u53ef\u80fd\u4f1a\u51fa\u73b0\u8fd9\u4e2a\u9519\u8bef"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./configure: error: the HTTP rewrite module requires the PCRE library.\nYou can either disable the module by using --without-http_rewrite_module\noption, or install the PCRE library into the system, or build the PCRE library\nstatically from the source with nginx by using --with-pcre=<path> option.\n")),(0,o.kt)("p",null,"\u5982\u679c\u51fa\u73b0\u4e86\uff0c\u5c31\u6267\u884c\u4e0b\u8fd9\u4e2a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[root@instance-3lm099to nginx-1.17.6]# yum -y install openssl openssl-devel\n")),(0,o.kt)("h2",{id:"4\u7f16\u8bd1"},"4.\u7f16\u8bd1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[root@instance-3lm099to nginx-1.17.6]# make\n")),(0,o.kt)("h2",{id:"5\u5b89\u88c5"},"5.\u5b89\u88c5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[root@instance-3lm099to nginx-1.17.6]# make install\n")),(0,o.kt)("h2",{id:"6\u542f\u52a8"},"6.\u542f\u52a8"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[root@instance-3lm099to nginx-1.17.6]# /usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf\n")),(0,o.kt)("h2",{id:"7\u505c\u6b62"},"7.\u505c\u6b62"),(0,o.kt)("p",null,"\u505c\u6b62\u64cd\u4f5c\u662f\u901a\u8fc7\u5411nginx\u8fdb\u7a0b\u53d1\u9001\u4fe1\u53f7\uff08\u4ec0\u4e48\u662f\u4fe1\u53f7\u8bf7\u53c2\u9605linux\u6587 \u7ae0\uff09\u6765\u8fdb\u884c\u7684"),(0,o.kt)("h3",{id:"\u67e5\u8be2nginx\u4e3b\u8fdb\u7a0b\u53f7"},"\u67e5\u8be2nginx\u4e3b\u8fdb\u7a0b\u53f7"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ps -ef | grep nginx\n")),(0,o.kt)("p",null,"\u5728\u8fdb\u7a0b\u5217\u8868\u91cc \u9762\u627emaster\u8fdb\u7a0b\uff0c\u5b83\u7684\u7f16\u53f7\u5c31\u662f\u4e3b\u8fdb\u7a0b\u53f7\u4e86\u3002"),(0,o.kt)("h3",{id:"\u53d1\u9001\u4fe1\u53f7"},"\u53d1\u9001\u4fe1\u53f7"),(0,o.kt)("h4",{id:"\u4ece\u5bb9\u505c\u6b62nginx"},"\u4ece\u5bb9\u505c\u6b62Nginx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kill -QUIT \u4e3b\u8fdb\u7a0b\u53f7\n")),(0,o.kt)("h4",{id:"\u5feb\u901f\u505c\u6b62nginx"},"\u5feb\u901f\u505c\u6b62Nginx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kill -TERM \u4e3b\u8fdb\u7a0b\u53f7\n")),(0,o.kt)("h4",{id:"\u5f3a\u5236\u505c\u6b62nginx"},"\u5f3a\u5236\u505c\u6b62Nginx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pkill -9 nginx\n")),(0,o.kt)("p",null,"\u53e6\u5916\uff0c \u82e5\u5728nginx.conf\u914d\u7f6e\u4e86pid\u6587\u4ef6\u5b58\u653e\u8def\u5f84\u5219\u8be5\u6587\u4ef6\u5b58\u653e\u7684\u5c31\u662fNginx\u4e3b\u8fdb\u7a0b\u53f7\uff0c\u5982\u679c\u6ca1\u6307\u5b9a\u5219\u653e\u5728nginx\u7684logs\u76ee\u5f55\u4e0b\u3002\u6709\u4e86pid\u6587 \u4ef6\uff0c\u6211\u4eec\u5c31\u4e0d\u7528\u5148\u67e5\u8be2Nginx\u7684\u4e3b\u8fdb\u7a0b\u53f7\uff0c\u800c\u76f4\u63a5\u5411Nginx\u53d1\u9001\u4fe1\u53f7\u4e86\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a\nkill -\u4fe1\u53f7\u7c7b\u578b '/usr/nginx/logs/nginx.pid'"),(0,o.kt)("h2",{id:"\u5e73\u6ed1\u91cd\u542f"},"\u5e73\u6ed1\u91cd\u542f"),(0,o.kt)("p",null,"\u5982\u679c\u66f4\u6539\u4e86\u914d\u7f6e\u5c31\u8981\u91cd\u542fNginx\uff0c\u8981\u5148\u5173\u95edNginx\u518d\u6253\u5f00\uff1f\u4e0d\u662f\u7684\uff0c\u53ef\u4ee5\u5411Nginx \u53d1\u9001\u4fe1\u53f7\uff0c\u5e73\u6ed1\u91cd\u542f\u3002 \u5e73\u6ed1\u91cd\u542f\u547d\u4ee4\uff1a kill -HUP \u4e3b\u8fdb\u7a0b\u53f7\u6216\u8fdb\u7a0b\u53f7\u6587\u4ef6\u8def\u5f84"),(0,o.kt)("p",null,"\u6216\u8005\u4f7f\u7528"),(0,o.kt)("p",null,"/usr/local/nginx/sbin/nginx -s reload"),(0,o.kt)("p",null,"\u6ce8\u610f\uff0c\u4fee\u6539\u4e86\u914d\u7f6e\u6587\u4ef6\u540e\u6700\u597d\u5148\u68c0\u67e5\u4e00\u4e0b\u4fee\u6539\u8fc7\u7684\u914d\u7f6e\u6587\u4ef6\u662f\u5426\u6b63 \u786e\uff0c\u4ee5\u514d\u91cd\u542f\u540eNginx\u51fa\u73b0\u9519\u8bef\u5f71\u54cd\u670d\u52a1\u5668\u7a33\u5b9a\u8fd0\u884c\u3002"),(0,o.kt)("h2",{id:"\u5224\u65adnginx\u914d\u7f6e\u662f\u5426\u6b63\u786e\u547d\u4ee4"},"\u5224\u65adNginx\u914d\u7f6e\u662f\u5426\u6b63\u786e\u547d\u4ee4"),(0,o.kt)("p",null,"nginx -t -c /usr/nginx/conf/nginx.conf"),(0,o.kt)("p",null,"\u6216\u8005"),(0,o.kt)("p",null,"/usr/nginx/sbin/nginx -t"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u89e3")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," # \u6bcf\u4e00\u4e2aserver\u76f8\u5f53\u4e8e\u4e00\u4e2a\u4ee3\u7406\u670d\u52a1\u5668\n 74   server {\n 75   # \u76d1\u542c\u7aef\u53e3\uff0c\u9ed8\u8ba480\n 76   listen 8848;\n 77   # \u5f53\u524d\u670d\u52a1\u7684\u57df\u540d\uff0c\u53ef\u4ee5\u6709\u591a\u4e2a\uff0c\u7528\u7a7a\u683c\u5206\u9694(\u6211\u4eec\u662f\u672c\u5730\u6240\u4ee5\u662flocalhost)  www.kolbe.cn\n 78   server_name localhost;\n 79   #server_name _;\n 80   access_log /data/wwwlogs/access_nginx.log combined;\n 81   root /data/wwwroot/default;\n 82   # \u5f53\u6ca1\u6709\u6307\u5b9a\u4e3b\u9875\u65f6\uff0c\u9ed8\u8ba4\u4f1a\u9009\u62e9\u8fd9\u4e2a\u6307\u5b9a\u7684\u6587\u4ef6\uff0c\u53ef\u591a\u4e2a\uff0c\u7a7a\u683c\u5206\u9694\n 83   index index.html index.htm index.php;\n 84   # \u8868\u793a\u5339\u914d\u7684\u8def\u5f84\uff0c\u8fd9\u65f6\u914d\u7f6e\u4e86/\u8868\u793a\u6240\u6709\u8bf7\u6c42\u90fd\u88ab\u5339\u914d\u5230\u8fd9\u91cc\n 85   location / {\n 86       # \u8bf7\u6c42\u8f6c\u5411\u81ea\u5b9a\u4e49\u7684\u670d\u52a1\u5668\u5217\u8868\n 87       proxy_pass http://myServer;\n 88   }\n 89   location /nginx_status {\n 90     stub_status on;\n 91     access_log off;\n 92     allow 127.0.0.1;\n 93     deny all;\n 94     }\n 95   location ~ [^/]\\.php(/|$) {\n 96     #fastcgi_pass remote_php_ip:9000;\n 97     fastcgi_pass unix:/dev/shm/php-cgi.sock;\n 98     fastcgi_index index.php;\n 99     include fastcgi.conf;\n100     }\n101   location ~ .*\\.(gif|jpg|jpeg|png|bmp|swf|flv|mp4|ico)$ {\n102     expires 30d;\n103     access_log off;\n104     }\n105   location ~ .*\\.(js|css)?$ {\n106     expires 7d;\n107     access_log off;\n108     }\n109   location ~ /\\.ht {\n110     deny all;\n111     }\n112   }\n")),(0,o.kt)("p",null,"\u91cd\u542f:"),(0,o.kt)("p",null,"/usr/local/nginx/sbin/nginx -s reload"),(0,o.kt)("p",null,"\u542f\u52a8:"),(0,o.kt)("p",null,"/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf"),(0,o.kt)("h2",{id:"nginxconf-\u914d\u7f6e\u6848\u4f8b"},"nginx.conf \u914d\u7f6e\u6848\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'http {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    #log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n    #                  \'$status $body_bytes_sent "$http_referer" \'\n    #                  \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    #access_log  logs/access.log  main;\n\n    sendfile        on;\n    #tcp_nopush     on;\n\n    keepalive_timeout  65;\n    #gzip  on;\n    proxy_buffer_size 128k;\n    proxy_buffers 4 256k;\n    proxy_busy_buffers_size 256k;\n    \n    server {\n        listen       80;\n        server_name  xxx.com www.xxx.com;\n        return 301 https://$server_name$request_uri;\n        #rewrite ^(.*) https://$server_name$1 permanent;\n        #rewrite ^(.*)$ https://${server_name}$1 permanent;\n        #charset koi8-r;\n\n        #access_log  logs/host.access.log  main;\n      \n        #\u7528\u4e8etomcat\u53cd\u5411\u4ee3\u7406,\u89e3\u51b3nginx 504\u9519\u8bef \n\n        #ps:\u4ee5timeout\u7ed3\u5c3e\u914d\u7f6e\u9879\u65f6\u95f4\u8981\u914d\u7f6e\u5927\u70b9\n    }\n\n    server {\n        listen       8000;\n        server_name  localhost;\n\n        location / {\n                root   /var/www/web_demo/;\n                index  index.html index.htm;\n               #proxy_pass https://cdn.zjxw.fun/;\n          }\n        location /api/ {\n           proxy_pass http://127.0.0.1:8001/; //\u4ee3\u7406\u540e\u53f0\u63a5\u53e3\n          }\n    \n    }\n    server {\n      listen 80;\n      server_name www.xxx.com;\n     \n      location / {\n        proxy_set_header X-Real_IP $remote_addr;\n        proxy_set_header X-Forward-For $proxy_add_x_forwarded_for;\n        proxy_set_header Host $http_host;\n        proxy_set_header X-Nginx-Proxy true;\n        proxy_pass http://localhost:8002;\n        proxy_redirect off;\n       }\n      }\n  \n     server {\n       listen 443 ssl;   #SSL\u534f\u8bae\u8bbf\u95ee\u7aef\u53e3\u53f7\u4e3a443\u3002\u6b64\u5904\u5982\u672a\u6dfb\u52a0ssl\uff0c\u53ef\u80fd\u4f1a\u9020\u6210Nginx\u65e0\u6cd5\u542f\u52a8\u3002\n       server_name zjxw.fun  www.zjxw.fun;  #\u5c06localhost\u4fee\u6539\u4e3a\u60a8\u8bc1\u4e66\u7ed1\u5b9a\u7684\u57df\u540d\uff0c\u4f8b\u5982\uff1awww.example.com\u3002\n       root  /var/www/ng/;\n       index index.html index.htm;\n       ssl_certificate cert/cert.pem;   #\u5c06domain name.pem\u66ff\u6362\u6210\u60a8\u8bc1\u4e66\u7684\u6587\u4ef6\u540d\u3002\n       ssl_certificate_key cert/cert.key;   #\u5c06domain name.key\u66ff\u6362\u6210\u60a8\u8bc1\u4e66\u7684\u5bc6\u94a5\u6587\u4ef6\u540d\u3002\n       ssl_session_timeout 5m;\n       ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;  #\u4f7f\u7528\u6b64\u52a0\u5bc6\u5957\u4ef6\u3002\n       ssl_protocols TLSv1 TLSv1.1 TLSv1.2;   #\u4f7f\u7528\u8be5\u534f\u8bae\u8fdb\u884c\u914d\u7f6e\u3002\n       ssl_prefer_server_ciphers on;   \n\n        location /api/ {\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_set_header Host $http_host;\n            proxy_set_header X-NginX-Proxy true;\n            proxy_pass http://127.0.0.1:8002/;\n        }\n\n     }\n\n}\n\n')),(0,o.kt)("h2",{id:"8\u5378\u8f7dnginx"},"8.\u5378\u8f7dnginx"),(0,o.kt)("h3",{id:"\u67e5\u770bnginx\u76f8\u5173\u6587\u4ef6"},"\u67e5\u770bnginx\u76f8\u5173\u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[root@instance-3lm099to nginx]# whereis nginx\n")),(0,o.kt)("h3",{id:"\u67e5\u627enginx\u76f8\u5173\u6587\u4ef6"},"\u67e5\u627enginx\u76f8\u5173\u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[root@instance-3lm099to nginx]# find / -name nginx\n")),(0,o.kt)("h3",{id:"\u5220\u9664nginx\u76f8\u5173\u6587\u4ef6"},"\u5220\u9664nginx\u76f8\u5173\u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[root@instance-3lm099to nginx]# rm -rf [\u4e0a\u9762\u67e5\u627e\u5230\u76f8\u5173\u5230nginx\u6587\u4ef6]\n")),(0,o.kt)("h3",{id:"\u4f7f\u7528yum\u6e05\u7406nginx\u76f8\u5173\u6587\u4ef6"},"\u4f7f\u7528yum\u6e05\u7406nginx\u76f8\u5173\u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[root@instance-3lm099to nginx]# yum remove nginx\n")))}x.isMDXComponent=!0}}]);