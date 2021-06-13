<template>
  <li class="dropdown-option pointer" :class="{'is-disabled' : disabled}">
    <slot/>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DropdownItem',
  props: {
    disabled: {
      type: Boolean,
      required: false
    }
  }
})
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.dropdown-option.is-disabled {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}
</style>
