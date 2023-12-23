<template>
  <div class="input-wrapper">
    <input
        v-model="inputValue"
        :id="inputId"
        :type="type"
        :class="{ 'inputInvalid': isInputTouchedAndEmpty }"
        @input="onInputValueChange"
        @focus="setFocus(true)"
        @blur="handleBlur(true)"
    />
    <label
        :for="inputId"
        :class="{ 'labelFocus': isInputFocusedOrFilled, 'labelInvalid': isInputTouchedAndEmpty }"
    >{{ label }}</label>
    <p class="require"
       v-if="isInputTouchedAndEmpty">{{ `Is field required` }}</p>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    type: String
  },
  data () {
    return {
      inputValue: '',
      isInputFocused: false,
      isInputTouched: false,
      inputId: `input-${Math.random().toString(36).substr(2, 9)}`
    }
  },
  computed: {
    isInputFocusedOrFilled () {
      return this.isInputFocused || this.inputValue.trim() !== '' || this.isInputTouchedAndEmpty
    },
    isInputTouchedAndEmpty () {
      return this.isInputTouched && this.inputValue.trim() === ''
    }
  },
  methods: {
    setFocus (value) {
      this.isInputFocused = value
    },
    handleBlur (value) {
      this.isInputTouched = value
    },
    onInputValueChange () {
      this.$emit('inputChange', this.inputValue, this.label)
    }
  }
}
</script>

<style lang="scss" scoped>
.input-wrapper {
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 15rem;
  margin-top: 2rem;
  .require {
    font-size: 0.8rem;
    color: var(--alert-color);
  }
}
</style>
