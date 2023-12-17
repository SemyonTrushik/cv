<template>
  <form class="form">
    <inputComponent
        label="Email"
        type="text"
        v-model="emailValue"
        :is-focused="isEmailFocused"
        @update:is-focused="updateIsEmailFocused"
    />
    <inputComponent
        type="password"
        label="Password"
        v-model="passwordValue"
        :is-focused="isPasswordFocused"
        @update:is-focused="updateIsPasswordFocused"
    />
    <inputComponent
        label="Phone"
        type="tel"
        v-model="PhoneValue"
        :is-focused="isPasswordFocused"
        @update:is-focused="updateIsPhoneFocused"
    />
    <buttonComponent button="Sign In"
                     :formValid="emailValue"
    />
  </form>
</template>

<script>
import inputComponent from './inputComponent.vue'
import buttonComponent from './buttonComponent.vue'

export default {
  components: {
    inputComponent,
    buttonComponent
  },
  data () {
    return {
      emailValue: '',
      passwordValue: '',
      PhoneValue: '',
      isEmailFocused: false,
      isPasswordFocused: false,
      isPhoneFocused: false,
      formValid: false
    }
  },
  methods: {
    updateIsEmailFocused (value) {
      this.isEmailFocused = value
    },
    updateIsPasswordFocused (value) {
      this.isPasswordFocused = value
    },
    updateIsPhoneFocused (value) {
      this.isPhoneFocused = value
    }
  }
}
</script>

<style></style>
