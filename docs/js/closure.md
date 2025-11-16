# 什么是闭包

### 问题：
什么是闭包？请举例说明。

### 答案：
闭包是 JavaScript 中的一种机制，它允许函数访问并操作函数外部的变量。通过闭包，可以避免全局变量的污染。

```js
function outer() {
  const name = '闭包示例';
  return function inner() {
    console.log(name);
  }
}
const closureFunc = outer();
closureFunc(); // 输出: 闭包示例
```