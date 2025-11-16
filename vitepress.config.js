import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '面试题库',
  description: '记录常见的面试问题和答案',
  themeConfig: {
    sidebar: [
      {
        text: '前端面试题',
        link: '/frontend',
      },
      {
        text: '数据结构与算法',
        link: '/algorithm',
      },
    ],
  },
})
