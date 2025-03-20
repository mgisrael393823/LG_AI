---
layout: home
hero:
  name: LG Development
  text: AI Transformation Roadmap
  tagline: A comprehensive implementation framework for enhancing real estate operations through advanced AI methodologies
  image:
    src: https://placehold.co/800x400/4682B4/FFFFFF/png?text=AI+Transformation+Overview
    alt: AI Transformation Overview
  actions:
    - theme: brand
      text: Executive Summary
      link: ./executive-summary
    - theme: alt
      text: Implementation Areas
      link: ./implementation-areas/lp-matching
    - theme: alt
      text: Timeline
      link: ./timeline

features:
  - icon: 🤝
    title: LP Identification & Matching
    details: Intelligent matching system creating detailed LP profiles and automatically matching them with suitable investment opportunities.
    link: ./implementation-areas/lp-matching
  - icon: 📊
    title: Deal Pipeline Management
    details: Advanced deal screening engine that scores opportunities against multiple LP profiles simultaneously.
    link: ./implementation-areas/deal-pipeline
  - icon: 📈
    title: Market Analysis
    details: Predictive analytics system to forecast market performance in target geographies with automated monitoring.
    link: ./implementation-areas/market-analysis
  - icon: 💰
    title: Financial Modeling
    details: Advanced financial modeling system with standardized templates and sensitivity testing algorithms.
    link: ./implementation-areas/financial-modeling
  - icon: 👥
    title: Investor Relationship
    details: Advanced communication system with automated triggers and personalized content generation.
    link: ./implementation-areas/investor-management
  - icon: 🏢
    title: Asset Management
    details: Real-time performance monitoring with predictive maintenance algorithms and optimization recommendations.
    link: ./implementation-areas/asset-management
  - icon: 📝
    title: Investor Reporting
    details: Automated report generation with interactive dashboards and customized insights.
    link: ./implementation-areas/investor-reporting
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // This ensures VitePress renders the content correctly
  console.log('Home page content mounted')
})
</script>

# Transforming Real Estate Operations

<p class="subtitle">Enhancing efficiency and decision-making through advanced AI methodologies</p>

<div class="metrics-container">
  <div class="metric-item">
    <div class="metric-value">50-75%</div>
    <div class="metric-label">Process Efficiency Gains</div>
  </div>
  <div class="metric-item">
    <div class="metric-value">20-35%</div>
    <div class="metric-label">Decision Quality Improvement</div>
  </div>
  <div class="metric-item">
    <div class="metric-value">15-40%</div>
    <div class="metric-label">ROI Improvement</div>
  </div>
</div>

<div class="cta-container">
  <h2>Ready to Transform Your Operations?</h2>
  <p>Explore our comprehensive implementation framework and start your AI transformation journey today.</p>
  <div class="action-buttons">
    <a href="./executive-summary" class="action-button primary">View Executive Summary</a>
    <a href="./timeline" class="action-button secondary">See Implementation Timeline</a>
  </div>
</div>

<style>
.subtitle {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  color: #666;
}

.metrics-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 3rem 0;
}

.metric-item {
  text-align: center;
  flex: 1;
  min-width: 200px;
  padding: 1.5rem;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.metric-value {
  font-size: 2.5rem;
  font-weight: bold;
  color: #3a70b1;
  margin-bottom: 0.5rem;
}

.metric-label {
  font-size: 1.1rem;
  color: #555;
}

.cta-container {
  margin: 4rem auto;
  padding: 2rem;
  max-width: 800px;
  text-align: center;
  background-color: #f0f5ff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.cta-container h2 {
  margin-bottom: 1rem;
  color: #333;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.action-button {
  padding: 0.8rem 1.6rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}

.action-button.primary {
  background-color: #3a70b1;
  color: white;
}

.action-button.primary:hover {
  background-color: #2c5a8f;
  transform: translateY(-2px);
}

.action-button.secondary {
  border: 1px solid #3a70b1;
  color: #3a70b1;
}

.action-button.secondary:hover {
  background-color: #f0f5ff;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .metric-item {
    flex-basis: 100%;
  }
  
  .action-buttons {
    flex-direction: column;
  }
}
</style>