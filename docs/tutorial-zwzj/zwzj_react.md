---
id: zwzj_react
title: react部分总结
tags:
  - react
  - 父子组件
  - 生命周期
  - redux
  - HOC
  - Hooks
description: 这是一个react部分总结的页面。
keywords: [react部分总结, react, 父子组件, 生命周期, HOC, redux, Hooks等]
---

---

## 1.父子组件传值

### 父组件调用子组件方法及传参(类组件)

```js
//父组件

export default class Parent extends Component {
  handleF=()=>{
     this.refsz.method('父组件调用了')
  }
  render() {
    return (
      <div >
        <Button onClick={this.handleF}>父组件按钮</Button>
        <Children refsZ={el=>this.refsz=el}/>
      </div>
    )
  }
}

//子组件

export default class Children extends Component {
  componentDidMount() {
    this.props.refsZ(this)
  }
  method(arg){
      console.log(arg,'子组件的方法')
  }
    render() {
        return  <></>
    }
}

```

### 父组件调用子组件方法及传参(函数组件)

```tsx
import React, { memo, useRef, useImperativeHandle, forwardRef } from "react";
import { Button } from "antd";

//子组件

//需要注意 forwardRef 和 useImperativeHandle

const Children = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    clickChild,
  }));

  const clickChild = (arg: any) => {
    console.log(arg, "子组件的方法");
  };

  return <></>;
});

export default Children;

//父组件

const Parent = memo(() => {
  const childRef = useRef<{ clickChild: (arg: string) => void } | null>(null);

  const handleClick = () => {
    childRef.current?.clickChild("父组件调用了");
  };

  return (
    <div>
      <Button onClick={handleClick}>我是父按钮</Button>
      <Children ref={childRef} />
    </div>
  );
});

export default Parent;
```

### 子组件调用父组件方法及传参(类组件)

```js
//父组件

export default class Parent extends Component {
  handleF=(...arg)=>{
     console.log(arg,'(我是父组件方法)')
  }
  render() {
    return (
      <div >
        <Children click={this.handleF}/>
      </div>
    )
  }
}

//子组件

export default class Children extends Component {
  handleClick=(e)=>{
    this.props.click('(子组件调用父组件方法给父组件传值)','(方案2)',e)
  }
    render() {
    const {click} = this.props
        return  <>
          <Button onClick={click.bind(this,'(子组件调用父组件方法给父组件传值)','(方案1)')}>
          	我是子组件的按钮1
          </Button>
          <Button onClick={this.handleClick}>我是子组件的按钮2</Button>
        </>
    }
}
```

### 子组件调用父组件方法及传参(函数组件)

```tsx
import React, { memo, FC } from "react";
import { Button } from "antd";

//子组件

const Children: FC<{ click: (...arg: any) => void }> = memo(({ click }) => {
  return (
    <div>
      <Button onClick={() => click("子组件调用成功", "其他")}>
        我是子组件
      </Button>
    </div>
  );
});

export default Children;

//父组件

const Parent = memo(() => {
  const handleClick = (...arg: any) => {
    console.log(...arg, "我是父组件");
  };

  return (
    <div>
      <Children click={handleClick} />
    </div>
  );
});

export default Parent;
```

## 2.ref 获取 DOM(类组件)

```js
export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.MyRef = React.createRef();
  }
  handleClick = (_) => {
    console.log(this.MyRef.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.MyRef} />
        <Button onClick={this.handleClick}>获取</Button>
      </div>
    );
  }
}
```

## 3.React 中的 props 是什么 state 是什么?

> **props**

**`props(只读组件)`是一个从外部传进组件的参数，主要作为就是从父组件向子组件传递数据，它具有可读性和不变性，只能通过外部组件主动传入新的`props`来重新渲染子组件，否则子组件的`props`以及展现形式不会改变。**

> **state**

**`state(状态)`的主要作用是用于组件保存、控制以及修改自己的状态，它只能在`constructor`中初始化，它算是组件的私有属性，不可通过外部访问和修改，只能通过组件内部的`this.setState`来修改，修改`state`属性会导致组件的重新渲染。**

