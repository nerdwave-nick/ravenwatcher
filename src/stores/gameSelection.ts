import { ref } from 'vue'
import { defineStore } from 'pinia'

export type GameSelection = {
  id: AvailableGames
  name: string
}
export type AvailableGames = 'ravenswatch' | 'rabbitandsteel'
export const availableGames: readonly GameSelection[] = [
  {
    id: 'ravenswatch',
    name: 'Ravenswatch',
  },
  {
    id: 'rabbitandsteel',
    name: 'Rabbit & Steel',
  },
] as const
export const useGameSelectionStore = defineStore('game-selection', () => {
  const visible = ref<boolean>(false)
  const currentGame = ref<GameSelection>(availableGames[0])
  function changeCurrentGame(newCurrentGame: AvailableGames) {
    console.log('updating current game')
    currentGame.value = availableGames.find((x) => x.id == newCurrentGame)!
  }
  function toggle() {
    console.log('toggling game selection screen')
    visible.value = !visible.value
  }

  return { visible, toggle, currentGame, changeCurrentGame }
})
