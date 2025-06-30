<script setup lang="ts">
import { defineProps } from 'vue'
import {
  Character,
  CharacterRoutes,
  CharacterAbilities,
} from '../../../components/ravenswatch/wiki/characters'
import { computed } from 'vue'
import MoveSet from './MoveSet.vue'
import HeroOverview from './HeroOverview.vue'
import TalentGrid from './TalentGrid.vue'

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
  <HeroOverview :hero="hero" />
  <h2>Abilities</h2>
  <Tabs class="rwtabs" :value="0" multiple>
    <TabList>
      <Tab v-for="(moveset, index) in movesets" :key="index" :value="index">
        <span class="germania-one">{{ moveset.condition ?? 'Default' }}</span>
      </Tab>
    </TabList>
    <TabPanels>
      <TabPanel v-for="(moveset, index) in movesets" :key="index" :value="index">
        <MoveSet :moveset="moveset" />
      </TabPanel>
    </TabPanels>
  </Tabs>
  <h2>Talents</h2>
  <TalentGrid :hero="hero" />
  <div class="spacer" />
</template>

<style lang="scss" scoped>
.rwtabs {
  --p-tabs-tab-active-border-color: var(--r-color-red);
  --p-tabs-tab-active-color: var(--p-tabs-tab-color);
  --p-tabs-tab-border-width: 1px 0 0 0;
}
.spacer {
  padding-bottom: 10em;
}
</style>
