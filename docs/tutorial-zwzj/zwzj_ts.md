---
id: zwzj_ts
title: TS部分总结
tags:
  - TypeScript
description: 这是一个了解一些TypeScript的页面。
keywords: [ TypeScript ,ts类型 ]
---

----

### 1. 数据类型

#### 1、基本数据类型

> `number`：表示数字，可以是整数或浮点数。

```ts
const num: number = 1
const float: number = 3.14
```

> `string`：表示字符串。

```ts
const str: string = ''
```

> `boolean`：表示布尔值，可以是 true 或 false。

```ts
const isTrue: boolean = true
```

> `null`：表示空值或空引用。

```ts
const example: null = null
```

> `undefined`：表示未定义的值。

```ts
const example: undefined = undefined
```

> `symbol`：表示唯一的、不可变的值，通常用于对象的属性键。

```ts
const example: symbol = Symbol("example")
```

> `bigint`：表示任意精度的整数。

```ts
const bigNumber: bigint = 123n
```

#### 2、复合数据类型

> `array`：表示数组，可以包含多个元素，每个元素的类型可以不同。

```ts
//元素类型后面接上 []
const arr: number[] = [1, 2, 3]
// 数组泛型，Array<元素类型>
const arr2: Array<number> = [1, 2, 3]
```

> `tuple`：表示元组，是固定长度和类型的数组。

```ts
const arr: [number, string] = [1, '2']
```

> `object`：表示对象，可以包含多个属性和方法。

```ts
const obj: { arg: string } = {arg: '123'}
```

> `enum`：表示枚举，用于定义一组命名的常量值。

```ts
enum Color {
  Red, // 值默认为 0
  Green, // 值默认为 1
  Blue // 值默认为 2
}

//字符串类型：
enum ColorText {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue',
}

const color: Color = Color.Red;
const color2: ColorText = ColorText.Red;
console.log(color, color2) //0 'Red'
```

#### 3、特殊数据类型

> `any`：表示任意类型。

```ts
let value: any = 1;
value = "hello world";
```

> `void`：表示没有类型。

```ts
function example(): void {
  console.log("Hello");
}
```

> `never`：表示永远不会出现的值的类型。

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

> `unknown`：表示未知类型。

```ts
let example: unknown;
example = 42;
example = "hello";
```

#### 4、其他类型

> `function`：表示函数类型。

```ts
let add: (x: number, y: number) => number = function (x, y) {
  return x + y;
};
```

> `interface`：表示对象的结构类型。

 ```ts
interface Person {
  name: string;
  age: number;
}

let person: Person = {name: "Tommy", age: 30};
```

> `type`：表示类型别名。

```ts
type Example = string | number;
let example: Example = "abc123";
```

> `class`：表示类。

```ts
class Animal {
  constructor(public name: string) {
  }
}

let dog: Animal = new Animal("Dog");
```

### 2. 高级类型

#### 1、交叉类型

> `交叉类型（Intersection Types）`：合并多个类型为一个新类型。

```ts
interface Dog {
  bark(): void;
}

interface Cat {
  meow(): void;
}

type DogCat = Dog & Cat;

const pet: DogCat = {
  bark() {
    console.log("Woof!");
  },
  meow() {
    console.log("Meow!");
  }
};

pet.bark(); // 输出 "Woof!"
pet.meow(); // 输出 "Meow!"
```

#### 2、联合类型

> `联合类型（Union Types）`：允许一个值属于多种类型之一。

```ts
type Status = "success" | "error" | "pending";

function getMessage(status: Status): string {
  switch (status) {
    case "success":
      return "Operation successful!";
    case "error":
      return "An error occurred.";
    case "pending":
      return "Operation is in progress.";
  }
}

console.log(getMessage("success")); // 输出 "Operation successful!"
```

#### 3、类型别名

> `类型别名（Type Aliases）`：创建一个新名称来引用已存在的类型。

```ts
type Age = number;
type Name = string;

type Person = {
  name: Name;
  age: Age;
};

const person: Person = {
  name: "Alice",
  age: 30
};
```

#### 4、类型索引

> `类型索引（Index Types）`：用于获取对象中特定属性的类型。

```ts
interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonKeys = keyof Person;

const key: PersonKeys = "name"; // 此时 key 只能是 "name" | "age" | "email"
```

#### 5、类型约束

> `类型约束（Type Constraints）`：使用泛型来约束类型。

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = {
  name: "Alice",
  age: 30
};

const name: string = getProperty(person, "name");
```

#### 6、映射类型

> `映射类型（Mapped Types）`：根据现有类型创建新类型。

```ts
interface Person {
  name: string;
  age: number;
}

type ReadonlyPerson = {
  readonly [K in keyof Person]: Person[K];
};

const person: ReadonlyPerson = {
  name: "Alice",
  age: 30
};

// 尝试修改只读对象的属性（编译错误）
// person.age = 31;
```

#### 7、条件类型

> `条件类型（Conditional Types）`：根据条件选择不同的类型。

```ts
type NonNullable<T> = T extends null | undefined ? never : T;

