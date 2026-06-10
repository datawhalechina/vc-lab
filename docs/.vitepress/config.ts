import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '设计课程第一期',
  description: '用14天，从生活洞察出发，亲手将模糊的"不爽"变成可视化产品概念',
  base: '/VC-Lab/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '第一章', link: '/chapter1/' },
      { text: '第二章', link: '/chapter2/' },
      { text: '第三章', link: '/chapter3/' },
    ],
    sidebar: [
      {
        text: '学习路线',
        items: [
          { text: '首页', link: '/' },
          { text: '第一章：认知唤醒与问题洞察', link: '/chapter1/' },
          { text: '第二章：战略分析与概念定义', link: '/chapter2/' },
          { text: '第三章：视觉创造与成果展示', link: '/chapter3/' },
        ]
      }
    ]
  }
})
