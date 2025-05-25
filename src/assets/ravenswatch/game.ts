import type { VueElement } from 'vue'
import type { GamePlugin, GameTitle } from './../game'
import { defineComponent } from 'vue'

type Component = string

type Icon = string

type AbilitySlot = 'trait' | 'attack' | 'power' | 'special' | 'defense' | 'ultimate'

type Ability = {
  slot: AbilitySlot
  name: string
  icon?: Icon
  display?: (gameState: GameState) => Component
}

type TalentSlot = 'starter' | 'normal' | 'ultimate_upgrade'

type Talent = {
  slot: TalentSlot
  name: string
  icon?: Icon
  display?: (gameState: GameState) => Component
}

export type Hero = {
  name: string
  icons: Icon[]
  health: number
  abilities: Ability[]
  talents: Talent[]
}

const Aladdin: Hero = {
  name: 'Aladdin',
  icons: ['someicon'],
  health: 100,
  abilities: [
    { slot: 'trait', name: 'Jinniya of the Lamp' },
    { slot: 'attack', name: 'Scimitars' },
    { slot: 'power', name: 'Ring Jinn' },
    { slot: 'special', name: 'Enchanted Blades' },
    { slot: 'defense', name: 'Somersault' },
    { slot: 'ultimate', name: 'Dream Wish' },
    { slot: 'ultimate', name: 'Magic Carpet' },
  ],
  talents: [
    { slot: 'starter', name: 'Aerial Catch' },
    { slot: 'starter', name: "Jinniya's Gift" },
    { slot: 'starter', name: "Jinn's Might" },
    { slot: 'starter', name: 'Wish of Omnipotence' },

    { slot: 'normal', name: 'Slide Attack' },
    { slot: 'normal', name: 'Shard Blades' },
    { slot: 'normal', name: 'Air Dash' },
    { slot: 'normal', name: "Jinn's Fury" },
    { slot: 'normal', name: 'Healing Blades' },
    { slot: 'normal', name: 'Major Enchantment' },
    { slot: 'normal', name: 'Dancing Blades' },
    { slot: 'normal', name: 'Cyclonic Appearance' },
    { slot: 'normal', name: 'Dive' },
    { slot: 'normal', name: 'Spinning Strikes' },
    { slot: 'normal', name: 'Acrobatics' },
    { slot: 'normal', name: 'Swordjinn' },
    { slot: 'normal', name: 'Leaping Strike' },
    { slot: 'normal', name: 'Tornado Jump' },
    { slot: 'normal', name: 'Sand Vortex' },
    { slot: 'normal', name: 'Dream Scimitars' },
    { slot: 'normal', name: 'Enchanted Jinn' },
    { slot: 'normal', name: 'Master Thief' },

    { slot: 'ultimate_upgrade', name: 'Wondrous Wishes' },
    { slot: 'ultimate_upgrade', name: 'Dream Stride' },
    { slot: 'ultimate_upgrade', name: 'Infinite Wishes' },
    { slot: 'ultimate_upgrade', name: 'Quick Ride' },
  ],
}

type TalentRarity = 'common' | 'rare' | 'epic' | 'legendary'
type TalentWithRarity = Talent & { rarity: TalentRarity }

export type Stats = {
  vitality: number
  attack: number
  armor: number
  critChance: number
  critDamage: number
}

type GameState = {
  hero: Hero
  level: number
  stats: Stats
  talents: TalentWithRarity[]
}

import RavensWatch from './RavensWatch.vue'
class RavenswatchPlugin implements GamePlugin {
  constructor() {}
  register(): GameTitle {
    return {
      icon: 'https://static.wikia.nocookie.net/ravenswatch/images/d/dd/The_Pied_Piper.jpeg/revision/latest/top-crop/width/280/height/220?cb=20240620175616',
      name: 'Ravenswatch',
    }
  }
  init() {
    return RavensWatch as unknown as VueElement
  }
  close() {}
}

export const ravenswatchPlugin = new RavenswatchPlugin()
