// .vitepress/config.js
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'LG Development AI Transformation',
  description: 'AI Transformation Roadmap for LG Development',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Executive Summary', link: '/executive-summary' },
      { text: 'Implementation Areas', link: '/implementation-areas/lp-matching' },
      { text: 'Timeline', link: '/timeline' },
      { text: 'Metrics', link: '/metrics' },
    ],
    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Executive Summary', link: '/executive-summary' },
          { text: 'Timeline', link: '/timeline' },
          { text: 'Metrics', link: '/metrics' },
          { text: 'Change Management', link: '/change-management' },
        ]
      },
      {
        text: 'Implementation Areas',
        items: [
          { text: 'LP Matching', link: '/implementation-areas/lp-matching' },
          { text: 'Deal Pipeline', link: '/implementation-areas/deal-pipeline' },
          { text: 'Market Analysis', link: '/implementation-areas/market-analysis' },
          { text: 'Financial Modeling', link: '/implementation-areas/financial-modeling' },
          { text: 'Investor Management', link: '/implementation-areas/investor-management' },
          { text: 'Asset Management', link: '/implementation-areas/asset-management' },
          { text: 'Investor Reporting', link: '/implementation-areas/investor-reporting' },
        ]
      }
    ]
  }
})