**区别**

1. `state`是组件自己管理数据，控制自己的状态，可变；
2. `props`是外部传入的数据参数，不可变；
3. 没有`state`的叫做无状态组件，有`state`的叫做有状态组件；
4. 多用`props`，少用`state`。也就是多写无状态组件。
5. `props`用于定义外部接口，`state`用于记录内部状态
6. `props`的赋值在于外部世界使用组件，`state`的赋值在于组件内部
7. 组件不应该改变`props`的值，而`state`存在的目的就是让组件来修改的

## 4.生命周期

![生命周期](image/react_smzq.png)

> **React 16.3+**

- **getDerivedStateFromProps(nextProps, prevState):** 在调用`render()`之前调用，并在 _每次_ 渲染时调用。 需要使用派生状态的情况是很罕见得。值得阅读 [如果你需要派生状态](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html).
- **componentDidMount:** 首次渲染后调用，所有得 Ajax 请求、DOM 或状态更新、设置事件监听器都应该在此处发生。
- **shouldComponentUpdate:** 确定组件是否应该更新。 默认情况下，它返回`true`。 如果你确定在更新状态或属性后不需要渲染组件，则可以返回`false`值。 它是一个提高性能的好地方，因为它允许你在组件接收新属性时阻止重新渲染。
- **getSnapshotBeforeUpdate(nextProps, prevState):** 在最新的渲染输出提交给 DOM 前将会立即调用，这对于从 DOM 捕获信息（比如：滚动位置）很有用。
- **componentDidUpdate:** 它主要用于更新 DOM 以响应 prop 或 state 更改。 如果`shouldComponentUpdate()`返回`false`，则不会触发。
- **componentWillUnmount** 当一个组件被从 DOM 中移除时，该方法被调用，取消网络请求或者移除与该组件相关的事件监听程序等应该在这里进行。

> **Before 16.3**

- **componentWillMount:** 在组件`render()`前执行，用于根组件中的应用程序级别配置。应该避免在该方法中引入任何的副作用或订阅。
- **componentDidMount:** 首次渲染后调用，所有得 Ajax 请求、DOM 或状态更新、设置事件监听器都应该在此处发生。
- **componentWillReceiveProps (nextProps):** 在组件接收到新属性前调用，若你需要更新状态响应属性改变（例如，重置它），你可能需对比`this.props`和`nextProps`并在该方法中使用`this.setState()`处理状态改变。
- **shouldComponentUpdate(nextProps,nextState):** 确定组件是否应该更新。 默认情况下，它返回`true`。 如果你确定在更新状态或属性后不需要渲染组件，则可以返回`false`值。 它是一个提高性能的好地方，因为它允许你在组件接收新属性时阻止重新渲染。
- **componentWillUpdate (nextProps,nextState):** 当`shouldComponentUpdate`返回`true`后重新渲染组件之前执行，注意你不能在这调用`this.setState()`
- **componentDidUpdate(prevProps,prevState):** 它主要用于更新 DOM 以响应 prop 或 state 更改。 如果`shouldComponentUpdate()`返回`false`，则不会触发。
- **componentWillUnmount:** 当一个组件被从 DOM 中移除时，该方法被调用，取消网络请求或者移除与该组件相关的事件监听程序等应该在这里进行。

## 5.什么是高阶组件（HOC）?

_高阶组件_(_HOC_) 就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件，它只是一种模式，这种模式是由`react`自身的组合性质必然产生的。

我们将它们称为**纯组件**，因为它们可以接受任何动态提供的子组件，但它们不会修改或复制其输入组件中的任何行为。

**HOC 有很多用例：**

1. 代码复用，逻辑抽象化
2. 渲染劫持
3. 抽象化和操作状态（`state`）
4. 操作属性（`props`）

> 例子：

