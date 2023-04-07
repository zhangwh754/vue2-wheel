<template>
  <svg class="g-icon">
    <use :xlink:href="`#i-${icon}`"></use>
  </svg>
</template>
<script>
export default {
  props: {
    icon: String
  }
}
</script>
<style lang="scss">
.g-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
}
</style>
