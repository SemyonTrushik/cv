<template>
  <div class="main">
    <headerComponent/>
    <router-view/>
  </div>
</template>

<script>

import headerComponent from './components/headerComponent.vue'

export default {
  name: 'App',
  components: {
    headerComponent
  }
}
</script>

<style>
</style>
