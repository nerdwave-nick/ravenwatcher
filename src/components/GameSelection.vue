<script setup lang="ts">
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import { useGameSelectionStore, availableGames } from '../stores/gameSelection.ts'
import GameBanner from './GameBanner.vue'

import { storeToRefs } from 'pinia'
const gameStore = useGameSelectionStore()
const { visible, currentGame } = storeToRefs(gameStore)
</script>
<template>
  <Dialog
    v-model:visible="visible"
    modal
    dismissableMask
    :draggable="false"
    header="Select Game"
    :style="{ width: '50rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <div class="list">
      <Button
        class="col"
        :outlined="true"
        :severity="currentGame.id == game.id ? '' : 'secondary'"
        v-for="game in availableGames"
        :key="game.id"
        @click="gameStore.changeCurrentGame(game.id)"
      >
        <GameBanner class="img" :game="game.id" :with-title="true" :size="200" />
      </Button>
    </div>
  </Dialog>
</template>

<style lang="scss" scoped>
.list {
  display: flex;
  justify-content: space-evenly;
  gap: 1em;
}
.list .col {
  flex: 1;
}
.list .col .img {
  width: 100%;
  height: 100%;
}
</style>
