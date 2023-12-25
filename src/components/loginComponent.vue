<template>
  <div>
    <form v-if="isRegistrationFormVisible">
      <buttonComponent
          button="to Login"
          @click="switchForms"
      />
      <inputComponent
          label="Email"
          type="text"
          @inputChange="handleInputChange('emailValue', $event)"
      />
      <inputComponent
          type="password"
          label="Password"
          @inputChange="handleInputChange('passwordValue', $event)"
      />
      <inputComponent
          label="Phone"
          type="tel"
          @inputChange="handleInputChange('phoneValue', $event)"
      />
      <buttonComponent
          type="button"
          @click="registration"
          :disabled="isFormInvalid"
          button="Sign In"
      />
    </form>

    <form v-else>
      <buttonComponent
          button="to Registration"
          @click="switchForms"
      />
      <inputComponent
          label="Email"
          type="text"
          @inputChange="handleInputChange('emailValue', $event)"
      />
      <inputComponent
          type="password"
          label="Password"
          @inputChange="handleInputChange('passwordValue', $event)"
      />
      <buttonComponent
          type="button"
          @click="login"
          :disabled="isFormInvalid"
          button="Log In"
      />
    </form>
  </div>
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
      isRegistrationFormVisible: true,
      userData: {
        emailValue: '',
        passwordValue: '',
        phoneValue: ''
      }
    }
  },
  computed: {
    isFormInvalid () {
      const isEmailEmpty = this.userData.emailValue.trim() === ''
      const isPasswordEmpty = this.userData.passwordValue.trim() === ''
      const isPhoneEmpty = this.isRegistrationFormVisible
        ? this.userData.phoneValue.trim() === ''
        : false

      return isEmailEmpty || isPasswordEmpty || isPhoneEmpty
    }
  },
  methods: {
    handleInputChange (property, value) {
      this.userData[property] = value
    },
    switchForms () {
      this.clearForms()
      this.isRegistrationFormVisible = !this.isRegistrationFormVisible
    },
    login () {
      console.log(this.userData.emailValue, this.userData.passwordValue)
    },
    registration () {
      console.log(this.userData.emailValue, this.userData.passwordValue, this.userData.phoneValue)
    },
    clearForms () {
      this.userData.emailValue = ''
      this.userData.passwordValue = ''
      this.userData.phoneValue = ''
    }
  }
}
</script>

<style scoped lang="scss">
</style>
