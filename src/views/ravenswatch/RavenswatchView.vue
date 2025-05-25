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
  <RouterView class="main-content" />
</template>

<style lang="scss" scoped>
.main-content {
  margin: 2em;
  margin-top: 0;
}
</style>
