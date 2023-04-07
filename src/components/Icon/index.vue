<template>
  <svg :class="['g-icon', { loading: isLoading }]">
    <use :xlink:href="`#i-${isLoading ? 'loading' : icon}`"></use>
  </svg>
</template>
<script>
export default {
  props: {
    icon: String,
    isLoading: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss">
.g-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;

  &.loading {
    animation: loading 0.8s ease infinite;
  }

  @keyframes loading {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
