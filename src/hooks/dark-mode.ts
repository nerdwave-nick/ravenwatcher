import { useToast } from 'primevue'
import { useColorMode } from '@vueuse/core'
import { watch } from 'vue'

export const useDarkMode = () => {
  const toast = useToast()
  const mode = useColorMode({})

  const toggleColorMode = () => {
    if (mode.value == 'dark') {
      mode.value = 'light'
    } else {
      mode.value = 'dark'
    }
  }
  watch(mode, () => {
    toast.add({
      severity: 'info',
      summary: 'Color Mode',
      detail: `Changed to ${mode.value}!`,
      life: 1000,
    })
  })
  return { mode, toggleColorMode }
}
