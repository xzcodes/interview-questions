export default {
  // 站点级选项
  lang: "zh",
  title: "前端面试题库",
  description: "web前端面试,vue面试题,react面试题,js面试题",
  base: "/interview-questions/",
  themeConfig: {
    outline: false,
    aside: false,
    sidebar: [
      {
        text: "HTML",
        items: [],
      },
      {
        text: "CSS",
        items: [],
      },
      {
        text: "JavaScript",
        // collapsed: false,
        items: [
          {
            text: "事件冒泡和事件捕获",
            link: "/js/event",
          },
          {
            text: '作用域、闭包',
            items: [
              {
                text: "作用域与作用域链",
                link: "/js/scope",
              },
              {
                text: "什么是闭包",
                link: "/js/closure",
              },
            ]
          },
          {
            text: "垃圾回收",
            link: "/js/garbage",
          },
          {
            text: '原型',
            items: [
              {
                text: "原型与原型链",
                link: "/js/prototype",
              },
            ]
          },
          {
            text: '异步、事件循环',
            items: [
              {
                text: "异步与事件循环",
                link: "/js/eventloop",
              },
              {
                text: "Promise 与 async/await",
                link: "/js/promise-async",
              },
            ]
          }

        ],
      },
      {
        text: "Typescript",
        items: []
      },
      {
        text: "Vue",
        items: [],
      },
      {
        text: "React",
        items: [],
      },
      {
        text: "工程化",
        items: [],
      },
      {
        text: "Node",
        items: [],
      },
      {
        text: "Git",
        items: [],
      },
      {
        text: "浏览器",
        items: [],
      },
      {
        text: "网络",
        items: [],
      },
      {
        text: "优化",
        items: [],
      },
      {
        text: "算法",
        items: [],
      },
      {
        text: "设计模式",
        items: [],
      },
      {
        text: "其他",
        items: [],
      }
    ],
    lastUpdated: true,
    search: {
      provider: "local",
    },
    markdown: {
      lineNumbers: true,
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
  },
};
