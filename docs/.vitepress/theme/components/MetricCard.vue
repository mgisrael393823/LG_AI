<template>
  <div class="metric-card" :class="type">
    <div class="metric-title">{{ title }}</div>
    <div class="metric-value">{{ value }}</div>
    <div class="metric-description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'efficiency',
      validator: (value) => ['efficiency', 'quality', 'business'].includes(value)
    }
  }
}
</script>

<style scoped>
.metric-card {
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.metric-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.metric-card.efficiency {
  background-color: #e6f3ff;
  border-left: 4px solid #0066cc;
}

.metric-card.quality {
  background-color: #e6ffe6;
  border-left: 4px solid #006600;
}

.metric-card.business {
  background-color: #fff8e0;
  border-left: 4px solid #cc9900;
}

.metric-title {
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.metric-value {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0.5rem 0;
  color: var(--vp-c-brand);
}

.metric-description {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}
</style>