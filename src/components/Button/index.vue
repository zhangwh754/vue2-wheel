<template>
  <button class="w-button">
    <span class="w-button-label">{{ label }}</span>
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '提交'
    }
  }
}
</script>

<style scoped lang="scss">
.w-button {
  padding: 0 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-size: $font-size;
  color: $color;
  height: $button-height;
  background-color: $button-bg;
  border: 1px solid $border-color;
  border-radius: $border-radius;

  &:active {
    background-color: $button-active-bg;
  }
  &:hover {
    border-color: $border-color-hover;
  }
  &:focus {
    outline: none;
  }

  & {
    &-icon {
      order: 1;
      margin-right: 0.3em;
    }
    &-label {
      order: 2;
    }
  }
}
</style>
