<script setup lang="ts">
import { defineProps } from 'vue'
import {
  Character,
  CharacterRoutes,
  CharacterAbilities,
} from '../../../components/ravenswatch/wiki/characters'
import { computed } from 'vue'
import MoveSet from './MoveSet.vue'

import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'

const props = defineProps<{
  hero: Character
}>()

const info = computed(() => {
  return CharacterRoutes[props.hero]
})
const movesets = computed(() => {
  return CharacterAbilities[props.hero]
})
</script>

<template>
  <h1>{{ info.name }}</h1>
  <h2>Abilities</h2>
  <Tabs :value="0" multiple>
    <TabList>
      <Tab v-for="(moveset, index) in movesets" :key="index" :value="index">
        {{ moveset.condition ?? 'Default' }}
      </Tab>
    </TabList>
    <TabPanels>
      <TabPanel v-for="(moveset, index) in movesets" :key="index" :value="index">
        <MoveSet :moveset="moveset" />
      </TabPanel>
    </TabPanels>
  </Tabs>
</template>

<style lang="scss" scoped></style>
