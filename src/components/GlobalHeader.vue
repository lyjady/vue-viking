<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a href="#" class="navbar-brand">专栏</a>
    <ul class="list-inline mb-0" v-if="!user.isLogin">
      <li class="list-inline-item">
        <router-link to="login" class="btn btn-outline-light my-2">登录</router-link>
      </li>
      <li class="list-inline-item">
        <router-link to="login" class="btn btn-outline-light my-2">注册</router-link>
      </li>
    </ul>
    <ul class="list-inline mb-0" v-else>
      <li class="list-inline-item">
        <dropdown :title="`你好 ${user.name}`">
          <dropdown-item disabled>
            <a href="#" class="dropdown-item">新建文章</a>
          </dropdown-item>
          <dropdown-item>
            <a href="#" class="dropdown-item">编辑资料</a>
          </dropdown-item>
          <dropdown-item>
            <a href="#" class="dropdown-item">退出登录</a>
          </dropdown-item>
        </dropdown>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { User } from '@/types/User'
import Dropdown from '@/components/Dropdown.vue'
import DropdownItem from '@/components/DropdownItem.vue'

export default defineComponent({
  name: 'GlobalHeader',
  components: { DropdownItem, Dropdown },
  props: {
    user: {
      type: Object as PropType<User>,
      required: true
    }
  }
})
</script>

<style scoped>

</style>
