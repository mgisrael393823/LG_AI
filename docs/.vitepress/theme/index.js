// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import MermaidDiagram from './MermaidDiagram.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // Layout slots
    })
  },
  enhanceApp({ app }) {
    // Register the Mermaid component globally
    app.component('MermaidDiagram', MermaidDiagram)
    
    if (typeof window !== 'undefined') {
      import('mermaid').then(module => {
        const mermaid = module.default
        mermaid.initialize({ 
          startOnLoad: true,
          theme: 'default'
        })
      })
    }
  }
}