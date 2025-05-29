<script setup lang="ts">
import { RouterView } from 'vue-router'
import Sidebar from './components/SidebarComponent.vue'
import GameSelection from './components/GameSelection.vue'
import Toast from 'primevue/toast'
</script>

<template>
  <div class="app-container">
    <Sidebar />
    <GameSelection />
    <Toast position="bottom-right" />
    <div class="main-content">
      <RouterView />
    </div>
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
.app-container {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.main-content {
  width: calc(100% - 60px);
  display: block;
  margin: 0px;
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
</style>
