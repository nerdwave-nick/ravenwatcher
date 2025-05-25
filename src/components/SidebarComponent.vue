<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Image from 'primevue/image'
import img from '../assets/nerdwave-small.svg'
import { useGameSelectionStore } from '../stores/gameSelection.ts'
import GameBanner from './GameBanner.vue'
import { storeToRefs } from 'pinia'
const gameStore = useGameSelectionStore()
const { currentGame } = storeToRefs(gameStore)

const expand = ref<boolean>(true)
</script>
<template>
  <div :class="{ sidebar: true, expanded: expand }"></div>
  <div :class="{ sidebar: true, fixed: true, expanded: expand }">
    <div class="expansion-area">
      <Image :src="img" width="38" />
      <Button
        class="expansion-button"
        :icon="expand ? 'pi pi-chevron-left' : 'pi pi-chevron-right'"
        text
        @click="expand = !expand"
      />
    </div>
    <Button class="game-banner" outlined text @click="gameStore.toggle">
      <GameBanner class="game-banner-image" :game="currentGame.id" :size="200" />
    </Button>

    <div>
      <RouterLink to="/ravenswatch/builder">Builder</RouterLink>
      <RouterLink to="/ravenswatch/wiki">Wiki</RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game-banner {
  border-radius: 8px;
  padding: 0px;
  margin: 0px 2px;
  justify-content: left;
}
.game-banner-image {
  min-width: 200px;
  width: 200px;
  max-width: 200px;
  min-height: 50px;
  max-height: 50px;
}
.expansion-area {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sidebar {
  overflow-x: hidden;
  font-size: 0.6em;
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 60px;
  min-width: 60px;
  width: 60px;
  position: relative;
  left: 0px;
  top: 0px;
  background-color: black;
  transition: all 0.1s ease-out;
}
.fixed {
  position: fixed;
}
.expanded {
  width: 200px;
  min-width: 200px;
  max-width: 200px;
}
</style>
