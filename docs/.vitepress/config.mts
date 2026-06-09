import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config

const isEdgeOne = process.env.EDGEONE === '1'
const baseConfig = isEdgeOne ? '/' : '/vc-lab/'

export default defineConfig({
  lang: 'zh-CN',
  title: "设计课程第一期",
  description: "从问题洞察到产品概念的设计课程",
  base: baseConfig,
  markdown: {
    math: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/datawhale-logo.png',
    nav: [
      { text: '课程首页', link: '/' },
      { text: '开始学习', link: '/chapter1/' },
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },
    sidebar: [
      {
        items: [
          { text: '第1章：认知唤醒与问题洞察', link: '/chapter1/' },
          { text: '第2章：产品概念与意象转化',
            items: [
              { text: '第2.1节：绘制产品设计蓝图', link: '/chapter2/chapter2_1' },
              { text: '第2.2节：从关键词到视觉原型', link: '/chapter2/chapter2_2' }
            ]
           }
        ]
      }
    ],

    socialLinks: [
    ],

    footer: {
      message: '<a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2026002630号-1</a> | <a href="https://beian.mps.gov.cn/#/query/webSearch?code=11010602202215" rel="noreferrer" target="_blank">京公网安备11010602202215号</a>',
      copyright: '本作品采用 <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议（CC BY-NC-SA 4.0）</a> 进行许可'
    }
  }
})
