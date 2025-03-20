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
    // Register global components if needed
  },
  setup() {
    onMounted(() => {
      // Wait for DOM to be ready
      setTimeout(() => {
        // Create a modal element for expanded diagrams
        const modal = document.createElement('div')
        modal.className = 'diagram-modal'
        
        // Add close button
        const closeButton = document.createElement('div')
        closeButton.className = 'close-button'
        closeButton.textContent = '×'
        closeButton.addEventListener('click', () => {
          modal.classList.remove('active')
        })
        
        // Create image element for modal
        const modalImg = document.createElement('img')
        modal.appendChild(modalImg)
        modal.appendChild(closeButton)
        document.body.appendChild(modal)
        
        // Close modal on background click
        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            modal.classList.remove('active')
          }
        })
        
        // Escape key closes modal
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active')
          }
        })
        
        // Add click event to all diagram images and create hint elements
        const diagramContainers = document.querySelectorAll('.diagram-container')
        
        diagramContainers.forEach(container => {
          const img = container.querySelector('img')
          if (!img) return
          
          // Add expand hint element
          const hint = document.createElement('div')
          hint.className = 'expand-hint'
          hint.textContent = 'Click to expand'
          container.appendChild(hint)
          
          // Add tooltip attribute for accessibility
          img.setAttribute('title', 'Click to expand')
          img.setAttribute('alt', img.getAttribute('alt') || 'Diagram - Click to expand')
          
          // Add click event to image
          img.addEventListener('click', () => {
            modalImg.src = img.src
            modal.classList.add('active')
          })
        })
      }, 1000) // Delay to ensure all content is loaded
    })
  }
}