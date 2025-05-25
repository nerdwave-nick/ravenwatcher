import { VueElement } from 'vue'

export type GameTitle = {
  icon: string
  name: string
}

export interface GamePlugin {
  register(): GameTitle
  init(): VueElement
  close(): void
}
