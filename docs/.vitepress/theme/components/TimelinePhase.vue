<template>
  <div class="timeline-phase">
    <div class="timeline-header">
      <h3>{{ title }}</h3>
      <div class="timeline-duration">{{ duration }}</div>
    </div>
    
    <div class="timeline-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.timeline-phase {
  margin-bottom: 3rem;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.timeline-header h3 {
  margin: 0;
  font-size: 1.4rem;
  color: var(--vp-c-brand);
}

.timeline-duration {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  padding: 0.3rem 0.8rem;
  background-color: var(--vp-c-bg);
  border-radius: 16px;
}

.timeline-content {
  color: var(--vp-c-text-1);
}

@media (max-width: 650px) {
  .timeline-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .timeline-duration {
    margin-top: 0.5rem;
  }
}
</style>