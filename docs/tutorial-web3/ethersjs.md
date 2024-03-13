---
id: ethers.js
title: ethers.js
description: ethers.js v6 常用方法记录.
keywords: [ethers.js, v6, web3，provide, wallet]
tags:
  - ethers.js
  - web3
  - wallet
---

---

> 此记录的是 v6 版本，每个版本差异还是蛮大的。

### 1.provider

> 通过 rpc 的方式生成 provider，此方法可以获取一些读的操作

```typescript
import { ethers, JsonRpcProvider } from "ethers";

const address = "0xc5xxxxxxxx"; //钱包地址
const rpc = "https://goerli.infura.io/v3/xxxxxx"; //rpc
const provider = new JsonRpcProvider(rpc);
const balance = await provider.getBalance(address); //查询gas余额
const formatBalance = ethers.formatUnits(balance, 18); //格式化成正常数量，18为精度(decimals)，币的精度不一定都是18
```

> 通过链接安装的浏览器插件钱包，钱包链接网络。例:MetaMask。如果安装了 MetaMask 钱包，它会注入一个 window.ethereum；

```typescript
import { BrowserProvider } from "ethers";

const ethereum = (window as any).ethereum;
const provider = new BrowserProvider(ethereum);
```

1. getBalance 可以获取某个账号的链代币余额（gas 代币)
2. getNetwork 可以获取当前链接的网络信息
3. getBlock 和 getBlockNumber 获取区块信息
4. getResolver、getAvatar、resolveName、lookupAddress 则是查询 ENS 域名相关方法
5. getTransaction、getTransactionResult、getTransactionReceipt、getTransactionCount 则是用于查询交易相关信息。

### 2. 钱包(wallet)

> Wallet 主要是用来创建新账号，或者通过私钥助记词等导入账号

1.创建一个随机钱包

```typescript
import { Wallet } from "ethers";

let wallet = Wallet.createRandom(provider);
console.log("privateKey:", wallet.privateKey); // 私钥
console.log("address:", wallet.address); // 地址
console.log("phrase:", wallet.mnemonic?.phrase); // 助记词
```

2.导入私钥获取钱包信息

```typescript
import { Wallet } from "ethers";

const wallet = new Wallet(input_your_privateKey, provider);
console.log("address:", wallet.address);
```

3.导入助记词获取钱包信息

```typescript
import { Wallet } from "ethers";

const wallet = Wallet.fromPhrase(input_your_phrase, provider);
console.log("privateKey:", wallet.privateKey);
console.log("address:", wallet.address);
```

4.常用方法

> signer.sendTransaction 发送交易, signer.signMessage 发起签名;

```typescript
import { BrowserProvider } from "ethers";

const ethereum = (window as any).ethereum;
const provider = new BrowserProvider(ethereum);
const signer = await provider.getSigner();
const address = "0xc5xxxxxxxx"; //钱包地址
const send: any = await signer.sendTransaction({
  to: address,
  value: parseEther("0.01"),
});
const getBlock = await provider.getBlock(send["#startBlock"]);
```

### 3.合约调用

1.事例

```typescript
import { Contract } from "@ethersproject/contracts";

// 这里的 signer 可以是 BrowserProvider.getSigner() 方法获取到的 signer，
// 也可以是 Wallet 和 HDNodeWallet，因为他们都继承自 Signer。
// 可看第二点
const contract = new Contract(合约地址, abi, signer);
```

2.调用案例

> 一般部署到链上的合约可以在浏览器看到对应读写方法

```tsx
import {
  ethers,
  formatUnits,
  parseUnits,
  Wallet,
  BrowserProvider,
  formatEther,
  parseEther,
} from "ethers";
import { Contract } from "@ethersproject/contracts";
import erc20Abi from "@abi/erc20.json";
import { useWeb3React } from "@web3-react/core";

async function Test() {
  const { account, provider } = useWeb3React();

  const contractAddr: string = "0xc5xxxxxxxx"; //usdc
  const address: string = "0xc6xxxxxxxx";
  const tsAddr: string = "0xc7xxxxxxxx";

  return (
    <div>
      <Button
        onClick={async () => {
          try {
            if (provider) {
              const myContract = new Contract(
                contractAddr,
                erc20Abi.abi,
                provider.getSigner()
              );
              const balance = await myContract.balanceOf(address); //查询
              const amount = parseUnits("100", 6);
              const tx = await myContract.transfer(tsAddr, amount); //发送
              console.log(formatUnits(balance.toString(), 6), "balance");
            }
          } catch (err) {
            console.log(err, "error");
          }
        }}
      >
        第一种方式
      </Button>
      <Button
        onClick={async () => {
          try {
            const rpc = "https://rpc.ankr.com/eth_goerli";
            const provider = new ethers.JsonRpcProvider(rpc);
            const wallet = new Wallet(key, provider);
            const myContract = new ethers.Contract(
              contractAdd,
              erc20Abi.abi,
              wallet
            );
            const amount = parseUnits("20", 6);
            const tx = await myContract.transfer(toAddress, amount); //发送
            const balance = await myContract.balanceOf(toAddress); //查询
            console.log(ethers.formatUnits(balance, 6), tx, "test2");
          } catch (err) {
            console.log(err, "error");
          }
        }}
      >
        第二种方式
      </Button>
    </div>
  );
}
```
