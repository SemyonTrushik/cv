<template>
  <button :type="type"
          class="btn">{{ button }}</button>
</template>

<script>
export default {
  props: {
    button: String,
    type: String
  }
}
</script>

<style scoped>
</style>
