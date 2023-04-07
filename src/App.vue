<template>
  <div id="app">
    <Button />
    <Button label="你好" />
  </div>
</template>

<script>
import Button from './components/Button'

export default {
  name: 'App',
  components: {
    Button,
  },
}
</script>

<style lang="scss">
#app {
  margin: 20px;
}
</style>
