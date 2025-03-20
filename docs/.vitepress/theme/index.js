// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // Layout slots
    })
  },
  enhanceApp({ app }) {
    // Register global components if needed
  }
}