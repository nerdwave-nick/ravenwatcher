import type { Component, DefineComponent } from 'vue'

export enum Character {
  Piper = 'the_pied_piper',
  Scarlet = 'scarlet',
  Beowulf = 'beowulf',
  Snowqueen = 'the_snow_queen',
  Aladdin = 'aladdin',
  Melusine = 'melusine',
  Geppetto = 'geppetto',
  Wukong = 'sun_wukong',
  Carmilla = 'carmilla',
  Romeo = 'romeo',
  Juliet = 'juliet',
}

export type CharacterInfo = {
  name: string
  breadcrumb: string
}

export function getCharacterWikiRoute(c: Character): string {
  return `/ravenswatch/wiki/heroes/${c}`
}

export const CharacterRoutes: { [k in Character]: CharacterInfo } = {
  [Character.Scarlet]: {
    name: 'Scarlet',
    breadcrumb: 'scarlet',
  },
  [Character.Piper]: {
    name: 'The Pied Piper',
    breadcrumb: 'the pied piper',
  },
  [Character.Beowulf]: {
    name: 'Beowulf',
    breadcrumb: 'beowulf',
  },
  [Character.Snowqueen]: {
    name: 'The Snow Queen',
    breadcrumb: 'the snow queen',
  },
  [Character.Aladdin]: {
    name: 'Aladdin',
    breadcrumb: 'aladdin',
  },
  [Character.Melusine]: {
    name: 'Melusine',
    breadcrumb: 'melusine',
  },
  [Character.Geppetto]: {
    name: 'Geppetto',
    breadcrumb: 'geppetto',
  },
  [Character.Wukong]: {
    name: 'Sun Wukong',
    breadcrumb: 'sun wukong',
  },
  [Character.Carmilla]: {
    name: 'Carmilla',
    breadcrumb: 'carmilla',
  },
  [Character.Romeo]: {
    name: 'Romeo',
    breadcrumb: 'romeo',
  },
  [Character.Juliet]: {
    name: 'Juliet',
    breadcrumb: 'juliet',
  },
}

export enum AbilityType {
  Trait = 'TRAIT',
  Attack = 'ATTACK',
  Power = 'POWER',
  Special = 'SPECIAL',
  Defense = 'DEFENSE',
  Ultimate = 'ULTIMATE',
}
export enum MoveSetCondition {
  Day = 'DAY',
  Night = 'NIGHT',
  Solo = 'SOLO',
  Partnered = 'PARTNERED',
}
export type MoveSet = {
  condition?: MoveSetCondition
  [AbilityType.Trait]: Ability
  [AbilityType.Attack]: Ability
  [AbilityType.Power]: Ability
  [AbilityType.Special]: Ability
  [AbilityType.Defense]: Ability
  [AbilityType.Ultimate]: Ability[]
}

export type Ability = Component | DefineComponent

import LycanthropeComponent from '../../../components/ravenswatch/wiki/scarlet/abilities/LycanthropeComponent.vue'
import SwiftStrikeComponent from '../../../components/ravenswatch/wiki/scarlet/abilities/SwiftStrikeComponent.vue'
import DaggersComponent from '../../../components/ravenswatch/wiki/scarlet/abilities/DaggersComponent.vue'
import CloakComponent from '../../../components/ravenswatch/wiki/scarlet/abilities/CloakComponent.vue'
import BombComponent from '../../../components/ravenswatch/wiki/scarlet/abilities/BombComponent.vue'
import HuntersSouvenirComponent from './scarlet/abilities/HuntersSouvenirComponent.vue'
import GrandmothersSouvenirComponent from './scarlet/abilities/GrandmothersSouvenirComponent.vue'
import ClawsComponent from '../../../components/ravenswatch/wiki/scarlet/abilities/ClawsComponent.vue'
import BiteComponent from '../../../components/ravenswatch/wiki/scarlet/abilities/BiteComponent.vue'
import LeapComponent from '../../../components/ravenswatch/wiki/scarlet/abilities/LeapComponent.vue'
import HowlComponent from '../../../components/ravenswatch/wiki/scarlet/abilities/HowlComponent.vue'
import GustingRoarComponent from '../../../components/ravenswatch/wiki/scarlet/abilities/GustingRoarComponent.vue'
import InTheBellyComponent from '../../../components/ravenswatch/wiki/scarlet/abilities/InTheBellyComponent.vue'

export const CharacterAbilities: { [k in Character]: MoveSet[] } = {
  [Character.Scarlet]: [
    {
      condition: MoveSetCondition.Day,
      [AbilityType.Trait]: LycanthropeComponent,
      [AbilityType.Attack]: DaggersComponent,
      [AbilityType.Power]: SwiftStrikeComponent,
      [AbilityType.Special]: BombComponent,
      [AbilityType.Defense]: CloakComponent,
      [AbilityType.Ultimate]: [HuntersSouvenirComponent, GrandmothersSouvenirComponent],
    },
    {
      condition: MoveSetCondition.Night,
      [AbilityType.Trait]: LycanthropeComponent,
      [AbilityType.Attack]: ClawsComponent,
      [AbilityType.Power]: BiteComponent,
      [AbilityType.Special]: LeapComponent,
      [AbilityType.Defense]: HowlComponent,
      [AbilityType.Ultimate]: [GustingRoarComponent, InTheBellyComponent],
    },
  ],
  [Character.Aladdin]: [],
  [Character.Romeo]: [],
  [Character.Piper]: [],
  [Character.Wukong]: [],
  [Character.Melusine]: [],
  [Character.Snowqueen]: [],
  [Character.Geppetto]: [],
  [Character.Beowulf]: [],
  [Character.Juliet]: [],
  [Character.Carmilla]: [],
}

export enum TalentType {
  Default = '',
  Starter = 'STARTER',
  UltimateUpgrade = 'ULTIMATE UPGRADE',
}

export type TalentComponent = Component | DefineComponent
export type Talent = TalentComponent

import DistantExplosionsComponent from '../../../components/ravenswatch/wiki/scarlet/talents/DistantExplosionsComponent.vue'
export const CharacterTalents: { [k in Character]: Talent[] } = {
  [Character.Aladdin]: [],
  [Character.Romeo]: [],
  [Character.Piper]: [],
  [Character.Scarlet]: [DistantExplosionsComponent],
  [Character.Wukong]: [],
  [Character.Melusine]: [],
  [Character.Snowqueen]: [],
  [Character.Geppetto]: [],
  [Character.Beowulf]: [],
  [Character.Juliet]: [],
  [Character.Carmilla]: [],
}
