import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { MenuItem } from 'primevue/menuitem'

export const WikiBreadCrumb = { label: 'wiki', route: '/ravenswatch/wiki' }
export const BuilderBreadCrumb = { label: 'builder', route: '/ravenswatch/builder' }
export const HeroesBreadCrumb = { label: 'heroes', route: '/ravenswatch/wiki/heroes' }

export const useRavenswatchBreadCrumbsStore = defineStore('ravenswatch-bread-crumbs', () => {
  const home = ref({
    icon: 'pi pi-home',
    route: '/ravenswatch',
  })
  const model = ref<MenuItem[]>([])
  function setBreadCrumbs(...newCrumbs: MenuItem[]) {
    model.value = newCrumbs
  }
  return { home, model, setBreadCrumbs }
})
