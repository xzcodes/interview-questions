export default {
  // 站点级选项
  lang: 'zh',
  title: '前端面试题库',
  description: "web前端面试,vue面试题,react面试题,js面试题",
  themeConfig: {
    outline: false,
    aside: false,
    sidebar: [
      {
        text: 'HTML',
        items: []
      },
      {
        text: 'CSS',
        items: []
      },
      {
        text: 'JavaScript',
        // collapsed: false,
        items: [
          {
            text: '什么是闭包',
            link: '/js/closure'
          },
          {
            text: '事件冒泡和事件捕获',
            link: '/js/event'
          }
        ]
      }
    ],
    lastUpdated: true,
    search: {
      provider: 'local'
    },
    markdown: {
      lineNumbers: true,
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
  }
}