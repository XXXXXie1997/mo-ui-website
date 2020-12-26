<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <mo-button>button</mo-button>
  </div>
</template>

<script>
import {Button} from 'mo-ui-beta'
import 'mo-ui-beta/dist/index.css'

export default {
  name: 'App',
  components: {
    'mo-button':Button,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