```tsx
import React from "react";

const App = (props: {}) => {
  console.log(props);
  return <div>test</div>;
};

//扁平化的高阶组件（推荐使用）
const WrappedComponent = (config = {}, Comp: React.ComponentType) => {
  return (props: any) => {
    return <Comp {...config} {...props} />;
  };
};

//第二种方式的高阶组件
/* const WrappedComponent = (config = {}) => {
    return (Comp: any) => {
      return (props: any) => {
        return <Comp {...config} {...props} />
      }
    }
  } 
*/

const Instance = WrappedComponent({ name: "test" }, App);
// const Instance = WrappedComponent({name: 'test'})(App)
export default Instance;
```

```tsx
import React, { useEffect, useState, ComponentType, memo } from "react";

const url = () =>
  fetch("https://jsonplaceholder.typicode.com/users/2?_delay=2000");

function TestHOC(WrapComponent: ComponentType) {
  return function WithHook(props: any) {
    const [test, setTest] = useState({});
    useEffect(() => {
      url()
        .then((res) => res.json())
        .then((res) => setTest(res));
    }, []);

    return <WrapComponent {...props} {...test} />;
  };
}

const Index = memo((props: any) => {
  console.log(props);
  return <></>;
});

export default TestHOC(Index);
```

## 6.如何实现 Server Side Rendering 或 SSR?

React 已经配备了用于处理 Node 服务器上页面渲染的功能。你可以使用特殊版本的 DOM 渲染器，它遵循与客户端相同的模式。

```js
import ReactDOMServer from "react-dom/server";

import App from "./App";

ReactDOMServer.renderToString(<App />);
```

此方法将以字符串形式输出常规 HTML，然后将其作为服务器响应的一部分放在页面正文中。在客户端，React 检测预渲染的内容并无缝地衔接。

## 7.最流行的动画软件包是什么?

**_React Transition Group_** 和 **_React Motion_** 是 React 生态系统中流行的动画包。

## 8.redux

### Redux 遵循三个基本原则：

1. **单一数据来源：** 整个应用程序的状态存储在单个对象树中。单状态树可以更容易地跟踪随时间的变化并调试或检查应用程序。
2. **状态是只读的：** 改变状态的唯一方法是发出一个动作，一个描述发生的事情的对象。这可以确保视图和网络请求都不会直接写入状态。
3. **使用纯函数进行更改：** 要指定状态树如何通过操作进行转换，您可以编写 reducers。Reducers 只是纯函数，它将先前的状态和操作作为参数，并返回下一个状态。

**工作流程**

**工作流程**是 view 调用 store 的 dispatch 接收 action 传入 store，reducer 进行 state 操作，view 通过 store 提供的 getState 获取最新的数据

## 9.常用 Hook

### Hook 规则

- **只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用**
- **只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用**

### useState

```tsx
import React, { memo, useState } from "react";
import { Button } from "antd";

const Example = memo(() => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>数量：{count}</p>
      <Button onClick={() => setCount(count + 1)}>点击</Button>
    </div>
  );
});

export default Example;
```

### useEffect

