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
  <h1>Heroes</h1>
  <HeroesCategory class="content" />
</template>

<style lang="scss" scoped></style>
