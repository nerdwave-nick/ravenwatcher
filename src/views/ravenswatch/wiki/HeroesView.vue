<script setup lang="ts">
import HeroesCategory from './../../../components/ravenswatch/wiki/HeroesCategory.vue'
import {
  useRavenswatchBreadCrumbsStore,
  HeroesBreadCrumb,
  WikiBreadCrumb,
} from '../../../stores/breadCrumbs.ts'
const { setBreadCrumbs } = useRavenswatchBreadCrumbsStore()
setBreadCrumbs(WikiBreadCrumb, HeroesBreadCrumb)
</script>

<template>
  <div class="heroes-view-main">
    <h1>Heroes</h1>
    <HeroesCategory class="content" />
  </div>
</template>

<style lang="scss" scoped>
.heroes-view-main {
  margin: 2em;
  margin-top: 0em;
}
</style>
