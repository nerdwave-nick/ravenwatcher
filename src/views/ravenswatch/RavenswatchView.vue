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
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Germania+One&display=swap');
.germania-one {
  font-family: 'Germania One', system-ui;
  font-weight: 400;
  letter-spacing: 0ch;
}
.main-content {
  margin: 2em;
  margin-top: 0;
}
</style>
