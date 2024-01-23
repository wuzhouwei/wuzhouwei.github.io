## 协作开发规范

### 开始
1. **开发前先拉取代码**
2. 开发时从最新分支迁出，命名当前分支名称-xxx 例：dev -> dev-test;
3. 待补充。。。

----

### 禁忌
- 禁止推送主分支
- 禁止使用git push -f

---

### 类型说明
| 类型       | 描述                                                                           |
| ---------- | ------------------------------------------------------------------------------- |
| **feat**   | 添加新功能                                                                      |
| **fix**    | 修复bug                                                                         |
| **build**  | 构造工具或外部依赖的改动，如webpack、npm等                                      |
| **docs**   | 更新文档，如README文件的变动                                                    |
| **refactor**| 代码重构时使用，不改变代码含义，如去除空格、改变缩进、增删分号                   |
| **style**  | 不影响代码含义的改动，如格式调整                                                |
| **chore**  | 构建过程或辅助工具的变动，如更新package.json中的依赖版本                         |
| **test**   | 添加测试或修改现有测试                                                         |
| **perf**   | 提高性能的改动                                                                 |
                                                              |

> 例：
> 
>feat(顶栏): 增加 xxx. 
> 
> 或者简单点
> 
> feat: add xxx.