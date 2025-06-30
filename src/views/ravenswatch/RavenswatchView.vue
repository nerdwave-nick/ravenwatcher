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
  <div class="ravenswatch-main-content germania-one">
    <div class="ravenswatch-router-view">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:ital,wght@0,200..800;1,200..800&family=Germania+One&display=swap');

:root {
  --r-color-green: var(--p-green-600);
  --r-color-red: var(--p-red-600);
  --r-color-yellow: var(--p-yellow-600);
  --r-color-purple: var(--p-violet-600);
  --r-color-grey: #b1b2b5;
}

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

.grey {
  color: var(--r-color-grey);
}
.green {
  color: var(--r-color-green);
}
.red {
  color: var(--r-color-red);
}
.yellow {
  color: var(--r-color-yellow);
}
.purple {
  color: var(--r-color-purple);
}
</style>

<style lang="scss" scoped>
.ravenswatch-router-view {
  display: block;
  margin-left: 2em;
  margin-right: 2em;
}
.ravenswatch-main-content {
  margin: 2em;
  margin-top: 0;
  justify-content: center;
}
</style>
