<template>
  <div id="app">
    <Button />
    <Button icon="setting" :isLoading="loading2" />
    <Button icon="setting" iconPosition="right" :isLoading="loading3" />
    <br />
    <button @click="btnClick">btnClick</button>

    <div class="bar">
      <Icon icon="left" :isLoading="loading2" />
      <Icon icon="left" :isLoading="loading2" />
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
  },
  data() {
    return {
      loading2: false,
      loading3: false
    }
  },
  methods: {
    btnClick() {
      this.loading2 = false
      this.loading3 = false

      setTimeout(() => {
        this.loading2 = true
        this.loading3 = true
      }, 3000)
    }
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
