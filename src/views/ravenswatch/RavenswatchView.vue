<script setup lang="ts">
import Breadcrumb from 'primevue/breadcrumb'
import { useRavenswatchBreadCrumbsStore } from '../../stores/breadCrumbs'
import { storeToRefs } from 'pinia'
const ravenswatchBreadCrumbsStore = useRavenswatchBreadCrumbsStore()
const { home, model } = storeToRefs(ravenswatchBreadCrumbsStore)
</script>

<template>
  <Breadcrumb :home="home" :model="model">
    <template #item="{ item, props }">
      <router-link v-slot="{ href, navigate }" :to="item.route" custom>
        <a :href="href" v-bind="props.action" @click="navigate">
          <span :class="[item.icon, 'text-color']" />
          <span>{{ item.label }}</span>
        </a>
      </router-link>
    </template>
  </Breadcrumb>
  <div class="main-content germania-one">
    <div class="router-view">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:ital,wght@0,200..800;1,200..800&family=Germania+One&display=swap');

.germania-one {
  font-family: 'Germania One', system-ui;
  font-weight: 400;
  letter-spacing: 0ch;
}

.atkinson-next-200 {
  font-family: 'Atkinson Hyperlegible Next', sans-serif;
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;
}
.atkinson-next-300 {
  font-family: 'Atkinson Hyperlegible Next', sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}
.atkinson-next-400 {
  font-family: 'Atkinson Hyperlegible Next', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>

<style lang="scss" scoped>
.router-view {
  display: block;
  margin-left: 2em;
  margin-right: 2em;
}
.main-content {
  --p-primary-color: var(--p-red-500);
  --p-primary-color-50: var(--p-red-50);
  --p-primary-color-100: var(--p-red-100);
  --p-primary-color-200: var(--p-red-200);
  --p-primary-color-300: var(--p-red-300);
  --p-primary-color-400: var(--p-red-400);
  --p-primary-color-500: var(--p-red-500);
  --p-primary-color-600: var(--p-red-600);
  --p-primary-color-700: var(--p-red-700);
  --p-primary-color-800: var(--p-red-800);
  --p-primary-color-900: var(--p-red-900);
  --p-primary-color-950: var(--p-red-950);
  margin: 2em;
  margin-top: 0;
  justify-content: center;
}
</style>
