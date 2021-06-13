<template>
  <div class="mb-3">
    <label class="form-label">{{ label }}</label>
    <input
      class="form-control"
      :class="{ 'is-invalid': inputData.error }"
      :value="inputData.value"
      v-bind="$attrs"
      @blur="validationInput"
      @input="updateValue"
    >
    <div v-if="inputData.error" class="invalid-feedback">{{ inputData.message }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
import { Rule } from '@/types/RuleProps'
import { emitter } from '@/main'
const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const phoneReg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/
export default defineComponent({
  name: 'ValidationFormItem',
  inheritAttrs: false,
  props: {
    rules: {
      type: Array as PropType<Rule>,
      required: false
    },
    label: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      required: false
    }
  },
  setup (prop, context) {
    const inputData = reactive({
      value: prop.modelValue || '',
      error: false,
      message: ''
    })
    const validationInput = () => {
      const allPass = prop.rules?.every(rule => {
        switch (rule.type) {
          case 'required':
            if (inputData.value === '') {
              inputData.error = true
              inputData.message = rule.message
              return false
            } else {
              inputData.error = false
              inputData.message = ''
              return true
            }
          case 'phone':
            if (!phoneReg.test(inputData.value)) {
              inputData.error = true
              inputData.message = rule.message
              return false
            } else {
              inputData.error = false
              inputData.message = ''
              return true
            }
          case 'email':
            if (!emailReg.test(inputData.value)) {
              inputData.error = true
              inputData.message = rule.message
              return false
            } else {
              inputData.error = false
              inputData.message = ''
              return true
            }
          default:
            return true
        }
      })
      return typeof allPass === 'undefined' ? true : allPass
    }
    emitter.emit('validation-input-create', validationInput)
    const updateValue = (e: KeyboardEvent) => {
      const value = (e.target as HTMLInputElement).value
      inputData.value = value
      context.emit('update:modelValue', value)
    }
    return {
      validationInput,
      updateValue,
      inputData
    }
  }
})
</script>

<style scoped>

</style>
