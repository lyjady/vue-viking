import { Ref, onMounted, onUnmounted, ref } from 'vue'

export const useClickOutside = (element: Ref<null | HTMLElement>) => {
  const isClickOutside = ref(false)
  const click = (e: MouseEvent) => {
    if (element.value) {
      isClickOutside.value = !element.value.contains(e.target as HTMLElement)
    }
  }
  onMounted(() => document.addEventListener('click', click))
  onUnmounted(() => document.removeEventListener('click', click))
  return isClickOutside
}
