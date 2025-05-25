<script setup lang="ts">
import { defineProps } from 'vue'
import { availableGames, type AvailableGames } from '../stores/gameSelection.ts'
import ravenswatchBanner from '../assets/ravenswatch/banner.png'
import rabbitandsteelBanner from '../assets/rabbitandsteel/banner.png'
import { computed } from 'vue'
const props = defineProps<{
  game: AvailableGames
  size: number
  withTitle?: boolean
}>()
const image = computed(() => {
  switch (props.game) {
    case 'ravenswatch':
      return ravenswatchBanner
    case 'rabbitandsteel':
      return rabbitandsteelBanner
    default:
      return ''
  }
})
const title = computed(() => {
  if (!props.withTitle) return undefined
  return availableGames.find((x) => x.id == props.game)?.name
})
</script>
<template>
  <div class="container">
    <img class="image" :src="image" :width="size" />
    <div v-if="title" class="middle">
      <div class="text">{{ title }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
}
.image {
  display: block;
  width: 100%;
  height: auto;
  backface-visibility: hidden;
}

.middle {
  transition: 0.5s ease;
  opacity: 1;
  position: absolute;
  width: 100%;
  top: 15%;
}

.text {
  position: relative;
  background: rgba(0, 0, 0, 0.7); /* Black see-through */
  color: var(--p-text-color);
  font-size: 2vw;
  font-weight: 500;
  padding: 1em;
  text-align: center;
}
</style>
