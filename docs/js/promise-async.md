# Promise 与 async/await（Promise & async/await）

## 1. 概念定义

- **Promise**：表示一个异步操作的最终完成或失败及其结果的对象。
- **async/await**：基于 Promise 的语法糖，用同步风格编写异步代码，提升可读性。

## 2. 产生原因 / 工作原理

- **产生原因**：
    - 异步操作中回调函数过多容易产生“回调地狱”；
    - 需要统一管理异步状态和错误处理。
- **工作原理**：
    - **Promise 状态**：pending（等待）、fulfilled（成功）、rejected（失败）。
    - **链式调用**：`then`、`catch` 返回新的 Promise，支持链式处理。
    - **async/await**：`async` 函数返回 Promise，`await` 暂停执行直到 Promise 完成，自动处理 resolved 值或 reject 异常。
    - **事件循环**：Promise.then/await 等操作放入微任务队列，微任务优先于宏任务执行。

## 3. 典型示例

```
// Promise 示例
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data loaded'), 1000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(err => console.error(err));

// async/await 示例
async function loadData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
loadData();
```

- **解释**：Promise 提供链式调用管理异步操作，async/await 提供更直观的同步风格写法，同时利用微任务队列保证事件循环顺序。

## 4. 应用场景

- **网络请求**：fetch 或 Ajax 请求结果处理。
- **定时任务**：需要异步顺序执行的操作。
- **异步流程控制**：复杂异步逻辑中保证顺序、错误捕获和状态管理。
- **前端数据流**：异步加载组件或数据渲染。

## 5. 常见考点与陷阱

- **链式调用错误处理**：每个 then/catch 返回新的 Promise，需要正确捕获异常。
- **async 函数返回值**：始终返回 Promise，忘记处理可能导致意外行为。
- **并发与顺序**：
    - 并发执行使用 `Promise.all`；
    - 顺序执行使用 `await` 或链式 then。
- **微任务优先级**：Promise.then/await 是微任务，比 setTimeout 更早执行。

## 6. 优缺点总结

- **优点**：
    - 避免回调地狱，异步逻辑可读性高；
    - 错误处理统一，可用 try/catch；
    - 支持顺序和并发控制。
- **缺点**：
    - async/await 会阻塞当前 async 函数的执行（非主线程阻塞，但会暂停该函数上下文）；
    - 不合理的 await 可能降低并发效率；
    - 对初学者需要理解事件循环与微任务。

## 7. 一句话总结

- Promise 与 async/await 是现代 JavaScript 异步编程核心工具，提供链式管理和同步风格写法，提高代码可读性与可维护性。