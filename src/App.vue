<template>
  <div class="main">
    <!-- <login-component msg="Welcome to Your Vue.js App"/>
    <accountComponent/>
    <codeList/> -->
    <mainComponent/>
  </div>
</template>

<script>
// import LoginComponent from './components/loginComponent.vue'
// import accountComponent from './components/accountComponent.vue'
// import codeList from './components/codeListComponent.vue'
import mainComponent from './components/mainComponent.vue'

export default {
  name: 'App',
  components: {
    mainComponent
    // LoginComponent,
    // codeList,
    // accountComponent
  }
}
</script>

<style>
</style>
