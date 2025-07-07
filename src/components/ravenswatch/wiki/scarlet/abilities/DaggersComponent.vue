<script setup lang="ts">
import AbilityCard from '../../AbilityCard.vue'
import imageSource from '../../../../../assets/ravenswatch/scarlet/abilities/Dagger.webp'
import { AbilityType } from '../../characters'
import { ComboPointTooltip } from '../../utility'
</script>
<template>
  <AbilityCard name="Daggers" :image="imageSource" :type="AbilityType.Attack">
    <ul>
      <li>
        Chain together a series of dagger slashes, each one dealing
        <span class="germania-one green">15</span> damage
      </li>
      <li>
        Every two consecutive attacks that hit an enemy generates one
        <span v-tooltip.top="ComboPointTooltip" class="germania-one">COMBO POINT</span> (up to 3 can
        be stored)
      </li>
    </ul>
  </AbilityCard>
</template>

<style lang="scss" scoped></style>
