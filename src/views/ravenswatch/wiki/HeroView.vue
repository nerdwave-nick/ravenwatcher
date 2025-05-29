<script setup lang="ts">
import {
  Character,
  CharacterRoutes,
  getCharacterWikiRoute,
} from '../../../components/ravenswatch/wiki/characters'
import HeroComponent from '../../../components/ravenswatch/wiki/HeroComponent.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import {
  useRavenswatchBreadCrumbsStore,
  HeroesBreadCrumb,
  WikiBreadCrumb,
} from '../../../stores/breadCrumbs.ts'
const { setBreadCrumbs } = useRavenswatchBreadCrumbsStore()
const route = useRoute()

const character = computed(() => {
  return route.params.hero as Character
})

const characterInfo = computed(() => {
  return CharacterRoutes[character.value]
})
setBreadCrumbs(WikiBreadCrumb, HeroesBreadCrumb, {
  label: characterInfo.value.breadcrumb,
  route: getCharacterWikiRoute(route.params.hero as Character),
})
</script>

<template>
  <HeroComponent :hero="character" />
</template>

<style lang="scss" scoped></style>
