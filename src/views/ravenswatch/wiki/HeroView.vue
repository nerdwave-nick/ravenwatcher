<script setup lang="ts">
import {
  Character,
  CharacterRoutes,
  getCharacterWikiRoute,
} from '../../../components/ravenswatch/wiki/characters'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import {
  useRavenswatchBreadCrumbsStore,
  HeroesBreadCrumb,
  WikiBreadCrumb,
} from '../../../stores/breadCrumbs.ts'
const { setBreadCrumbs } = useRavenswatchBreadCrumbsStore()
const route = useRoute()

const routeAsCharacter = computed(() => {
  if ((route.params.hero as Character) in Character) {
    return route.params.hero as Character
  }
  return null
})

const characterInfo = computed(() => {
  return CharacterRoutes[route.params.hero as Character]
})
setBreadCrumbs(WikiBreadCrumb, HeroesBreadCrumb, {
  label: characterInfo.value.breadcrumb,
  route: getCharacterWikiRoute(route.params.hero as Character),
})
</script>

<template>
  <h1>{{ characterInfo.name }}</h1>
</template>

<style lang="scss" scoped></style>
