<script setup lang="ts">
import { AvailableCharacters } from '../../../components/ravenswatch/wiki/characters'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import {
  useRavenswatchBreadCrumbsStore,
  HeroesBreadCrumb,
  WikiBreadCrumb,
} from '../../../stores/breadCrumbs.ts'
const { setBreadCrumbs } = useRavenswatchBreadCrumbsStore()
const route = useRoute()

const characterInfo = computed(() => {
  return AvailableCharacters.find((x) => x.id == route.params.hero)!
})
setBreadCrumbs(WikiBreadCrumb, HeroesBreadCrumb, {
  label: characterInfo.value.id,
  route: characterInfo.value.route,
})
</script>

<template>
  <h1>{{ characterInfo.name }}</h1>
</template>

<style lang="scss" scoped></style>
