import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '设计课程-第一期',
  description: 'Datawhale设计课程第一期正式版',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '第一章', link: '/chapter1/' },
      { text: '第二章', link: '/chapter2/' },
      { text: '第三章', link: '/chapter3/' },
    ],
    sidebar: [
      {
        text: '课程内容',
        items: [
          { text: '第一章 设计基础', link: '/chapter1/' },
          { text: '第二章 设计原则', link: '/chapter2/' },
          { text: '第三章 实践项目', link: '/chapter3/' },
        ]
      }
    ]
  }
})
