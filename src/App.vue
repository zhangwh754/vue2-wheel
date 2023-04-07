<template>
  <div id="app">
    <Button />
    <Button label="你好" />
    <hr />

    <div class="bar">
      <Icon icon="setting" />
    </div>
  </div>
</template>

<script>
import Button from './components/Button'
import Icon from './components/Icon'

export default {
  name: 'App',
  components: {
    Button,
    Icon
  }
}
</script>

<style lang="scss">
#app {
  margin: 20px;

  .bar {
    font-size: 40px;
  }
}
</style>
