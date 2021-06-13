<template>
  <div class="container">
    <GlobalHeader :user="user" />
    <validation-form @form-submit="submit">
      <validation-form-item
        label="邮箱"
        v-model="emailRef"
        :rules="[{ type: 'required', message: '邮箱不能为空' }, { type: 'email', message: '请输入合法的邮箱' }]"
        type="text"
        placeholder="请输入邮箱地址"
      />
      <validation-form-item
        label="密码"
        v-model="passwordRef"
        :rules="[{ type: 'required', message: '密码不能为空' }]"
        type="password"
        placeholder="请输入密码"
      />
      <template #submit>
        <button type="submit" class="btn btn-danger">提交</button>
      </template>
    </validation-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import GlobalHeader from '@/components/GlobalHeader.vue'
import { User } from '@/types/User'
import ValidationFormItem from '@/components/ValidationFormItem.vue'
import ValidationForm from '@/components/ValidationForm.vue'
const user: User = {
  isLogin: true,
  id: 1,
  name: 'Jack'
}
export default defineComponent({
  name: 'App',
  components: {
    ValidationForm,
    ValidationFormItem,
    GlobalHeader
  },
  setup () {
    const emailRef = ref('')
    const passwordRef = ref('')
    const submit = (result: boolean) => console.log('submit', result)
    return {
      user,
      emailRef,
      passwordRef,
      submit
    }
  }
})
</script>

<style>

</style>
