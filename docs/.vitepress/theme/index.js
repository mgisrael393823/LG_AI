// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import { h, onMounted } from 'vue'
import './custom.css'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // Layout slots
    })
  },
  enhanceApp({ app }) {
    // No need to register a component as we're using standard markdown code blocks
  },
  setup() {
    onMounted(() => {
      // Initialize mermaid on client-side only
      if (typeof window !== 'undefined') {
        import('mermaid').then(module => {
          const mermaid = module.default
          mermaid.initialize({ 
            startOnLoad: true,
            theme: 'default',
            securityLevel: 'loose',
            flowchart: {
              htmlLabels: true
            }
          })
          
          // We need to explicitly call this to process any mermaid diagrams in the initial load
          setTimeout(() => {
            mermaid.init(undefined, document.querySelectorAll('.mermaid'))
          }, 500)
        })
      }
    })
  }
}