type T0 = NonNullable<string>;  // string
type T1 = NonNullable<string | null>;  // string
type T2 = NonNullable<string | undefined>;  // string
```

### 3. `类`完整案例

```ts
// 定义 Animal 类
abstract class Animal {
  // 公共属性
  public name: string;
  public readonly species: string;

  // 私有属性
  private _age: number;

  // 保护属性
  protected color: string;

  // 静态属性
  static legs: number = 4;

  // 构造函数
  constructor(name: string, species: string, age: number, color: string) {
    this.name = name;
    this.species = species;
    this._age = age;
    this.color = color;
  }

  // 公共方法
  public makeSound(): void {
    console.log(`${this.name} is making a sound.`);
  }

  // 抽象方法
  abstract move(): void;

  // 公共 getter 方法
  public get age(): number {
    return this._age;
  }

  // 公共 setter 方法
  public set age(value: number) {
    if (value >= 0) {
      this._age = value;
    }
  }
}

// 定义 Dog 类，继承自 Animal
class Dog extends Animal {
  // 构造函数
  constructor(name: string, age: number, color: string) {
    // 调用父类构造函数
    super(name, "Dog", age, color);
  }

  // 实现抽象方法
  move(): void {
    console.log(`${this.name} is walking.`);
  }

  // 公共静态方法
  static bark(): void {
    console.log("Woof Woof!");
  }
}

// 创建 Dog 类的实例
let dog: Dog = new Dog("Buddy", 3, "brown");

// 使用实例属性
console.log(dog.name);    // 输出 "Buddy"
console.log(dog.species); // 输出 "Dog"
console.log(dog.age);     // 输出 3

// TS2445: Property color is protected and only accessible within class Animal and its subclasses.
console.log(dog.color);

// 调用实例方法
dog.makeSound(); // 输出 "Buddy is making a sound."
dog.move();      // 输出 "Buddy is walking."

// 调用静态属性和方法
console.log(Dog.legs); // 输出 4
Dog.bark();            // 输出 "Woof Woof!"
```

### 常用工具类

#### 1.`keyof`

> `keyof`接受一个对象类型并返回一个接受该对象的任何键的类型。

```ts
type Todo = { x: number; y: string; };

const point: Todo = {x: 123, y: '456'};

type P = keyof typeof point; // type '"x" || "y"'

const coordinate: P = 'x'
```

#### 2.`Partial<Type>`

> 将所有属性设置为可选的类型。与 Required 相反。

```ts
type Todo = { x: number; y: string; };

const p: Partial<Todo> = {
  y: "test",
};
```

#### 3.`Required<Type>`

> 将所有属性设置为必选的类型。与 Partial 相反。

```ts
type Todo = { x?: number; y?: string };

const p: Required<Todo> = {
  x: 0,
  y: "test",
};
```

#### 4.`Readonly<Type>`

> 只读属性

```ts
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "hello world",
};

todo.title = "Hello";
// Cannot assign to title because it is a read-only property.
```

#### 5.`Record<Keys, Type>`

> 构造一个对象类型，其属性键为 Keys，其属性值为 Type

```ts
interface Info {
  test: string;
}

type TestName = "a" | "b" | "c";

const data: Record<TestName, Info> = {
  a: {test: "test1"},
  b: {test: "test2"},
  c: {test: "test3"},
};

console.log(data, "test");
```

#### 6.`Pick<Type, Keys>`

> 通过从 Type 中选取一组属性 Keys（字符串字面或字符串字面的并集）来构造一个类型。与 Omit 相反

```ts
interface Todo {
  a: string;
  b: number;
  c: boolean;
}

type TodoPreview = Pick<Todo, "a" | "c">;

const todo: TodoPreview = {
  a: "test",
  c: true,
};//Initial type: {a: string, c: boolean}
```

#### 7.`Omit<Type, Keys>`

> 通过从 Type 中选择所有属性然后删除 Keys（字符串字面或字符串字面的并集）来构造一个类型。与 Pick 相反

```ts
interface Todo {
  a: string;
  b: number;
  c: boolean;
}

type TodoPreview = Omit<Todo, "a" | "c">;

const todo: TodoPreview = {
  b: 0,
};//Initial type: {b: number}
```

#### 8.`Exclude<UnionType, ExcludedMembers>`

> 通过从 UnionType 中排除所有可分配给 ExcludedMembers 的联合成员来构造一个类型。与 Extract 相反

```ts
type Todo = Exclude<"a" | "b" | "c", "b">;

const todo: Todo = 'a' //Initial type: "a" | "c"
```

#### 9.`Extract<Type, Union>`

> 通过从 Type 中提取所有可分配给 Union 的联合成员来构造一个类型。与 Exclude 相反

```ts
type Todo = Extract<"a" | "b" | "c", "b">;

const todo: Todo = "b"; //Initial type: "b"
```

#### 10.`NonNullable<Type>`

> 通过从 Type 中排除 null 和 undefined 来构造一个类型。

```ts
type Todo = NonNullable<string | number | undefined | null | boolean>;

const todo: Todo = "" || 0 || false; //Initial type: string | number | boolean
```