```tsx
import React, { memo, useEffect, useState } from "react";
import { Button } from "antd";

/*
 * useEffect第二参数的情况：
 *   1.如果不传参,会每次 render 后都执行。
 *   2.传入的是空数组，则只在初始化执行一次，等同类组件componentDidMount。
 *   3.传入有值的数组，会比较每一个值，有一个值变化就重新执行。
 *   4.由于第二参数采用浅比较方式，复杂类型参数会导致死循环。
 * */

const Example = memo(() => {
  const [des1, setDes1] = useState<string>("");
  const [des2, setDes2] = useState<string>("我不变没机会");
  const [des3, setDes3] = useState<string>("");
  const [des4, setDes4] = useState<any[]>([]);

  useEffect(() => {
    //当第二个参数不传，每次 render 后都执行。
    setDes1("我不想传第二个参数");
    console.log(des1, "des1");
  });

  //类似componentDidMount和componentDidUpdate
  useEffect(() => {
    //传入的是空数组，则只在初始化执行一次。
    setDes2("我只执行一次啊");
    console.log(des2, "des2"); //我不变没机会

    //类似componentWillUnmount
    return () => {
      setDes2("");
      console.log("我清除了des2的内容", "des2");
    };
  }, []);

  useEffect(() => {
    //传入有值的数组，会比较每一个值，有一个值变化就重新执行。
    setDes3("我想变你就要更新");
    console.log(des3, "des3");
  }, [des3]);

  /*useEffect(()=>{
    //由于第二参数采用浅比较方式，复杂类型参数会导致死循环。
    setDes4([1])
    console.log('死循环了,芭比Q了',des4)
  },[des4])*/
  //可使用 JSON.stringify(), useRef, useMemo 封装后调用解决死循环问题。

  return (
    <>
      <Button
        onClick={() => {
          setDes3("变一下");
        }}
      >
        des3
      </Button>
      <Button
        onClick={() => {
          setDes4([2]);
        }}
      >
        des4
      </Button>
    </>
  );
});

export default Example;
```

### useRef

```tsx
import React, { memo, useEffect, useState, useRef } from "react";
import { Button } from "antd";

/*
 * 使用场景:
 * 可以获取组件的实例。
 * 利用 useRef 解决由于 hooks 函数式组件产生闭包时无法获取最新 state 的问题。
 * 存放想要持久化( instant )的数据, 该数据不和 react 组件树的渲染绑定。该数据可以是任何类型，数字、数组、对象、函数，都可以。
 *
 * 用法:
 * 每次渲染useRef返回值都不变
 * 变更 .current 属性不会引发组件重新渲染;
 * ref.current发生变化应该作为Side Effect(因为它会影响下次渲染),所以不应该在render阶段更新current属性
 * */

//封装一个获取上一步的值 --可能在未来 React 会自带一个 usePrevious Hook。
//useEffect 是在每次渲染之后才会触发副作用函数的，是延迟执行的。而 return 语句是同步的，所以 return 的时候， ref.current 还是旧值。
const usePrevious = <T extends {}>(state: T) => {
  const ref: React.MutableRefObject<T | null> = useRef<T>(state);
  useEffect(() => {
    ref.current = state;
  });
  return ref.current;
};

const Example = memo(() => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [count, setCount] = useState<number>(0);
  const countRef = usePrevious<number>(count);
  const count2Ref = useRef(count);
  count2Ref.current = count;

  return (
    <>
      <input type="text" ref={inputRef} />
      <Button
        onClick={() => {
          // 通过 .current 拿到当前 dom 元素
          // 可使用原生 dom 事件
          console.log(inputRef.current, inputRef.current?.value);
        }}
      >
        获取inputDom节点
      </Button>

      <div>
        {countRef}_countRef--{count}_count--{count2Ref.current}_count2Ref
      </div>

      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count点击
      </Button>
    </>
  );
});

export default Example;
```

### useMemo-useCallback

```tsx
import React, { memo, FC, useState, useMemo, useCallback } from "react";
import { Button } from "antd";

/*
 * 子组件没有从父组件传入的props或者传入的props仅仅为简单数值类型使用memo即可。
 *
 * */

const Child: FC<any> = memo(({ data, click }) => {
  console.log("Child");
  return (
    <>
      <div>count:{data}</div>
      <Button onClick={click}>子组件点击</Button>
    </>
  );
});
const Child2: FC<any> = memo(({ data }) => {
  console.log("Child2");
  return (
    <>
      <p>姓名：{data.name}</p>
      <p>体重：{data.weight} kg</p>
    </>
  );
});

const Example = () => {
  const [userInfo, setUserInfo] = useState({ name: "名字", weight: 35 });
  const [count, setCount] = useState(0);

  const state = useMemo(() => {
    return userInfo;
  }, [userInfo, count]);

  const click = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  console.log("parent");

  return (
    <>
      <Child data={count} click={click} />
      <Child2 data={state} />
    </>
  );
};

export default Example;
```
