<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center" v-if="column">
      <div class="col-3 text-center">
        <img :src="column.avatar || '@/assets/avatar.jpg'" :alt="column.title">
      </div>
      <div class="col-9">
        <h4>{{ column.title }}</h4>
        <p class="text-muted">{{ column.description }}</p>
      </div>
    </div>
    <post-list :posts="posts" />
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { RootState } from '@/types/StoreType'
import PostList from '@/components/PostList.vue'

export default defineComponent({
  name: 'ColumnDetail',
  components: { PostList },
  setup () {
    const store = useStore<RootState>()
    const route = useRoute()
    const columnId = +route.params.id
    const column = store.state.columns.find(item => item.id === columnId)
    const posts = store.state.posts.filter(item => item.columnId === columnId)
    return {
      column,
      posts
    }
  }
})
</script>

<style scoped>

</style>
