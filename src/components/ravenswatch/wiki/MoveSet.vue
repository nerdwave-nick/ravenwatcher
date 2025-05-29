<script setup lang="ts">
import { computed } from 'vue'
import { AbilityType } from './characters'
import type { MoveSet } from './characters'
const props = defineProps<{
  moveset: MoveSet
}>()

const traitComponent = computed(() => {
  return props.moveset[AbilityType.Trait]
})
const attackComponent = computed(() => {
  return props.moveset[AbilityType.Attack]
})
const powerComponent = computed(() => {
  return props.moveset[AbilityType.Power]
})
const specialComponent = computed(() => {
  return props.moveset[AbilityType.Special]
})
const defenseComponent = computed(() => {
  return props.moveset[AbilityType.Defense]
})
const ultimateComponents = computed(() => {
  return props.moveset[AbilityType.Ultimate]
})
</script>

<template>
  <div class="container">
    <component class="trait" :is="traitComponent" />
    <component class="attack" :is="attackComponent" />
    <component class="power" :is="powerComponent" />
    <component class="special" :is="specialComponent" />
    <component class="defense" :is="defenseComponent" />
    <component class="ult1" :is="ultimateComponents[0]" />
    <component class="ult2" :is="ultimateComponents[1]" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  font-size: 0.9em;
  color: #b1b2b5;
  font-weight: 200;
}
// .trait {
//   grid-column: span 2 / span 2;
//   grid-column-start: 0;
// }
// .attack {
//   grid-column: span 2 / span 2;
//   grid-row-start: 2;
// }
// .power {
//   grid-column: span 2 / span 2;
//   grid-row-start: 2;
// }
// .special {
//   grid-column: span 2 / span 2;
//   grid-row-start: 3;
// }
// .defense {
//   grid-column: span 2 / span 2;
//   grid-row-start: 3;
// }
// .ult1 {
//   grid-column: span 2 / span 2;
//   grid-row-start: 4;
// }
// .ult2 {
//   grid-column: span 2 / span 2;
//   grid-row-start: 4;
// }
</style>
