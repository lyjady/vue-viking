<template>
  <div class="mt-5 mb-5">
    <h4>请登录</h4><br/>
    <validation-form @form-submit="login">
      <validation-form-item label="邮箱" placeholder="请输入邮箱地址" :rules="[{ type: 'required', message: '请输入邮箱' }, { type: 'email', message: '请输入正确的邮箱' }]" />
      <validation-form-item label="密码" placeholder="请输入登录密码" :rules="[{ type: 'required', message: '请输入邮箱' }]" type="password" />
    </validation-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import ValidationForm from '@/components/ValidationForm.vue'
import ValidationFormItem from '@/components/ValidationFormItem.vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Login',
  components: { ValidationForm, ValidationFormItem },
  setup () {
    const store = useStore()
    const router = useRouter()
    const login = () => {
      store.commit('setUser', { id: 1, name: 'Jack' })
      router.push({ name: 'Home' })
    }
    return {
      login
    }
  }
})
</script>

<style scoped>

</style>
