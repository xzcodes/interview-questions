# 闭包（Closure）

## 1. 概念定义

- **闭包**：闭包是指函数可以记住并访问定义在其外部的作用域中的变量，即使外部函数已经执行完毕。
- **本质**：**函数 + [其词法环境](https://tsejx.github.io/javascript-guidebook/core-modules/executable-code-and-execution-contexts/compilation/lexical-scope)**

## 2. 产生原因 / 工作原理

- **产生原因**：JavaScript 函数可以在定义时捕获其外部作用域的变量，并在执行时保留这些变量。
- **工作原理**：
    - 每当函数创建时，会形成一个执行上下文（Execution Context）；
    - 函数内部引用的外部变量会被保存在闭包中，即使外部函数已经返回；
    - 作用域链使内部函数可以访问外层函数的变量，闭包延长了外层变量的生命周期。

## 3. 典型示例

```
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

- **解释**：`counter` 函数形成闭包，保持了 `count` 变量的状态，即使 `makeCounter` 已执行完毕。

## 4. 应用场景

- **状态保存**

```jsx
// 因为闭包的关系，getState 与 setState 可以取得与记得 state
function useState(initialState) {
let state = initialState;

function getState() {
  return state;
}

function setState(updatedState) {
  state = updatedState;
}
return [getState, setState];
}

const [count, setCount] = useState(0);

count(); // 0
setCount(1);
count(); // 1
```
- **数据封装**：保护私有变量，不被外部直接访问。

```jsx
// privateCounter 没被法被外部修改，
// 因为闭包的关系 increment 与 decrement 可以存取到 privateCounter
// 因此 privateCounter 只能够透过 increment 与 decrement 来改，这能有效避免被误触到
var counter = (function () {
var count = 0;
function changeBy(val) {
  count += val;
}
return {
  increment: function () {
    changeBy(1);
  },
  decrement: function () {
    changeBy(-1);
  },
  value: function () {
    return count;
  },
};
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
```
- **工厂函数**：动态生成具有独立状态的函数。
- **函数式编程**：实现高阶函数、回调函数和事件处理器。
- **计数器或状态管理**：记录和维护函数执行状态。
- **封装模块化代码**

```js
// a.js
const count = 1
export function getCount(){
    return count
}

// b.js
import { getCount } from 'a.js'

// b 模块不能直接修改 count 的值， 只能通过 a 模块的导出修改
```

## 5. 常见考点与陷阱

- **内存泄漏**：闭包持有外部变量引用，如果未及时释放可能造成内存泄漏。
- **循环中的闭包问题**：循环变量在闭包中常被捕获导致意外值，需要使用 `let` 或立即执行函数修复。

```
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // 输出 3 3 3
}
```

- **过度使用闭包**：增加复杂性和内存占用。

## 6. 优缺点总结

- **优点**：
    - 封装私有数据，保护内部状态；
    - 支持函数式编程和高阶函数模式；
    - 可以延长变量生命周期，实现状态保持。
- **缺点**：
    - 容易导致内存泄漏；
    - 过度使用闭包会增加代码复杂度；
    - 调试闭包中变量有时不直观。

## 7. 一句话总结

- 闭包允许函数访问和操作外部作用域的变量，实现数据封装和状态保持，是 JavaScript 核心特性之一。