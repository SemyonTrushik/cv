<template>
  <div class="main">
    <login-component msg="Welcome to Your Vue.js App"/>
    <!-- <accountComponent/>
    <codeList/> -->
    <!-- <aboutProject/> -->
  </div>
</template>

<script>
import LoginComponent from './components/loginComponent.vue'
// import accountComponent from './components/accountComponent.vue'
// import codeList from './components/codeListComponent.vue'
// import aboutProject from './components/aboutProject.vue'

export default {
  name: 'App',
  components: {
    // aboutProject
    LoginComponent
    // codeList,
    // accountComponent
  }
}
</script>

<style>
</style>
