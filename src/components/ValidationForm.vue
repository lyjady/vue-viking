<template>
  <form class="validation-form-container" @submit.prevent="submit">
    <slot/>
    <div class="submit-area">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import { emitter } from '@/main'
import { Handler } from 'mitt'

type ValidationFunction = () => boolean

export default defineComponent({
  name: 'ValidationForm',
  emits: ['form-submit'],
  setup (prop, context) {
    const validations: ValidationFunction[] = []
    const submit = () => {
      const result = validations.map(validation => validation()).every(result => result)
      context.emit('form-submit', result)
    }
    // const method: Handler<ValidationFunction> = (validationFunction: ValidationFunction) => {
    //   validations.push(validationFunction)
    // }
    // emitter.on<ValidationFunction>('validation-input-create', method)
    // onUnmounted(() => emitter.off<ValidationFunction>('validation-input-create', method))
    return {
      submit
    }
  }
})
</script>

<style scoped>

</style>
