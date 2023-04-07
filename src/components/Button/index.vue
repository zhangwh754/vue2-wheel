<template>
  <button :class="['w-button', { reverse: iconPosition === 'right' }]">
    <GIcon v-if="icon" v-bind="$attrs" :icon="icon" class="w-button-icon" />
    <span class="w-button-label">{{ label }}</span>
  </button>
</template>

<script>
import GIcon from '../Icon/index.vue'
export default {
  components: {
    GIcon
  },
  props: {
    label: {
      type: String,
      default: '提交'
    },
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator: function (value) {
        return ['left', 'right'].includes(value)
      }
    }
  },
  data() {
    return {}
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

  &.reverse {
    .w-button-icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
    .w-button-label {
      order: 1;
    }
  }
}
</style>
