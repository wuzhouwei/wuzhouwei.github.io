---
id: jsbi
title: 大数处理
description: JSBI is a pure-JavaScript implementation of the ECMAScript BigInt proposal, which officially became a part of the JavaScript language in ES2020.
keywords: [JSBI, BigInt, 大数处理]
tags:
- BigInt
- 大数处理
---

---


```
npm install jsbi --save
```
```
yarn add jsbi
```

> https://www.npmjs.com/package/jsbi

| Operation            | native BigInts          | JSBI                     |
| -------------------- | ----------------------- | ------------------------ |
| Creation from String | `a = BigInt('456')`     | `a = JSBI.BigInt('456')` |
| Creation from Number | `a = BigInt(789)`       | `a = JSBI.BigInt(789)`   |
| Conversion to String | `a.toString(radix)`     | `a.toString(radix)`      |
| Conversion to Number | `Number(a)`             | `JSBI.toNumber(a)`       |
| Truncation           | `BigInt.asIntN(64, a)`  | `JSBI.asIntN(64, a)`     |
|                      | `BigInt.asUintN(64, a)` | `JSBI.asUintN(64, a)`    |
| Type check           | `typeof a === 'bigint'` | `a instanceof JSBI`      |


| Operation                   | native BigInts | JSBI                              |
| --------------------------- | -------------- | --------------------------------- |
| Addition                    | `c = a + b`    | `c = JSBI.add(a, b)`              |
| Subtraction                 | `c = a - b`    | `c = JSBI.subtract(a, b)`         |
| Multiplication              | `c = a * b`    | `c = JSBI.multiply(a, b)`         |
| Division                    | `c = a / b`    | `c = JSBI.divide(a, b)`           |
| Remainder                   | `c = a % b`    | `c = JSBI.remainder(a, b)`        |
| Exponentiation              | `c = a ** b`   | `c = JSBI.exponentiate(a, b)`     |
| Negation                    | `b = -a`       | `b = JSBI.unaryMinus(a)`          |
| Bitwise negation            | `b = ~a`       | `b = JSBI.bitwiseNot(a)`          |
| Left shifting               | `c = a << b`   | `c = JSBI.leftShift(a, b)`        |
| Right shifting              | `c = a >> b`   | `c = JSBI.signedRightShift(a, b)` |
| Bitwise “and”               | `c = a & b`    | `c = JSBI.bitwiseAnd(a, b)`       |
| Bitwise “or”                | `c = a \| b`   | `c = JSBI.bitwiseOr(a, b)`        |
| Bitwise “xor”               | `c = a ^ b`    | `c = JSBI.bitwiseXor(a, b)`       |
| Comparison to other BigInts | `a === b`      | `JSBI.equal(a, b)`                |
|                             | `a !== b`      | `JSBI.notEqual(a, b)`             |
|                             | `a < b`        | `JSBI.lessThan(a, b)`             |
|                             | `a <= b`       | `JSBI.lessThanOrEqual(a, b)`      |
|                             | `a > b`        | `JSBI.greaterThan(a, b)`          |
|                             | `a >= b`       | `JSBI.greaterThanOrEqual(a, b)`   |

| Operation                       | native BigInts | JSBI             |
| ------------------------------- | -------------- | ---------------- |
| Abstract equality comparison    | `x == y`       | `JSBI.EQ(x, y)`  |
| Generic “not equal”             | `x != y`       | `JSBI.NE(x, y)`  |
| Generic “less than”             | `x < y`        | `JSBI.LT(x, y)`  |
| Generic “less than or equal”    | `x <= y`       | `JSBI.LE(x, y)`  |
| Generic “greater than”          | `x > y`        | `JSBI.GT(x, y)`  |
| Generic “greater than or equal” | `x >= y`       | `JSBI.GE(x, y)`  |
| Generic addition                | `x + y`        | `JSBI.ADD(x, y)` |

| Unsupported operation | native BigInts | JSBI                                 |
| --------------------- | -------------- | ------------------------------------ |
| literals              | `a = 123n;`    | N/A ☹                                |
| increment             | `a++`          | N/A ☹                                |
|                       | `a + 1n`       | `JSBI.add(a, JSBI.BigInt('1'))`      |
| decrement             | `a--`          | N/A ☹                                |
|                       | `a - 1n`       | `JSBI.subtract(a, JSBI.BigInt('1'))` |

| native BigInts/DataViews    | JSBI                                      |
|-----------------------------|-------------------------------------------|
| `dv.getBigInt64(i, le)`     | `JSBI.DataViewGetBigInt64(dv, i, le)`     |
| `dv.setBigInt64(i, x, le)`  | `JSBI.DataViewSetBigInt64(dv, i, x, le)`  |
| `dv.getBigUint64(i, le)`    | `JSBI.DataViewGetBigUint64(dv, i, le)`    |
| `dv.setBigUint64(i, x, le)` | `JSBI.DataViewSetBigUint64(dv, i, x, le)` |


