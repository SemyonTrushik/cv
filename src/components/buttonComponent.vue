<template>
  <button
      class="btn">{{ button }}</button>
</template>
<script>
export default {
  props: {
    button: String
  },
  data () {
    return {
      formInvalid: false
    }
  }
}
</script>
