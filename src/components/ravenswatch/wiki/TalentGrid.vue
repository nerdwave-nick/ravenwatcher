<script setup lang="ts">
import { computed } from 'vue'
import { Character } from '../../../components/ravenswatch/wiki/characters'
import { CharacterTalents } from '../../../components/ravenswatch/wiki/characters'
const props = defineProps<{ hero: Character }>()
const talentComponents = computed(() => {
  return CharacterTalents[props.hero]
})
</script>

<template>
  <div class="grid">
    <component v-for="(talent, index) in talentComponents" :is="talent" :key="index" />
  </div>
</template>

<style lang="scss" scoped>
.grid {
  position: relative;
  top: 0%;
  left: 0%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  gap: 8px;

  font-size: 0.9em;
  color: #b1b2b5;
  font-weight: 200;

  margin: 18px;
  margin-top: 0em;
}
</style>
