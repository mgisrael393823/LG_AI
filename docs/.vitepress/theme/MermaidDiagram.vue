<template>
  <div class="mermaid-wrapper">
    <div class="mermaid" v-html="diagram"></div>
  </div>
</template>

<script>
export default {
  props: {
    diagram: {
      type: String,
      required: true
    }
  },
  mounted() {
    if (typeof window !== 'undefined' && window.mermaid) {
      window.mermaid.init(undefined, document.querySelectorAll('.mermaid'));
    }
  }
}
</script>

<style>
.mermaid-wrapper {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
</style>