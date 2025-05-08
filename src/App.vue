<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Toast from 'primevue/toast'
import Button from 'primevue/button'
import Badge from 'primevue/badge'
import Menubar from 'primevue/menubar'
import type { MenuItem } from 'primevue/menuitem'
import { ref } from 'vue'
import { routes } from './router/index'
import { useToast } from 'primevue'
import { useDarkMode } from './hooks/dark-mode'

const route = useRoute()

console.log(route)
const toast = useToast()
const routeItems = routes.map<MenuItem>((x) => {
  return {
    route: x.path,
    label: (x.name as string) ?? x.path,
  }
})
const menuItems = ref<MenuItem[]>(routeItems)
const triggerToast = async () => {
  toast.add({
    severity: 'info',
    summary: 'Success',
    detail: 'Dark mode toggled!',
    life: 3000,
  })
}
const { toggleColorMode } = useDarkMode()
</script>

<template>
  <div class="app-container">
    <Toast position="bottom-right" />
    <Menubar :model="menuItems">
      <template #start>
        <RouterLink v-ripple v-slot="{ href, navigate }" :to="routes[0]" custom>
          <a v-ripple class="logo" :href="href" @click="navigate">
            <img class="logo" src="@/assets/nerdwave-small.svg" />
          </a>
        </RouterLink>
      </template>
      <template #item="{ item, props }">
        <RouterLink v-ripple v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <Button
            link
            v-ripple
            v-bind="props.action"
            :class="{ 'selected-underline': item.route == route.path }"
            :href="href"
            :label="item.label as string"
            @click="navigate"
          />
        </RouterLink>
      </template>
      <template #end>
        <Button
          text
          aria-label="Toggle Dark Mode"
          icon="pi pi-palette"
          @click="toggleColorMode()"
        />
      </template>
    </Menubar>
    <Button icon="pi pi-check" @click="triggerToast" />
    <RouterView class="main-content" />
  </div>
</template>

<style lang="scss" scoped>
.selected-underline {
  text-decoration: underline;
  text-decoration-color: var(--p-primary-color);
}
.logo {
  height: 35px;
  transition: filter 0.1s linear;
  :hover {
    filter: drop-shadow(0px 0px 9px var(--p-primary-color));
  }
}
</style>
<style lang="scss">
:root {
  font-family: 'DM Mono', monospace;
  font-weight: 300;
  letter-spacing: -0.05ch;
}

body {
  margin: 0;
  background-color: var(--p-content-background);
  font-family: var(--font-family);
  font-weight: 400;
  color: var(--p-text-color);
  text-decoration-color: var(--p-primary-color);
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
