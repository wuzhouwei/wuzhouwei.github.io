---
id: websocket
title: websocket
tags:
  - websocket
description: 这是一个关于websocket案例小demo。
keywords: [ websocket ]
---

----

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="服务端" >

```js title='node.js'
const express = require("express");
const expressWs = require("express-ws");

const app = express();
const PORT = process.env.PORT || 3333;

// 将 express-ws 中间件附加到应用
expressWs(app);

// 设置 Express 路由
app.get("/", (req, res) => {
  res.send("Express WebSocket server is running");
});

// 在路由中使用 WebSocket
app.ws("/", (ws, req) => {
  console.log("Client connected");

  // 监听消息事件
  ws.on("message", (message) => {
    console.log(`Received message: ${message}`);
    // 发送消息给客户端
    ws.send(`Server received: ${message}`);
  });

  // 监听关闭事件
  ws.on("close", () => {
    console.log("Client disconnected");
  });

});

// 启动 Express 服务器
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
```

  </TabItem>

  <TabItem value="hook" label="前端">

```typescript title='hook.ts'
import {useEffect, useState} from "react";
import {wsHost} from "@/config";

interface UseWs {
  send: (data: string) => void;
  socketMsg: any;
}

//const wsHost = "ws://localhost:3333"

export const useWs = (): UseWs => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [socketMsg, setSocketMsg] = useState<string>("");

  useEffect(() => {
    const ws = new WebSocket(wsHost);

    // 设置事件处理程序
    ws.onopen = () => {
      console.log("WebSocket connected");
    };
    ws.onmessage = (event: any) => {
      console.log(`Received message from server: ${event.data}`);
      setSocketMsg(event.data);
    };
    ws.onclose = () => {
      console.log("WebSocket disconnected");
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  // 添加自定义的 send 方法
  const send = (data: string) => {
    if (socket) {
      socket.send(data);
    }
  };

  return {send, socketMsg};
};
  ```

  </TabItem>

<TabItem value="use" tabel="使用">  

```tsx title='test.tsx'
import React, {memo, useState} from "react";
import {useWs} from "@hooks/websocket";

const Test = memo(() => {
  const [msg, setMsg] = useState<string>("");
  const {socketMsg, send} = useWs();

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setMsg(e.target.value);
        }}
      />
      <button
        onClick={() => {
          send(msg);
        }}
      >
        websocket测试
      </button>
      <p>{socketMsg}</p>
    </div>
  );
});

export default Test;
```

</TabItem>

</Tabs>


