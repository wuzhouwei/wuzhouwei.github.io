---
id: utils
title: 常见工具类函数
description: 常见工具类函数整理. 
keywords: [time,]
tags:
- time

---

---

### 时间格式类

import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="dayFormatUTC" label="dayFormatUTC" default>

  ```js dayFormatUTC
  export const c = (time) => {
    return dayjs.utc(time).format('MMM-DD-YYYY h:mm:ss A +[UTC]')
  }
  ```

  </TabItem>
  <TabItem value="timeAgoFormat" label="timeAgoFormat">

  ```js timeAgoFormat
  export function timeAgoFormat(cellValue) {
    const timeNow = new Date().getTime()
    const compare = timeNow - cellValue
    if (!cellValue) {
      return '--'
    }
    if (compare < 0) {
      return '0 secs ago'
    }
    if (compare < 1000 * 60) {
      const secs = Math.floor(compare / 1000)
      return `${secs} ${secs <= 1 ? 'sec' : 'secs'} ago`
    }
    if (compare < 1000 * 60 * 60) {
      const minutes = Math.floor(compare / (1000 * 60))
      return `${minutes} ${minutes <= 1 ? 'min' : 'mins'} ago`
    }
    if (compare < 1000 * 60 * 60 * 24) {
      const hours = Math.floor(compare / (1000 * 60 * 60))
      const minutes = Math.floor((compare % (1000 * 60 * 60)) / (1000 * 60))
      return minutes === 0 ? `${hours} ${hours <= 1 ? 'hr' : 'hrs'} ago` : `${hours} ${hours <= 1 ? 'hr' : 'hrs'} ${minutes} ${minutes <= 1 ? 'min' : 'mins'} ago`
    }
    return dayjs.utc(cellValue).format('YYYY-MM-DD HH:mm:ss')
  }
  ```

  </TabItem>
  <TabItem value="customFormatUTC" label="customFormatUTC">

  ```js customFormatUTC
   export const customFormatUTC = (time) => {
    const now = Date.now()
    const diffMilliseconds = now - time
  
    const seconds = Math.floor(diffMilliseconds / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
  
    if (days > 0) {
      return `${days} ${days <= 1 ? 'day' : 'days'} ${hours % 24} ${hours % 24 <= 1 ? 'hr' : 'hrs'} ago`
    } else if (hours > 0) {
      const remainingMinutes = minutes % 60
      return remainingMinutes === 0 ? `${hours} ${hours <= 1 ? 'hr' : 'hrs'} ago` : `${hours} ${hours <= 1 ? 'hr' : 'hrs'} ${remainingMinutes} ${remainingMinutes <= 1 ? 'min' : 'mins'} ago`
    } else if (minutes > 0) {
      return `${minutes} ${minutes <= 1 ? 'min' : 'mins'} ago`
    } else {
      return `${seconds} ${seconds <= 1 ? 'sec' : 'secs'} ago`
    }
  }
  ```

  </TabItem>
  <TabItem value="package" label="package">

  ```js package
  import dayjs from 'dayjs'
  import utc from 'dayjs/plugin/utc'
  
  dayjs.extend(utc)
  ```

  </TabItem>
</Tabs>


```tsx live

function Example(props) {

  function getSubStr(address, before, after) {
    return address
      ? address.slice(0, before) + '...' + address.slice(address.length - after, address.length)
      : ''
  }

  const test = getSubStr('0xf4168ADb9f13e12FE68Bd64cC7cb2EE10B2D8e8C', 4, 4)

  return (
    <span>{test}</span>
  );
}

```

```tsx live

function Example(props) {

    /*
  * 3333.1234567 -> 3,333.123456
  */
  function paddingNum (num, amount = 6) {
    if (!num || num === '0') return amount === 6 ? '0 .000000' : '0 .000000000000000000'
    let str = ''
    if (typeof num === 'number') {
      str = num.toString()
    } else {
      str = num
    }

    let integer
    let floater = ''
    if (!str.includes('.')) {
      integer = str.split('')
    } else {
      const ary = str.split('.')
      integer = ary[0].split('')
      floater = ary[1].substring(0, amount)
    }
    let count
    integer.length % 3 === 0 
      ? count = integer.length / 3 - 1 
      : count = Math.floor(integer.length / 3)
    
    for (let i = 0; i < count; i++) {
      integer.splice(integer.length - (i + 1) * 3 - i, 0, ',')
    }
    
    let finalStr
    floater.length === 0
      ? finalStr = integer.join('') + ' .' + '0'.padEnd(amount, '0') 
      : finalStr = integer.join('') + ' .' + floater.padEnd(amount, '0')
    return finalStr
  }

  const test = paddingNum('1000001.98888')

  return (
    <span>{test}</span>
  );
}

```


