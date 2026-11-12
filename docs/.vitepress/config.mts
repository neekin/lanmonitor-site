import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'LanMonitor',
  titleTemplate: ':title · 局域网桌面监控系统',
  description:
    'LanMonitor 是一套服务端 + 客户端架构的局域网桌面监控系统，提供无人值守自动录屏、实时屏幕查看、远程控制、进程监控、离线授权与客户端自动升级，适用于企业终端管理、机房教学管理等获得明确授权的场景。',

  // GitHub Pages 项目页部署路径
  base: '/lanmonitor-site/',
  ignoreDeadLinks: true,

  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '产品与服务', link: '/product/' },
      { text: '关于我们', link: '/about' },
      {
        text: 'QQ 交流：334132462',
        link: '/about'
      }
    ],

    sidebar: {
      '/product/': [
        {
          text: '产品与服务',
          items: [
            { text: '产品概述', link: '/product/' },
            { text: '核心功能', link: '/product/features' },
            { text: '版本与授权', link: '/product/license' }
          ]
        }
      ]
    },

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/neekin/LanMonitor' }
    ],

    footer: {
      message:
        '本软件仅限在获得明确授权的环境中使用，请确保被监控人员已被告知。',
      copyright:
        'Copyright © 2026 LanMonitor · 商务合作与技术支持：QQ 334132462'
    },

    docFooter: { prev: '上一页', next: '下一页' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
